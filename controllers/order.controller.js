const asyncHandler = require('../middleware/asyncHandler');
const Order = require('../models/Order.model');
const ErrorResponse = require('../utils/ErrorResponse');
const User = require('../models/User.model');
const Kid = require('../models/Kid.model');
const Agency = require('../models/Agency.model');
const Holidays = require("date-holidays");

const getType = (type) => {
    let price=0;
    if(type==='breakfast') price = 10;
    else if(type==='lunch') price = 12;
    else if(type==='soup') price = 5;
    else if(type==='main dish') price = 12;
    else if(type==='dinner') price = 15;
    else if(type==='tea time') price = 10;
    return price;
}

const getDate = (date, day) => {
    const newDate = new Date(date);
    if(date.getDay() < day) {
        newDate.setDate(date.getDate()+(day - date.getDay()))
    } else if (date.getDay() > day) {
        let diff = day - date.getDay();
        newDate.setDate(date.getDate() + diff + 7);
    }
    return newDate;
}

// @desc    Create order for choosen kid
// @route   POST /api/v1/orders/:kidCode
// @access  Private
exports.createOrder = asyncHandler(async (req, res, next) => {
    const hd = new Holidays('PL');
    const user = req.user;
    let { startDate, orders, comments, holidays } = req.body;
    startDate = new Date(startDate);
    let meals = [];
    let endDate = new Date(startDate);
    const kid = await Kid.findOne({kidCode: req.params.kidCode});
    const agency = await Agency.findOne({agencyCode: user.agencyCode});

    //check if date is proper
    if(startDate <= new Date (Date.now())) {
        return next (new ErrorResponse(`Please provide date later than today`, 409));
    }

    //check if kid exist
    if(!kid) {
        return next (new ErrorResponse(`Kid with code ${req.params.kidCode} not found`, 404));
    }

    //check if agency or parent has choosen kid
    if(user.role === 'agency') {
      const kids = await Kid.find({agencyCode: user.agencyCode});
      let hasKid=false;
      for(const k of kids) {
          if(k.agencyCode===kid.agencyCode) {
            hasKid = true;
            break;
          }
      }
      if(!hasKid) {
        return next (new ErrorResponse(`Kid with code ${req.params.kidCode} not found`, 404));
      }
    } else if(user.role==='parent') {
        const parent = await User.findOne({email: user.email});
        if(!parent.kids.includes(kid.id)) {
            return next (new ErrorResponse(`Kid with code ${req.params.kidCode} not found`, 404));
        }
    }

    //check if order can start on choosen date
    const kidOrders = await Order.find({kidCode: req.params.kidCode});
    for (const o of kidOrders) {
        if(startDate <= o.endDate) {
            return next (new ErrorResponse(`Your previous order has not finished`, 409));
        }
    }

    if(agency.ordersPeriod==='day') {
        if(!holidays) {
            if(hd.isHoliday(startDate).type === 'public') {
                return next (new ErrorResponse(`Choosen data is a public holiday`, 409));  
            }
        }
        for (const o of orders) {
            for (const t of o.types) {
                let price = getType(t);
                meals.push({
                    date: startDate,
                    type: t,
                    price
                })
            }
        }
        if(meals.length===0) {
            return next (new ErrorResponse(`Please provide some meal`, 409)); 
        }
        let finalPrice = 0;
        for(m of meals) {
            finalPrice += m.price;
        }
        if(user.wallet > 0) finalPrice -= user.wallet
        const order = await Order.create({
            agencyCode: user.agencyCode,
            kidCode: req.params.kidCode,
            period: agency.ordersPeriod,
            meals,
            price: finalPrice,
            comments,
            startDate,
            endDate
        })
        res.status(200).json({
            success: true,
            data: order
        });
    }
    else if(agency.ordersPeriod === 'week') {
    
    endDate.setDate(endDate.getDate() + 7);

    for (const o of orders) {
        let date = getDate(startDate, o.day);
        if(!holidays) {
            if(hd.isHoliday(date).type === 'public') continue;
        }
        for (const t of o.types) {
            let price = getType(t);
            meals.push({
                date,
                type: t,
                price
            })
        }
    }
    if(meals.length===0) {
        return next (new ErrorResponse(`Please provide some meal`, 409)); 
    }
    let finalPrice = 0;
    for(m of meals) {
        finalPrice += m.price;
    }
    if(user.wallet > 0) finalPrice -= user.wallet
    const order = await Order.create({
        agencyCode: user.agencyCode,
        kidCode: req.params.kidCode,
        period: agency.ordersPeriod,
        meals,
        price: finalPrice,
        comments,
        startDate,
        endDate
    })
    res.status(200).json({
        success: true,
        data: order
    });
    }
    if(agency.ordersPeriod === 'month' || agency.ordersPeriod ==='semestr') {
        if(agency.ordersPeriod ==='month') endDate.setDate(endDate.getDate() + 30);
        else if(agency.ordersPeriod ==='semestr' && startDate>agency.winterTermEnd) endDate = agency.summerTermEnd;
        else endDate = agency.winterTermEnd;
        for (const o of orders) {      
            let date = new Date(startDate);
            for (const t of o.types) {
                let price = getType(t);
                date = getDate(startDate, o.day);

                while(date <= endDate) {
                    if(!holidays) {
                        if(hd.isHoliday(date).type === 'public') {
                            date.setDate(date.getDate()+7);
                            continue;
                        }
                    }
                    let meal = {
                        date: new Date(date),
                        type: t,
                        price
                    }
                    meals.push(meal);
                    date.setDate(date.getDate()+7);
                }
            }
        }
        if(meals.length===0) {
            return next (new ErrorResponse(`Please provide some meal`, 409)); 
        }
        let finalPrice = 0;
        for(m of meals) {
            finalPrice += m.price;
        }
        if(user.wallet > 0) finalPrice -= user.wallet
        const order = await Order.create({
            agencyCode: user.agencyCode,
            kidCode: req.params.kidCode,
            period: agency.ordersPeriod,
            meals,
            price: finalPrice,
            comments,
            startDate,
            endDate
        })
        res.status(200).json({
            success: true,
            data: order
        });
    }

});

// @desc    Get orders by agencyCode
// @route   GET /api/v1/orders/agencyOrders/:agencyCode?page=${page}&limit=${limit}
// @access  Private, admin, agency
exports.getOrdersByAgencyCode = asyncHandler(async(req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    const count = await Order.countDocuments({agencyCode: req.params.agencyCode}).exec();
    if(count === 0) {
        return next(new ErrorResponse(`Agency with code ${req.params.agencyCode} has not any orders.`, 404))
    }
    if (endIndex < count) {
        results.next = {
          page: page + 1,
          limit: limit
        }
      }
      
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit
        }
    }

    results.numberOfPages = Math.ceil(count / limit);
    try {
      results.results = await Order.find({
          agencyCode: req.params.agencyCode
        })
        .limit(limit)
        .skip(startIndex)
        .select('-meals -__v')
        .exec()
      res.paginatedResults = results
      next()
    } catch (e) {
      res.status(500).json({
        success: false,  
        error: e.message 
    })
    }
    res.status(200).json({
        success: true,
        data: res.paginatedResults
    });
});

// @desc    Get orders by kidCode
// @route   GET /api/v1/orders/:kidCode?page=${page}&limit=${limit}
// @access  Private, agency, parent
exports.getOrdersByKidCode = asyncHandler(async(req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    const count = await Order.countDocuments({kidCode: req.params.kidCode}).exec();
    if(count === 0) {
        return next(new ErrorResponse(`Kid with code ${req.params.kidCode} has not any orders.`, 404))
    }
    if (endIndex < count) {
        results.next = {
          page: page + 1,
          limit: limit
        }
      }
      
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit
        }
    }

    results.numberOfPages = Math.ceil(count / limit);
    try {
      results.results = await Order.find({
          kidCode: req.params.kidCode
        })
        .limit(limit)
        .skip(startIndex)
        .select('-meals -__v')
        .exec()
      res.paginatedResults = results
      next()
    } catch (e) {
      res.status(500).json({
        success: false,  
        error: e.message 
    })
    }
    res.status(200).json({
        success: true,
        data: res.paginatedResults
    });
});

// @desc    Get order by ID
// @route   GET /api/v1/orders/order/:id?page=${page}&limit=${limit}
// @access  Private
exports.getOrderById = asyncHandler(async(req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    let order = await Order.findById({_id: req.params.id});
    
    if(!order) {
        return next(new ErrorResponse(`Order with code ${req.params.id} has not exist.`, 404))
    }
    if (endIndex < order.meals.length) {
        results.next = {
          page: page + 1,
          limit: limit
        }
      }
      
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit
        }
    }

    results.numberOfPages = Math.ceil(order.meals.length / limit);
    try {
      order.meals =  order.meals.slice((page-1)*limit, page*limit);
      results.results = order
      res.paginatedResults = results
      next()
    } catch (e) {
      res.status(500).json({
        success: false,  
        error: e.message 
    })
    }
    res.status(200).json({
        success: true,
        data: res.paginatedResults
    });
});

// @desc    Get available date for order
// @route   GET /api/v1/orders/date/:kidCode
// @access  Private, agency, parent
exports.getAvailableDate=asyncHandler (async (req, res, next) => {
    const kid = await Kid.findOne({kidCode: req.params.kidCode});
    if(!kid) {
        return next(new ErrorResponse(`Kid with code ${req.params.kidCode} does not exist.`, 404))
    }

    const lastOrder = await Order.findOne({kidCode: req.params.kidCode}).sort({endDate: -1});
    let date = new Date (Date.now());
    date.setDate(date.getDate()+1);
    if(lastOrder) {
        date = new Date (lastOrder.endDate);
        date.setDate(date.getDate()+1);
    }
    res.status(200).json({
        success: true,
        data: date,
    })
});

// @desc    Update payment status
// @route   POST /api/v1/orders/payment/:id
// @access  Private, admin, agency
exports.updatePaymentStatus = asyncHandler (async (req, res, next) => {
    await Order.updateOne({_id: req.params.id}, {paid: true});
    
    res.status(200).json({
        success: true,
    })
});

// @desc    Delete meal
// @route   Delete /api/v1/orders/order/:id/kid/:kidCode/meal/:mealId
// @access  Private, admin
exports.deleteMeal = asyncHandler(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    const user = req.user;
    let meal = {};
    const date = new Date (Date.now());

    if(!order) {
        return next(new ErrorResponse(`Order with code ${req.params.id} does not exist.`, 404));
    }
    for(const m of order.meals) {
        if (m.id === req.params.mealId) {
            meal = m;
            break;
        }
    }

    if(Object.prototype.toString.call(meal) === '[object Object]' && JSON.stringify(meal) === '{}'){
        return next(new ErrorResponse(`Meal with code ${req.params.mealId} does not exist.`, 404));  
    }

    let mealDate = new Date (meal.date);
    mealDate.setDate(mealDate.getDate() - 1);

    if(date >= mealDate) {
        return next(new ErrorResponse(`You can not delete this meal`, 409));  
    }
    
    if(!order.paid) {
        let newPrice = order.price - meal.price;
        await order.meals.pull(req.params.mealId);
        await Order.updateOne({_id: req.params.id}, {price: newPrice, meals: order.meals});
    } else {
        if(user.role==='parent') {
            user.wallet += meal.price;
            await User.updateOne({_id: user.id}, {wallet: user.wallet});
            order.meals.pull(req.params.mealId);
            await Order.updateOne({_id: req.params.id}, {meals: order.meals});
        } else if (user.role==='agency') {
            const parents = await User.find({agencyCode: user.agencyCode});
            
            for (const p of parents) {
                let kid = await Kid.findOne({kidCode: req.params.kidCode});
                if(!kid) {
                    return next(new ErrorResponse(`Kid with code ${req.params.kidCode} does not exist.`, 404))
                }
                if(p.kids.includes(kid.id)) {
                    p.wallet += meal.price;
                    await User.updateOne({_id: p.id}, {wallet: p.wallet});
                    order.meals.pull(req.params.mealId);
                    await Order.updateOne({_id: req.params.id}, {meals: order.meals});
                }
            }
        }
    }
    
    res.status(200).json({
        success: true,
    })
});

// @desc    Check order's price for choosen kid
// @route   post /api/v1/orders/summary/:kidCode
// @access  Private
exports.getPriceForOrder = asyncHandler(async (req, res, next) => {
    const hd = new Holidays('PL');
    const user = req.user;
    let { startDate, orders, comments, holidays } = req.body;
    startDate = new Date(startDate);
    let meals = [];
    let endDate = new Date(startDate);
    const kid = await Kid.findOne({kidCode: req.params.kidCode});
    const agency = await Agency.findOne({agencyCode: user.agencyCode});

    //check if date is proper
    if(startDate <= new Date (Date.now())) {
        return next (new ErrorResponse(`Please provide date later than today`, 409));
    }

    //check if kid exist
    if(!kid) {
        return next (new ErrorResponse(`Kid with code ${req.params.kidCode} not found`, 404));
    }

    //check if agency or parent has choosen kid
    if(user.role === 'agency') {
      const kids = await Kid.find({agencyCode: user.agencyCode});
      let hasKid=false;
      for(const k of kids) {
          if(k.agencyCode===kid.agencyCode) {
            hasKid = true;
            break;
          }
      }
      if(!hasKid) {
        return next (new ErrorResponse(`Kid with code ${req.params.kidCode} not found`, 404));
      }
    } else if(user.role==='parent') {
        const parent = await User.findOne({email: user.email});
        if(!parent.kids.includes(kid.id)) {
            return next (new ErrorResponse(`Kid with code ${req.params.kidCode} not found`, 404));
        }
    }

    //check if order can start on choosen date
    const kidOrders = await Order.find({kidCode: req.params.kidCode});
    for (const o of kidOrders) {
        if(startDate <= o.endDate) {
            return next (new ErrorResponse(`Your previous order has not finished`, 409));
        }
    }

    if(agency.ordersPeriod==='day') {
        if(!holidays) {
            if(hd.isHoliday(startDate).type === 'public') {
                return next (new ErrorResponse(`Choosen data is a public holiday`, 409));  
            }
        }
        for (const o of orders) {
            for (const t of o.types) {
                let price = getType(t);
                meals.push({
                    date: startDate,
                    type: t,
                    price
                })
            }
        }
        if(meals.length===0) {
            return next (new ErrorResponse(`Please provide some meal`, 409)); 
        }
        let finalPrice = 0;
        for(m of meals) {
            finalPrice += m.price;
        }
        if(user.wallet > 0) finalPrice -= user.wallet

        res.status(200).json({
            success: true,
            data: finalPrice
        });
    }
    else if(agency.ordersPeriod === 'week') {
    
    endDate.setDate(endDate.getDate() + 7);

    for (const o of orders) {
        let date = getDate(startDate, o.day);
        if(!holidays) {
            if(hd.isHoliday(date).type === 'public') continue;
        }
        for (const t of o.types) {
            let price = getType(t);
            meals.push({
                date,
                type: t,
                price
            })
        }
    }
    if(meals.length===0) {
        return next (new ErrorResponse(`Please provide some meal`, 409)); 
    }
    let finalPrice = 0;
    for(m of meals) {
        finalPrice += m.price;
    }
    if(user.wallet > 0) finalPrice -= user.wallet

    res.status(200).json({
        success: true,
        data: finalPrice
    });
    }
    if(agency.ordersPeriod === 'month' || agency.ordersPeriod ==='semestr') {
        if(agency.ordersPeriod ==='month') endDate.setDate(endDate.getDate() + 30);
        else if(agency.ordersPeriod ==='semestr' && startDate>agency.winterTermEnd) endDate = agency.summerTermEnd;
        else endDate = agency.winterTermEnd;
        for (const o of orders) {      
            let date = new Date(startDate);
            for (const t of o.types) {
                let price = getType(t);
                date = getDate(startDate, o.day);

                while(date <= endDate) {
                    if(!holidays) {
                        if(hd.isHoliday(date).type === 'public') {
                            date.setDate(date.getDate()+7);
                            continue;
                        }
                    }
                    let meal = {
                        date: new Date(date),
                        type: t,
                        price
                    }
                    meals.push(meal);
                    date.setDate(date.getDate()+7);
                }
            }
        }
        if(meals.length===0) {
            return next (new ErrorResponse(`Please provide some meal`, 409)); 
        }
        let finalPrice = 0;
        for(m of meals) {
            finalPrice += m.price;
        }
        if(user.wallet > 0) finalPrice -= user.wallet

        res.status(200).json({
            success: true,
            data: finalPrice
        });
    }
});
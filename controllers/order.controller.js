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
    startDate = new Date(`${startDate}T02:00:00`);
    console.log(startDate);
    let meals = [];
    let endDate = new Date(startDate);
    const kid = await Kid.findOne({kidCode: req.params.kidCode});
    const agency = await Agency.findOne({agencyCode: user.agencyCode});
    let wallet = 0;
    let userID = '';
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
      
      const parents = await User.find({agencyCode: user.agencyCode});      
        for (const p of parents) {
            if(p.kids.includes(kid.id)) {
              wallet = p.wallet ;
              userID = p._id;
            }
        }  
      } else if(user.role==='parent') {
          const parent = await User.findOne({email: user.email});
          if(!parent.kids.includes(kid.id)) {
              return next (new ErrorResponse(`Kid with code ${req.params.kidCode} not found`, 404));
          }
          wallet = parent.wallet;
          userID = user.id;
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
        if(wallet > 0) {
            finalPrice -= wallet;
            wallet = 0;
            await User.updateOne({_id: userID}, {wallet: wallet});
        }
        if(finalPrice < 0) {
            wallet -= finalPrice;
            finalPrice -= finalPrice;
            await User.updateOne({_id: userID}, {wallet: wallet});
        }
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
    if(wallet > 0) {
        finalPrice -= wallet;
        wallet = 0;
        await User.updateOne({_id: userID}, {wallet: wallet});
    }
    if(finalPrice < 0) {
        wallet -= finalPrice;
        finalPrice -= finalPrice;
        await User.updateOne({_id: userID}, {wallet: wallet});
    }
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
        if(wallet > 0) {
            finalPrice -= wallet;
            wallet = 0;
            await User.updateOne({_id: userID}, {wallet: wallet});
        }
        if(finalPrice < 0) {
            
            wallet -= finalPrice;
            console.log(wallet);
            finalPrice -= finalPrice;
            await User.updateOne({_id: userID}, {wallet: wallet});
        }
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
    let order = await Order.findById({_id: req.params.id}).populate({path: 'kid', select: 'firstName lastName -_id'})
    
    if(!order) {
        return next(new ErrorResponse(`Order with code ${req.params.id} has not exist.`, 404));
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
      order.meals.sort((a, b) => new Date(a.date) - new Date(b.date)); 
      results.results = order;
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

// @desc    Create order summery for choosen kid
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
    let wallet = 0;
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
    
    const parents = await User.find({agencyCode: user.agencyCode});      
      for (const p of parents) {
          if(p.kids.includes(kid.id)) {
            wallet = p.wallet ;
          }
      }  
    } else if(user.role==='parent') {
        const parent = await User.findOne({email: user.email});
        if(!parent.kids.includes(kid.id)) {
            return next (new ErrorResponse(`Kid with code ${req.params.kidCode} not found`, 404));
        }
        wallet = parent.wallet;
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
        // if(wallet > 0) {
        //     finalPrice -= wallet;
        // }
        // if(finalPrice < 0) {
        //     finalPrice -= finalPrice;
        // }

        res.status(200).json({
            success: true,
            data: {
                price: finalPrice,
                wallet
            }
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
    // if(wallet > 0) {
    //     finalPrice -= wallet;
    // }
    // if(finalPrice < 0) {
    //     finalPrice -= finalPrice;
    // }

    res.status(200).json({
        success: true,
        data: {
            price: finalPrice,
            wallet
        }
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
        // if(wallet > 0) {
        //     finalPrice -= wallet;
        // }
        // if(finalPrice < 0) {
        //     finalPrice -= finalPrice;
        // }
        
        res.status(200).json({
            success: true,
            data: {
                price: finalPrice,
                wallet
            }
        });
    }
});

// @desc    Get all kids for order
// @route   GET /api/v1/orders/create/kids
// @access  Private
exports.getKidsForOrder = asyncHandler(async (req, res, next) => {
    let kids = [];
    //User parent
    if (req.user.role === 'parent') {
      const parent = await User.findOne({ _id: req.user._id });
      kids = await Kid.find({ '_id':{ $in: parent.kids } }).select('-__v');
    } else if (req.user.role === 'agency') { 
      kids = await Kid.find({agencyCode: req.user.agencyCode}).select('-__v');; 
    }
    if(kids.length === 0) {
        return next (new ErrorResponse(`Kids not found`, 404));
    }
    //Send response
    res.status(200).json({
      success: true,
      data: kids
    });
  });

// @desc    Get orders stats
// @route   GET /api/v1/orders/stats?date=${date}
// @access  Private, admin

exports.getStats = asyncHandler(async (req, res, next) => {
    let stats = [];
    console.log(req.query.date);
    let date = new Date(Date.now());
    if(req.query.date !== undefined) 
        date = new Date(req.query.date);
        console.log(date);
    const orders = await Order.find({'startDate': {"$lte" : date}, 'endDate': {"$gte": date}}).sort({agencyCode: 1});
    console.log(orders);
    let agency = '';
    let breakfast = 0;
    let lunch = 0;
    let soup = 0;
    let mainDish = 0;
    let dinner = 0;
    let teaTime = 0;
    let name = {};
    for(o of orders) {
        if(agency !== o.agencyCode && agency !=='') {
            if(breakfast + lunch + soup + mainDish + dinner + teaTime > 0) {
                stats.push({
                    agency: name.name,
                    breakfast,
                    lunch,
                    soup,
                    'main dish': mainDish,
                    dinner,
                    'tea time': teaTime
                });  
                breakfast = 0;
                lunch = 0;
                soup = 0;
                mainDish = 0;
                dinner = 0;
                teaTime = 0;
            }
           }
           agency = o.agencyCode;
           name = await Agency.findOne({agencyCode: agency});
           
        for(m of o.meals) {
            if (new Date(m.date.setHours(1, 0, 0, 0)).getTime() !== date.getTime()) continue;
            if(m.type === 'breakfast') breakfast += 1;
            else if(m.type === 'lunch') lunch += 1;
            else if(m.type === 'soup') soup += 1;
            else if(m.type === 'main dish') mainDish += 1;
            else if(m.type === 'dinner') dinner += 1;
            else if(m.type === 'tea time') teaTime += 1;
        }
    }
    if(breakfast + lunch + soup + mainDish + dinner + teaTime > 0) {
    stats.push({
        agency: name.name,
        breakfast,
        lunch,
        soup,
        'main dish': mainDish,
        dinner,
        'tea time': teaTime
    });
    }
    res.status(200).json({
        success: true,
        data: stats
    })

})
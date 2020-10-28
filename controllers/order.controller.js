const asyncHandler = require('../middleware/asyncHandler');
const Order = require('../models/Order.model');
const ErrorResponse = require('../utils/ErrorResponse');
const User = require('../models/User.model');
const Kid = require('../models/Kid.model');
const Agency = require('../models/Agency.model');

const getType = (type) => {
    let price=0;
    if(type==='breakfast') price = 10;
    else if(type==='lunch') price = 12;
    else if(type==='soup') price = 5;
    else if(type==='main dish') price = 12;
    else if(type==='dinner') price = 15;
    else if(type==='tea') price = 10;
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
// @route   POST /api/v1/order/:kidCode
// @access  Private
exports.createOrder = asyncHandler(async (req, res, next) => {
    const user = req.user;
    let { period, startDate, orders, comments } = req.body;
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
    //check if order period is proper
    if(period !== agency.ordersPeriod) {
        return next (new ErrorResponse(`Please provide proper period`, 409));
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

    if(period==='day') {
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
        let finalPrice = 0;
        for(m of meals) {
            finalPrice += m.price;
        }
        const order = await Order.create({
            agencyCode: user.agencyCode,
            kidCode: req.params.kidCode,
            period,
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
    else if(period === 'week') {
    
    endDate.setDate(endDate.getDate() + 7);

    for (const o of orders) {
        let date = getDate(startDate, o.day);
        console.log(`dzien: ${o.day}`);
        console.log(`data: ${date}`);
        for (const t of o.types) {
            let price = getType(t);
            meals.push({
                date,
                type: t,
                price
            })
        }
    }
    let finalPrice = 0;
    for(m of meals) {
        finalPrice += m.price;
    }
    
    const order = await Order.create({
        agencyCode: user.agencyCode,
        kidCode: req.params.kidCode,
        period,
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
    if(period === 'month' || period==='semestr') {
        if(period==='month') endDate.setDate(endDate.getDate() + 30);
        else if(period==='semestr' && startDate>agency.winterTermEnd) endDate = agency.summerTermEnd;
        else endDate = agency.winterTermEnd;
        for (const o of orders) {      
            let date = new Date(startDate);
            for (const t of o.types) {
                let price = getType(t);
                date = getDate(startDate, o.day);
                while(date <= endDate) {
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
        let finalPrice = 0;
        for(m of meals) {
            finalPrice += m.price;
        }
        const order = await Order.create({
            agencyCode: user.agencyCode,
            kidCode: req.params.kidCode,
            period,
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

})
exports.getType = (type) => {
    let price=0;
    if(type==='breakfast') price = 10;
    else if(type==='lunch') price = 12;
    else if(type==='soup') price = 5;
    else if(type==='main dish') price = 12;
    else if(type==='dinner') price = 15;
    else if(type==='tea time') price = 10;
    return price;
}

exports.getDate = (date, day) => {
    const newDate = new Date(date);
    if(date.getDay() < day) {
        newDate.setDate(date.getDate()+(day - date.getDay()))
    } else if (date.getDay() > day) {
        let diff = day - date.getDay();
        newDate.setDate(date.getDate() + diff + 7);
    }
    return newDate;
}
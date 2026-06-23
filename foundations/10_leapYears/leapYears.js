const leapYears = function(year) {
    //checks if the remainder of a year divisible by 4 is exactly 0,
    //then makes sure the remainder is 0 & not divisible by 100, but is by 400
    return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0); 
};

// Do not edit below this line
module.exports = leapYears;

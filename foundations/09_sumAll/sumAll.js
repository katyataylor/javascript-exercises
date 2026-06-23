const sumAll = function(a, b) {

    //return error alert with negative numbers
    if (a < 0 || b < 0 
        || isNaN(a) || isNaN(b) 
        || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    //differentiates between smaller and larger number
    let start = Math.min(a, b);
    let end = Math.max(a, b);

    //Variable that holds the running total
    let totalSum = 0;

    //loops through every integer
    for (let i = start; i <= end; i++) {
        totalSum += i;
    }

    //return sum
    return totalSum;

};

// Do not edit below this line
module.exports = sumAll;

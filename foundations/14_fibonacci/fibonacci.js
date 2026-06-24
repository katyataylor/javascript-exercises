const fibonacci = function(count) {

    // Checks for edge cases first and returns what test expects
    const num = Number(count);
    if (num < 0 || Number.isNaN(num)) {
        return "OOPS";
    }
    if (num === 0) {
        return 0;
    }
    
    // Starts off with array and runs loop that adds to the sequence as long as the
    // array length is shorter than the count desired by test
    const fibArray = [1,1];
    while (count >= fibArray.length) {
        const secondLast = fibArray.at(-2);
        const last = fibArray.at(-1);
        fibArray.push(Number(secondLast + last));
    }

    // returns [count - 1] because javascript counting starts at 0, not 1
    return fibArray[count - 1];

};

// Do not edit below this line
module.exports = fibonacci;

const reverseString = function(string) {  //function with parameters defined as words & times
    
    let reversed = string.split("").reverse().join(""); //splits the string into an array, reverses array, joins it back into a string
    
    return reversed;

    //can be condensed into - return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;

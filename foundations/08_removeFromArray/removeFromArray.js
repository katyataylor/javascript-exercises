const removeFromArray = function(array, ...args) {
    const newArray = [];  //creates an empty array container

    array.forEach((item) => {
        //uses forEach to push every element into newArray
        //UNLESS included in function args
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;

    //Smarter way
    //const removeFromArray = function(array, ...args){
    //  return array.filter(val => !args.includes(val))
    //}
};

// Do not edit below this line
module.exports = removeFromArray;

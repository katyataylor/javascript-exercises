const palindromes = function (input) {
    let cleanInput = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, ``);
    let reversed = cleanInput.split(``).reverse().join(``);
    if (reversed === cleanInput) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

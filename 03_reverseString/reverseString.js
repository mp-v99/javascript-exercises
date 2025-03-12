const reverseString = function(userInput) {
    const toArray = userInput.split("");
    toArray.reverse();
    userInput = toArray.join('');

    return userInput
    
};  

// Do not edit below this line
module.exports = reverseString;

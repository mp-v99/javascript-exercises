const sumAll = function(startValue, endValue) {
    let finalResult = 0; // it inherits the result of each addition, it first receives the startValue, then the addition of startValue plus the following value and so on.
    if(startValue % 1 !== 0   // check that there are no floats, or data types other than numbers of negative numbers
    ||  typeof startValue !== 'number'
    ||  typeof endValue !== 'number'
    ||  startValue < 0) {
        return 'ERROR'
    }
    else if (startValue > endValue) { // starts summing backwards in cases where startValue is greater than endValue
        for (let i = startValue; i >= endValue; i--) {
            finalResult = finalResult += i;           
        }
        return finalResult;
    }
    else {
        for (let i = startValue; i <= endValue; i++) {
            finalResult += i;           
        }
        return finalResult;
    }
};

// Do not edit below this line
module.exports = sumAll;

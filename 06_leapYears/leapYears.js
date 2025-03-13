const leapYears = function(inputYear) {
    return(inputYear % 4 === 0 && inputYear % 100 !== 0 || inputYear % 400 === 0)
};

// Do not edit below this line
module.exports = leapYears;

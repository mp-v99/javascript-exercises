const repeatString = function(string, iterations) {
    let response = '';

    if (iterations < 0) {
        response = 'ERROR';
    }
    else {
        for (let i = 1; i <= iterations; i++) {
            response += string;
        }
    }
    return response
};

// Do not edit below this line
module.exports = repeatString;

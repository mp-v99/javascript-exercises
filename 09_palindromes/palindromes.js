const palindromes = function (str) {
    let originalStr = str
                        .replace(/[^a-z0-9]/gi, '')
                        .toLowerCase()
    let arr = originalStr
                        .split('')
                        .reverse()
                        .join('');
    if (arr == originalStr) {
        return true;
    }
    else {
        return false;
    }
};




// Do not edit below this line
module.exports = palindromes;

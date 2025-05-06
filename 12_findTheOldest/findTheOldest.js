const findTheOldest = function(arr) {
    let currentYear = (new Date()).getFullYear();
    arr.forEach((item) => {
        item.age = item.yearOfDeath - item.yearOfBirth;
        if (!item.yearOfDeath) {
        item.age = currentYear - item.yearOfBirth;
        }
    })
    arr.sort((a, b) => b.age - a.age);
    return arr[0]
};

// Do not edit below this line
module.exports = findTheOldest;

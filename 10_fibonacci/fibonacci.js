const fibonacci = function(index) {

    let arr = [0]; 
    let newValue = 1;

    if (index < 0) {
        return 'OOPS'
    }

    for (let i = 0; i < index; i++) {
        arr.push(newValue)
        newValue = newValue + arr[i]
    }
    return arr[index];
};
//  1, 1, 2, 3
// Do not edit below this line
module.exports = fibonacci;

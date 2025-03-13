const removeFromArray = function(userArray, ...elementsToRemove) {

    const filterArray = userArray.filter(element => !elementsToRemove.includes(element))
    return filterArray;

};

  
        /* for(const userElement of userArray) {
           
        }
        return newArray; */
   

//pseudocode:

/* 

    DECLARE filterArray

    RUN a filter LOOP to check each value in userArray
    RETURN only those values that don't match a value in elementsToRemove
*/

// Do not edit below this line
module.exports = removeFromArray;

const removeFromArray = function(arr, ...theArgs) {
    for (const arg of theArgs) {
        let result=arr.filter(item => item!==arg);
        arr=result;
    }
    return arr
};


// Do not edit below this line
module.exports = removeFromArray;

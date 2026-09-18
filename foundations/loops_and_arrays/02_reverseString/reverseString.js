const reverseString = function(str) {
    // method 1: using join
    arr=[];
    for (let i=str.length-1; i>=0; i--) {
        arr.push(str.at(i));
    }
    str=arr.join("");
    
    // method 2: using split and join doesnt work because the i and -i only matches up if string length is 4
    /*
    arr=str.split("");
    for (let i=arr.length-1; i>=arr.length/2;i--) {
    [arr.at(i), arr.at(-(i+1))]=[arr.at(-(i+1)), arr.at(i)];
    }
    str=arr.join("");
    */
   return str;
};

// Do not edit below this line
module.exports = reverseString;

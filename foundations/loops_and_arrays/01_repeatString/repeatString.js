const repeatString = function(str, num) {
    const initial=str;
    str="";
    if (num<0) return "ERROR";
    else { for (num; num>0; num--) {
        str+=initial;
    }
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;

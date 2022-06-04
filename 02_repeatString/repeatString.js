const repeatString = function(str,num) {
 
    let result = '';
    let str2 = '';

    for(i = 0; i < num ;i++){
        result = '';
        result = result.concat(str);
        str2 = str2.concat(result);
    }

    if(num<0)    {
        return('ERROR')
    }
    else    {
        return(str2)
    }
;
};

// Do not edit below this line
module.exports = repeatString;
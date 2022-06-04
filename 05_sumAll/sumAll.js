const sumAll = function(n1,n2) {

    let x = 0;
    let y = 0;

    if(typeof n1 != 'number'){
        return("ERROR");
    }
    else if(typeof n2 != 'number'){
        return("ERROR");
    }

    if(n1 < 0) {
        return("ERROR");
    }
    else if(n2 < 0) {
        return("ERROR");
    }

    if(n1 > n2) {
        max = n1;
        min = n2;
    }
    else {
        max = n2;
        min = n1;
    }

    for(let i = min;i < max + 1; i++) {
        y = y + i; 
    }

    return(y);
};

// Do not edit below this line
module.exports = sumAll;


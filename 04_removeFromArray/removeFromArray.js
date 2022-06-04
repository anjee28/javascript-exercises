const removeFromArray = function(array,index) {

        const index2 = array.indexOf(index);
        if (index2 > -1) {
        array.splice(index2, 1); // 2nd parameter means remove one item only
        }

};

// Do not edit below this line
module.exports = removeFromArray;

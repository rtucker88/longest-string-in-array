exports.findLongestString = function(arr) {
    var longest = -1;
    var index = -1;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].length > longest) {
            longest = arr[i].length;
            index = i;
        }
    }

    return arr[index];
};
/**
 * 打乱数组
 * @param {Array} arr 
 * @returns 打乱后的数组
 */
function randArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        var iRand = parseInt(arr.length * Math.random());
        var temp = arr[i];
        arr[i] = arr[iRand];
        arr[iRand] = temp;
    }
    return arr;
}
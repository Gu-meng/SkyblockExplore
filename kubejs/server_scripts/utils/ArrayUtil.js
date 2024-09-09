// priority: 10

const ArrayUtils = {
    /**
    * 打乱数组
    * @param {Array} arr 
    * @returns 打乱后的数组
    */
    randArr: function (arr) {
        for (var i = 0; i < arr.length; i++) {
            var iRand = parseInt(arr.length * Math.random());
            var temp = arr[i];
            arr[i] = arr[iRand];
            arr[iRand] = temp;
        }
        return arr;
    },
    /**
     * 判断是否为数组
     * @param {*} value 
     * @returns 
     */
    isArr: function (value) {
        return Array.isArray(value);
    }
}
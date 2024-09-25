// priority: 9

MengUtils.ArrUtil.isArr = value =>{
    return Array.isArray(value);
}

MengUtils.ArrUtil.randArr = arr =>{
    for (var i = 0; i < arr.length; i++) {
        var iRand = parseInt(arr.length * Math.random());
        var temp = arr[i];
        arr[i] = arr[iRand];
        arr[iRand] = temp;
    }
    return arr;
}
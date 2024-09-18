// priority: 9

MengUtils.StrUtil.isString = str =>{
    return str.constructor === "String";
}

MengUtils.StrUtil.strInNumber = str =>{
    return /\d/.test(str);
}
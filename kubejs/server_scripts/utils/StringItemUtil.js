// priority: 10

function isString(str){
    return str.constructor === "String";
}

function strInNumber(str){
    return /\d/.test(str);
}

function strInTag(str){
    return /#/.test(str);
}

/**
 * 将字符串物品转换为json类型
 * @param {String} str 
 * @returns 会返回三个值 item或者tag、count和nbt或null
 */
function strSplitItem(str){
    if (!isString(str)){
        return ItemOfAlterItem(str)
    }
    str = str.trim();
    if (strInTag(str)){
        str = str.replace(/#/g,"");
        return {
          tag : str,
          count : 1,
          nbt : null
        } 
     }
     
    if (!strInNumber(str)) return {
        item : str,
        count : 1,
        nbt : null
    }    
    
    let newStrList = str.split(" ")

    let count;
    let item;
    newStrList.forEach(value=>{
        if (strInNumber(value)){
            count = value;
        }else{
            item = value;
        }
    })
    count = count.replace(/x/g,"");
    count = Math.floor(count);
    
    return {
        item:item,
        count:count,
        nbt : null
    }
}

/**
 * 
 * @param {Internal.ItemStack} itemObj 
 */
function ItemOfAlterItem(itemObj){
    let itemNbt = null;
    if (itemObj.getNbtString() != "null"){
        itemNbt = itemObj.getNbtString() 
    }
    return {
        item : itemObj.id,
        count : itemObj.count,
        nbt : itemNbt
    }
}
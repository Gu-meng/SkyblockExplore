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

function isFirstCharDigit(str) {
    return /^\d/.test(str);
  }

/**
 * 将字符串物品转换为json类型
 * @param {String} str 
 * @returns 会返回三个值 item或者tag、count和nbt或null
 */
function strSplitItem(str){
    if (str == undefined){
        return {
            item : "minecraft:air",
            count : 2,
            nbt : null
        }
    }

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
     
    if (!isFirstCharDigit(str)) return {
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

/**
 * 处理物品的nbt
 * @param {*} obj 
 */
function nbtProcessing(obj){
    if (obj.nbt == null) delete obj.nbt
    return obj
}

function itemListProcessing(newList,itemList){
    if (ArrayUtils.isArr(itemList)){
        itemList.forEach(value => {
            newList.push(nbtProcessing(strSplitItem(value)))
        })
    }else{
        newList.push(nbtProcessing(strSplitItem(itemList)))
    }

    return newList;
}

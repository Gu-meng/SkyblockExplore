// priority: 8

MengUtils.StrToItemUtil.strInTag = (str) => {
    return /#/.test(str);
}

MengUtils.StrToItemUtil.isFirstCharDigit = (str) => {
    return /^\d/.test(str);
}

MengUtils.StrToItemUtil.strSplitItem = str => {
    if (str == undefined){
        return {
            item : "minecraft:air",
            count : 2,
            nbt : null
        }
    }

    if (!MengUtils.StrUtil.isString(str)) return ItemOfAlterItem(str)
    
    str = str.trim();
    if (MengUtils.StrToItemUtil.strInTag(str)){
        str = str.replace(/#/g,"");
        return {
          tag : str,
          count : 1,
          nbt : null
        } 
     }
     
    if (!MengUtils.StrToItemUtil.isFirstCharDigit(str)) return {
        item : str,
        count : 1,
        nbt : null
    }    
    
    let newStrList = str.split(" ")

    let count;
    let item;
    newStrList.forEach(value=>{
        if (MengUtils.StrUtil.strInNumber(value)) count = value;
        else item = value; 
    })

    count = Math.floor(count.replace(/x/g,""));
    
    return {
        item:item,
        count:count,
        nbt : null
    }
}

/**
 * 处理物品的nbt
 * @param {*} obj 
 */
MengUtils.StrToItemUtil.nbtProcessing = (obj) =>{
    if (obj.nbt == null) delete obj.nbt
    return obj
}

MengUtils.StrToItemUtil.strProcessingNbtItem = (str) =>{
   return MengUtils.StrToItemUtil.nbtProcessing(MengUtils.StrToItemUtil.strSplitItem(str))
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

    if (!MengUtils.StrUtil.isString(str)){
        return ItemOfAlterItem(str)
    }
    str = str.trim();
    if (MengUtils.StrToItemUtil.strInTag(str)){
        str = str.replace(/#/g,"");
        return {
          tag : str,
          count : 1,
          nbt : null
        } 
     }
     
    if (!MengUtils.StrToItemUtil.isFirstCharDigit(str)) return {
        item : str,
        count : 1,
        nbt : null
    }    
    
    let newStrList = str.split(" ")

    let count;
    let item;
    newStrList.forEach(value=>{
        if (MengUtils.StrUtil.strInNumber(value)){
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
    return itemObj.toJson()
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
    if (MengUtils.ArrUtil.isArr(itemList)){
        itemList.forEach(value => {
            newList.push(nbtProcessing(strSplitItem(value)))
        })
    }else{
        newList.push(nbtProcessing(strSplitItem(itemList)))
    }

    return newList;
}

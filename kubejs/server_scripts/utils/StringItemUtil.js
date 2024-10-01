// priority: 8

MengUtils.StrToItemUtil.strInTag = (str) => {
    return /#/.test(str);
}

MengUtils.StrToItemUtil.isFirstCharDigit = (str) => {
    return /^\d/.test(str);
}

MengUtils.StrToItemUtil.strSplitItem = str => {
    if (str == undefined) {
        return {
            item: "minecraft:air",
            count: 2,
            nbt: null
        }
    }

    if (!MengUtils.StrUtil.isString(str)) return str.toJson()

    str = str.trim();
    if (MengUtils.StrToItemUtil.strInTag(str)) {
        str = str.replace(/#/g, "");
        return {
            tag: str,
            count: 1,
            nbt: null
        }
    }

    if (!MengUtils.StrToItemUtil.isFirstCharDigit(str)) return {
        item: str,
        count: 1,
        nbt: null
    }

    let newStrList = str.split(" ")

    let count;
    let item;
    newStrList.forEach(value => {
        if (MengUtils.StrUtil.strInNumber(value)) count = value;
        else item = value;
    })

    count = Math.floor(count.replace(/x/g, ""));

    return {
        item: item,
        count: count,
        nbt: null
    }
}

/**
 * 处理物品的nbt
 * @param {*} obj 
 */
MengUtils.StrToItemUtil.nbtProcessing = (obj) => {
    if (obj.nbt == null) delete obj.nbt
    return obj
}

MengUtils.StrToItemUtil.strProcessingNbtItem = (str) => {
    return MengUtils.StrToItemUtil.nbtProcessing(MengUtils.StrToItemUtil.strSplitItem(str))
}

MengUtils.StrToItemUtil.itemListProcessing = (newList, itemList) => {
    if (MengUtils.ArrUtil.isArr(itemList)) {
        itemList.forEach(value => {
            newList.push(MengUtils.StrToItemUtil.strProcessingNbtItem(value))
        })
    } else {
        newList.push(MengUtils.StrToItemUtil.strProcessingNbtItem(itemList))
    }
    return newList;
}

/**
 * 
 * @param {Internal.ItemStack} itemObj 
 */
function ItemOfAlterItem(itemObj) {
    return itemObj.toJson()
}
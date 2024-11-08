// priority: 2

/**
 * 添加商店内可能出现的物品
 * @param {Internal.ItemStack_} item 物品id
 * @param {number_} buyXp 物品所需购买经验
 * @param {number_} minCount 物品最小出现个数
 * @param {number_} maxCount 物品最大出现个数 限制最大64
 * @param {number_} chance 出现物品的概率
 * @param {number_} minimumGuarantee 保底出现，默认为-1 表示用不保底
 * @param {String} identificationId 识别id，默认为物品id
 * @param {Object} nbt 物品nbt,默认为空
 */
function addItem(item, buyXp, minCount, maxCount, chance, minimumGuarantee,identificationId,nbt) {
    if (minimumGuarantee == undefined) minimumGuarantee = -1
    identificationId = identificationId == undefined ? item : item + "_" + identificationId;
    if (nbt == undefined) nbt = {};
    if (maxCount > 64) maxCount = 64;
    xpShopItemList.push({
        item: item,
        buyXp: buyXp,
        minCount: minCount,
        maxCount: maxCount,
        chance: chance,
        minimumGuarantee: minimumGuarantee,
        identificationId:identificationId,
        nbt:nbt
    })
}

function initAddItemXpShop(){
    global.shopItemList = [];

    xpShopItemList.forEach(value=>{
        if (global.shopItemList.find(value2 => value2.item == value.item) == undefined) global.shopItemList.push({item:value.item})
    })
    try{
        if(Utils.server.players.size()>0){
            Utils.server.players.forEach(player=>{
                sendShopItemInClient(player);
            })
        }
    }catch(err){console.warn(err)}
 
}

/**
 * 
 * @param {Internal.ServerPlayer_} player 
 */
function sendShopItemInClient(player){
    let obj = {value:[]}
    global.xpShopItemList.forEach(value=>{
        obj.value.push({
            item:Item.of(value.item,value.nbt),
            buyXp:value.buyXp,
            chance: (value.chance * 100) + "%" 
        })
    })
    player.sendData("xpShopItem",obj)
}

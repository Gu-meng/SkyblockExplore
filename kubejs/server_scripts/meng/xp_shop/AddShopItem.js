
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

    addItem('meng:crushbone', 10, 28, 64, 0.8);
    addItem('minecraft:stone', 100, 26, 64, 0.5, 5);
    addItem('minecraft:egg', 50, 7, 32, 0.4, 5);
    addItem('meng:raffle_ticket', 1000, 1, 1, 0.2, 10,"bed",{ticketType:"bed"});
    addItem('meng:raffle_ticket', 500, 1, 1, 0.2, 10,"sapling",{ticketType:"sapling"});
    addItem('meng:raffle_ticket', 2000, 1, 5, 0.2, 10,"ore",{ticketType:"ore"});

    addItem('minecraft:experience_bottle', 100, 1, 2, 0.1, 13);
    addItem("meng:reload_xpshop", 1500, 1, 5, 0.1, 20);

    addItem('minecraft:oak_sapling', 300, 1, 5, 0.3);
    addItem('minecraft:spruce_sapling', 300, 1, 5, 0.3);
    addItem('minecraft:birch_sapling', 300, 1, 5, 0.3);
    addItem('minecraft:jungle_sapling', 300, 1, 5, 0.3);
    addItem('minecraft:acacia_sapling', 300, 1, 5, 0.3);
    addItem('minecraft:dark_oak_sapling', 300, 1, 5, 0.3);
    addItem('minecraft:cherry_sapling', 300, 1, 5, 0.3);

    addItem("meng:budding_quartz", 2000, 1, 3, 0.05);
    addItem("meng:budding_redstone", 1000, 1, 5, 0.1);
    addItem("meng:budding_coal", 500, 1, 10, 0.2);

    xpShopItemList.forEach(value=>{
        if (global.shopItemList.find(value2 => value2.item == value.item) == undefined) global.shopItemList.push({item:value.item})
    })
    
    try{
        Utils.server.players.forEach(player=>{
            sendShopItemInClient(player)
        })
    }catch(err){console.warn(err);}
}

/**
 * 
 * @param {Internal.ServerPlayer_} player 
 */
function sendShopItemInClient(player){
    let obj = {value:[]}
    xpShopItemList.forEach(value=>{
        obj.value.push({
            item:value.item,
            nbt:value.nbt,
            buyXp:value.buyXp,
            chance: (value.chance * 100) + "%" 
        })
    })
    player.sendData("xpShopItem",obj)
}

// priority: 3

/**
 * 添加物品进入商店
 * 在每天补货时调用
 * 同步时可调用
 * 无需直接调用，需要时调用addXpShop
 * @param {*} item 不是物品id
 * @param {*} identificationId 识别id，用于找到物品
 * @param {*} buy 
 * @param {*} count 
 * @param {*} nbt 物品nbt
 */
function addItemInShop(item,identificationId, buy, count,nbt) {
    let obj = { buyXp: buy, remaining: count,identificationId:identificationId };
    nbt = nbt == undefined ? obj : Object.assign(nbt,obj)
    shopItemList.push({ 
        item: Item.of(item, count, nbt),
        identificationId : identificationId
    })
}

/**
 * 在商品数量为0时删除商店里的该物品
 * @param {*} identificationId 这里传入识别id
 * @deprecated 每次调用同步就可以，不需要手动删除
 */
function removeShopInItem(identificationId) {
    shopItemList.splice(shopItemList.findIndex(value => value.identificationId == identificationId), 1);
}

/**
 * 添加物品进入商店
 * @param {Internal.MinecraftServer} server 
 * 
 */
function addXpShop(server, item,identificationId, buyXp, count,nbt) {
    XpShopPersistentData(server).addItem(identificationId, count);
    addItemInShop(item,identificationId, buyXp, count,nbt)
    // server.runCommandSilent(`scoreboard players set ${item} xpShop ${count}`)  
}

/**
 * 删除商店物品
 * 会在加入购物车时被调用，避免两个人抢一个物品导致问题
 * @param {Internal.MinecraftServer} server 
 */
function deleteXpShop(server, identificationId,count) {
    let xpShop = XpShopPersistentData(server)
    let newCount = xpShop.reduceItemCount(identificationId, count)
    synchronizationShop(xpShop);
    return newCount;
    
}

/**
 * 因为没有购买所以导致返回
 * @param {Internal.MinecraftServer} server 
 */
function backXpShopItem(server, identificationId,count) {
    let xpShop = XpShopPersistentData(server);
    xpShop.addItemCount(identificationId, count);
    synchronizationShop(xpShop);
}

/**
 * 补货，将在每天第一次调用物品商城时进行补货
 */
function replenishment(server) {
    let xpShopItem = XpShopItemPersistentData(server);
    let xpShop = XpShopPersistentData(server)
    xpShop.removeAll()
    shopItemList = [];
    xpShopItemList.forEach(value => {
        let item = value.item;
        if (!MengUtils.isPercent(value.chance) && xpShopItem.minimumGuarantee(item) != 0) return;
        let count = MengUtils.intervalRandomNumber(value.minCount, value.maxCount);
        let buyXp = value.buyXp;
        let mg = value.minimumGuarantee;
        let identificationId = value.identificationId;
        let nbt = value.nbt;
        xpShopItem.update(item, mg)
        addXpShop(server, item,identificationId, buyXp, count,nbt);
    })
}

/**
 * 同步商店内容
 * @param {XpShopPersistentData} xpShop 
 */
function synchronizationShop(xpShop) {
    shopItemList = [];
    let itemList = xpShop.getItemList();

    let keys = itemList.getAllKeys();
    keys.forEach(key => {
        let itemValue = xpShopItemList.find(value => value.identificationId == key)
        addItemInShop(itemValue.item,itemValue.identificationId, itemValue.buyXp, itemList.getInt(key),itemValue.nbt)
    })
}

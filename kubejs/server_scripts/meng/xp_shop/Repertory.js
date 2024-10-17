// priority: 3

/**
 * 添加物品进入商店
 * 在每天补货时调用
 * 同步时可调用
 * 无需直接调用，需要时调用addXpShop
 * @param {*} item 
 * @param {*} buy 
 * @param {*} count 
 */
function addItemInShop(item, buy, count) {
    shopItemList.push({ item: Item.of(item, count, { buyXp: buy, remaining: count }) })
}

/**
 * 在商品数量为0时删除商店里的该物品
 * @param {*} item 
 * @deprecated 每次调用同步就可以，不需要手动删除
 */
function removeShopInItem(item) {
    shopItemList.splice(shopItemList.findIndex(value => value.item == item), 1);
}

/**
 * 添加物品进入商店
 * @param {Internal.MinecraftServer} server 
 * 
 */
function addXpShop(server, item, buyXp, count) {
    XpShopPersistentData(server).addItem(item, count);
    addItemInShop(item, buyXp, count)
    // server.runCommandSilent(`scoreboard players set ${item} xpShop ${count}`)  
}

/**
 * 删除商店物品
 * 会在加入购物车时被调用，避免两个人抢一个物品导致问题
 * @param {Internal.MinecraftServer} server 
 */
function deleteXpShop(server, item,count) {

    let xpShop = XpShopPersistentData(server)
    let newCount = xpShop.reduceItemCount(item, count)
    synchronizationShop(xpShop);
    return newCount;
    
}

/**
 * 因为没有购买所以导致返回
 * @param {Internal.MinecraftServer} server 
 */
function backXpShopItem(server, item,count) {
    let xpShop = XpShopPersistentData(server);
    xpShop.addItemCount(item, count);
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
        xpShopItem.update(item, mg)
        addXpShop(server, item, buyXp, count);
    })
}

/**
 * 同步商店内容
 * @param {XpShopPersistentData} xpShop 
 */
function synchronizationShop(xpShop) {
    shopItemList = [];
    let itemList = xpShop.getItemList()
    let keys = itemList.getAllKeys();
    keys.forEach(key => {
        let itemValue = xpShopItemList.find(value => value.item == key);
        addItemInShop(itemValue.item, itemValue.buyXp, itemList.getInt(key))
    })
}

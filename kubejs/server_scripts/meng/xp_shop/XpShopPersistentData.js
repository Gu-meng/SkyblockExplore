// priority: 4

/**
 * 操作每天的商店进出货
 * @typedef {Object} XpShopPersistentData
 * @property {function} addItem
 * @property {function} removeAll
 * @property {function} updateItem
 * @property {function} getItem
 * @property {function} getItemList
 * @property {function} addItemCount
 * @property {function} reduceItemCount
 * 
 * @param {Internal.MinecraftServer_} server 
 */
const XpShopPersistentData = (server) => {
    let persistentData = server.getPersistentData();
    /**
     * @type {Internal.CompoundTag_}
     */
    let xpShop = persistentData.xpShop;
    if (xpShop == undefined) {
        persistentData.xpShop = {}
        xpShop = persistentData.xpShop;
    }

    function addItem(item, count) {
        xpShop[item] = count;
    }

    function delteItem(item){
        xpShop.remove(item);
    }

    function removeAll() {
        persistentData.remove("xpShop")
    }

    function updateItem(item, count) {
        addItem(item, count);
    }

    function getItem(itemId) {
        return xpShop.getInt(itemId);
    }

    function getItemList() {
        return xpShop;
    }

    function addItemCount(item, addCount) {
        let count = getItem(item);
        let newCount = count + addCount;
        if (newCount <= 0){
            delteItem(item);
            return 0;
        }
        updateItem(item, newCount);
        return newCount;
    }

    function reduceItemCount(item, reduceCount) {
        return addItemCount(item, -reduceCount)
    }
    return {
        addItem: addItem,
        removeAll: removeAll,
        updateItem: updateItem,
        getItem: getItem,
        getItemList: getItemList,
        addItemCount: addItemCount,
        reduceItemCount: reduceItemCount
    }
}

/**
 * 控制物品的保底
 * @param {Internal.MinecraftServer_} server 
 * @returns 
 */
const XpShopItemPersistentData = (server) => {
    let persistentData = server.getPersistentData();
    /**
     * @type {Internal.CompoundTag_}
     */
    let xpShopItem = persistentData.xpShopItem;
    if (xpShopItem == undefined) {
        persistentData.xpShopItem = {};
        xpShopItem = persistentData.xpShopItem;
    }

    function init() {
        xpShopItemList.forEach(value => {
            let item = value.item;
            let mg = value.minimumGuarantee;
            update(item, mg)
        })
    }

    function getItem(itemId) {
        return xpShopItem.getInt(itemId);
    }

    function update(item, newNumber) {
        xpShopItem[item] = newNumber;
    }

    function minimumGuarantee(item) {
        let sn = getItem(item);
        if (sn == 0) return 0;
        if (sn == -1) return -2
        update(item, sn - 1);
        return -1;
    }

    function getXpShopItem() {
        return xpShopItem;
    }

    function isEmpty() {
        return xpShopItem.getAllKeys().size == 0
    }

    return {
        init: init,
        getItem: getItem,
        update: update,
        minimumGuarantee: minimumGuarantee,
        getXpShopItem: getXpShopItem,
        isEmpty:isEmpty
    }
}

/**
 * 记录补货天数
 */
const ReplenishmentDay = (server) =>{
    let persistentData = server.getPersistentData();
    /**
     * @type {Internal.CompoundTag_}
     */
    let xpDays = persistentData.xpDays;
    if (xpDays == undefined) {
        persistentData.xpDays = {}
        xpDays = persistentData.xpDays;
    }

    function init(level){
        updateReplenishDay(level);
        updateTotalDay(level);
    }

    /**
     * 更新商店刷新的天数
     */
    function updateReplenishDay(level){
        xpDays.day = MengUtils.mcDay(level.levelData.dayTime);
    }

    /**
     * 更新总天数
     */
    function updateTotalDay(level){
        xpDays.totalDay = MengUtils.mcDay(level.levelData.dayTime);
    }
    /**
     * 获取上次更新商店时的天数
     * @returns
     */
    function getReplenishDay(){
        return xpDays.getInt("day");
    }

    /**
     * 获取总天数--可能不是最新的，需要提前调用updateTotalDay来更新天数
     */
    function getTotalDay(){
        return xpDays.getInt("totalDay")
    }

    /**
     * 判断更新天数是否等于总天数
     */
    function isSyncDay(level){
        updateTotalDay(level);
        return getTotalDay() > getReplenishDay()
    }

    return {
        init:init,
        updateReplenishDay:updateReplenishDay,
        updateTotalDay:updateTotalDay,
        getReplenishDay:getReplenishDay,
        getTotalDay:getTotalDay,
        isSyncDay:isSyncDay
    }
}
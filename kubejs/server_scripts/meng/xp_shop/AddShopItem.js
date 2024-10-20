
/**
 * 添加商店内可能出现的物品
 * @param {Internal.ItemStack_} item 物品id
 * @param {number_} buyXp 物品所需购买经验
 * @param {number_} minCount 物品最小出现个数
 * @param {number_} maxCount 物品最大出现个数 限制最大64
 * @param {number_} chance 出现物品的概率
 * @param {number_} minimumGuarantee 保底出现，默认为-1 表示用不保底
 */
function addItem(item, buyXp, minCount, maxCount, chance, minimumGuarantee) {
    if (minimumGuarantee == undefined) minimumGuarantee = -1
    if (maxCount > 64) maxCount = 64;
    xpShopItemList.push({
        item: item,
        buyXp: buyXp,
        minCount: minCount,
        maxCount: maxCount,
        chance: chance,
        minimumGuarantee: minimumGuarantee
    })
}

function initAddItemXpShop(){
    addItem('meng:crushbone', 10, 28, 64, 0.8);
    addItem('minecraft:stone', 100, 26, 64, 0.5, 5);
    addItem('minecraft:egg', 50, 7, 32, 0.4, 5);
    addItem('meng:raffle_ticket', 2000, 1, 5, 0.2, 10);

    addItem('minecraft:experience_bottle', 100, 1, 2, 0.1, 13);
    addItem("meng:reload_xpshop", 1500, 1, 5, 0.1, 20);

    addItem('minecraft:oak_sapling', 300, 1, 5, 0.3);
    addItem('minecraft:spruce_sapling', 300, 1, 5, 0.3);
    addItem('minecraft:birch_sapling', 300, 1, 5, 0.3);
    addItem('minecraft:jungle_sapling', 300, 1, 5, 0.3);
    addItem('minecraft:acacia_sapling', 300, 1, 5, 0.3);
    addItem('minecraft:dark_oak_sapling', 300, 1, 5, 0.3);
    addItem('minecraft:cherry_sapling', 300, 1, 5, 0.3);

    global.shopItemList = xpShopItemList;
}

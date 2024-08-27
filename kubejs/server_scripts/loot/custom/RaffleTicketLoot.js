addBasalItem('minecraft:diamond', 3);
addBasalItem('minecraft:lapis_lazuli', 5)
addBasalItem('minecraft:emerald', 2)
addBasalItem('minecraft:gold_ingot', 8)
addBasalItem('minecraft:copper_ingot', 20)
addBasalItem('minecraft:iron_ingot', 20)
addBasalItem('minecraft:netherite_ingot', 1)

ServerEvents.genericLootTables(event => {
    event.addGeneric("meng:raffle_ticket/basal", loot => {
        loot.addPool(pool => {
            basalItemList.forEach(value => {
                pool.addItem(value.itemId).weight(value.weight);
            });
        });
    });
})

function addBasalItem(itemId, weight) {
    basalItemList.push({
        itemId: itemId,
        weight: weight
    })
}
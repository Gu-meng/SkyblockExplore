function addRaffleTicketItem(type, itemId, weight) {
    if (ticketTypeObject[type] == undefined) ticketTypeObject[type] = [];
    ticketTypeObject[type].push({
        itemId: itemId,
        weight: weight
    })
}

function addBasalItem(itemId, weight) {
    addRaffleTicketItem("basal", itemId, weight)
}

function addOreItem(itemId,weight){
    addRaffleTicketItem("ore", itemId, weight)
}

addOreItem('minecraft:diamond', 3);
addOreItem('minecraft:lapis_lazuli', 5)
addOreItem('minecraft:emerald', 2)
addOreItem('minecraft:gold_ingot', 8)
addOreItem('minecraft:copper_ingot', 20)
addOreItem('minecraft:iron_ingot', 20)
addOreItem('minecraft:netherite_ingot', 1)

addBasalItem("minecraft:cobblestone",10);
addBasalItem("minecraft:cobblestone_stairs",10);
addBasalItem("minecraft:cobblestone_slab",10);
addBasalItem("minecraft:cobblestone_wall",10);
addBasalItem("minecraft:mossy_cobblestone",10);
addBasalItem("minecraft:mossy_cobblestone_stairs",10);
addBasalItem("minecraft:mossy_cobblestone_slab",10);
addBasalItem("minecraft:mossy_cobblestone_wall",10);
addBasalItem("minecraft:stone_bricks",10);
addBasalItem("minecraft:stone_brick_stairs",10);
addBasalItem("minecraft:stone_brick_slab",10);
addBasalItem("minecraft:stone_brick_wall",10);
addBasalItem("minecraft:mossy_stone_bricks",10);
addBasalItem("minecraft:mossy_stone_brick_stairs",10);
addBasalItem("minecraft:mossy_stone_brick_slab",10);
addBasalItem("minecraft:mossy_stone_brick_wall",10);


new FileHelper("Saplings.json").getJson().forEach(value => {
    addRaffleTicketItem("sapling", value, 10);
})

new FileHelper("beds.json").getJson().forEach(value => {
    addRaffleTicketItem("bed", value, 10);
})
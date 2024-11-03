ServerEvents.genericLootTables(event => {
    event.addGeneric("meng:painful_tears", loot => {
        loot.addPool(pool => {
            pool.addEmpty(100-LootConfig.painfulTears.chance);
            pool.addItem("meng:painful_tears").weight(LootConfig.painfulTears.chance)
        });
    })

})
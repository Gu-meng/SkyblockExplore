let itemFallList = {

};

let fallItem = [
    {
        inputItem: "minecraft:cobblestone",
        outputItem: 'minecraft:gravel'
    }
]

EntityEvents.spawned("item", event => {
    /**
     * @type {Internal.ItemEntity}
     */
    let itemEntity = event.getEntity();
    fallItem.forEach(value => {
        if (itemEntity.getItem().getId() != value.inputItem) return;
        itemEntity.pickUpDelay = 32767;
        let count = itemEntity.getNbt().get("Item").getInt("Count")

        itemFallList[itemEntity.getUuid()] = {
            y: itemEntity.getY(),
            output: value.outputItem,
            count: count
        }
    })

})

LevelEvents.tick(event => {
    if (event.server.tickCount % 5 != 0) return
    event.getLevel().getEntities().forEach(entity => {
        if (entity.type != "minecraft:item") return
        for (let key in itemFallList) {
            let fallValue = itemFallList[key];
            if (entity.getUuid() == key) {
                if (entity.onGround()) {
                    if (fallValue.y - entity.getY() >= 10) {
                        entity.setItem(Item.of(fallValue.output, fallValue.count))
                    }
                    entity.pickUpDelay = 20;
                    delete itemFallList[key]
                }
            }
        }
    })
})
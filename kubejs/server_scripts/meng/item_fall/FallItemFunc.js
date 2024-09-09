let itemFallList = {};

EntityEvents.spawned("item", event => {
    /**
     * @type {Internal.ItemEntity}
     */
    let itemEntity = event.getEntity();
    global.fallItem.forEach(value => {
        if (itemEntity.getItem().getId() != value.inputItem) return;
        itemEntity.pickUpDelay = 32767;
        let count = itemEntity.getNbt().get("Item").getInt("Count")
        itemFallList[itemEntity.getUuid()] = {
            dimension: event.getLevel().getDimension(),
            y: itemEntity.getY(),
            output: value.outputItem,
            count: count,
            spaceBetween: value.spaceBetween
        }
    })
})

LevelEvents.tick(event => {
    if (event.server.tickCount % 5 != 0) return
    if (Object.keys(itemFallList).length == 0) return
    for (let key in itemFallList) {
        let fallValue = itemFallList[key];
        if (fallValue.dimension == event.getLevel().getDimension()) {
            try {
                let entity = event.getLevel().getEntity(key)
                if (entity.onGround()) {
                    if (fallValue.y - entity.getY() >= fallValue.spaceBetween) {
                        entity.setItem(Item.of(fallValue.output, fallValue.count))
                    }
                    entity.pickUpDelay = 20;
                    delete itemFallList[key]
                }
            } catch (e) {
                console.warn(e);
                delete itemFallList[key]
            }
        }
    }
})
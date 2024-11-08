PlayerEvents.chestClosed(event => {
    let { player, inventoryContainer } = event
    if (player.data.get(dataBackpack) == inventoryContainer.hashCode().toString()) {
        let handItem = player.getMainHandItem();
        player.data.remove(dataBackpack)
        // player.data.remove(dataBackpackItem)
        if (handItem.is(backpack)) {
            backpackFunc(inventoryContainer, handItem)
            return;
        }
        let opItem = $CuriosApi
            .getCuriosHelper()
            ["findFirstCurio(net.minecraft.world.entity.LivingEntity,net.minecraft.world.item.Item)"]
                (player, backpack);
        let curiosItem = opItem.get().stack();
        if (curiosItem.is(backpack)) {
            backpackFunc(inventoryContainer, curiosItem)
            return;
        }
    }
})
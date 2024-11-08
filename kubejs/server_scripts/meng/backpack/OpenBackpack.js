ItemEvents.firstRightClicked(backpack, event => {
    let { player, item } = event
    if (!item.hasNBT()) item.setNbt({ items: [] })
    openBackpackFunc(player,item);
})


NetworkEvents.dataReceived("openBackpack", event => {
    const player = event.player
    if (player.data.get(dataBackpack) == undefined) {
        console.log("111");
        let opItem = $CuriosApi
            .getCuriosHelper()
        ["findFirstCurio(net.minecraft.world.entity.LivingEntity,net.minecraft.world.item.Item)"](player, backpack);
        try {
            let item = opItem.get().stack();
            openBackpackFunc(player,item);
        } catch (err) {
            console.warn(err);
            player.tell(Text.translate("tell.meng.openBackpack.curiosapi"))
        }
    }
})
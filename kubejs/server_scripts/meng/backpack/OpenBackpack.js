ItemEvents.firstRightClicked(backpack, event => {
    let { player, item } = event
    openBackpackFunc(player,item);
})


NetworkEvents.dataReceived("openBackpack", event => {
    const player = event.player
    if (player.data.get(dataBackpack) == undefined) {
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
ItemEvents.firstRightClicked("meng:return_pearl", e => {
    if (e.item.hasNBT()){
        let nbt = e.item.getNbt()
        let pos = nbt.get("pos")
        let time = nbt.getString("time")
        ReturnPearl[e.player.username][time].clear();
        delete ReturnPearl[e.player.username][time];
        e.player.teleportTo(nbt.getString("dimension"), pos.getInt("x"), pos.getInt("y") + 1, pos.getInt("z"), e.player.yaw, e.player.pitch);
        e.item.count--;
    }
})
BlockEvents.rightClicked("beacon", event => {
    let player = event.getPlayer();
    if (player.isShiftKeyDown()) {
        let beaconLevel = event.getBlock().getEntityData().getInt("Levels");
        if (event.getItem().getId() == 'minecraft:nether_star') {
            if (beaconLevel >= 3) {
                event.server.runCommandSilent("mek radiation removeAll");
                event.server.tell(Text.translate("tell.meng.mek_remove_radiation1"));
                event.getItem().count--;
            } else {
                player.tell(Text.translate("tell.meng.mek_remove_radiation2"))
            }
        } else if (event.getItem().getId() == 'minecraft:nautilus_shell') {
            let ppd = player.getPersistentData();
            let swc = ppd.getInt("summonWitherCount")
            if (swc != 0) {
                swc = swc - beaconLevel < 0 ? 0 : swc - beaconLevel;
                ppd.putInt("summonWitherCount", swc);
                event.item.count--;
                player.tell(Text.translate(tell.meng.swc1, swc));
            } else {
                player.tell(Text.translate("tell.meng.swc2", swc));
            }
        }
        event.cancel();
    }
})
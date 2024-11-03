ItemEvents.firstRightClicked("meng:sunny_doll",event=>{
    let level = event.getLevel();
    if (level.dimensionKey == "minecraft:overworld"){
        let player = event.getPlayer();
        let item = event.getItem();
        if (player.getCooldowns().getCooldownPercent(item.item,1) != 0) return
        level.server.runCommandSilent("weather clear");
        player.addItemCooldown(item,20*ItemCooldownConfig.sunnyDoll);
        item.setDamageValue(item.getDamageValue() + 1);
        if (item.getDamageValue() == item.getMaxDamage()){
            item.count--;
        }
    }
})
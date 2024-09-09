ItemEvents.firstRightClicked("meng:sunny_doll",event=>{
    let level = event.getLevel();
    if (level.dimensionKey == "minecraft:overworld"){
        let player = event.getPlayer();
        let item = event.getItem();
        level.server.runCommandSilent("weather clear");
        player.addItemCooldown(event.getItem(),20*60);
        item.setDamageValue(item.getDamageValue() + 1);
        if (item.getDamageValue() == item.getMaxDamage()){
            item.count--;
        }
    }
})
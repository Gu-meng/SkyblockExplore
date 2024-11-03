ItemEvents.firstRightClicked("meng:rain_doll", event => {
    let level = event.getLevel();
    if (level.dimensionKey == "minecraft:overworld") {
        let player = event.getPlayer();
        let item = event.getItem();
        if (player.getCooldowns().getCooldownPercent(item.item,1) != 0) return
        level.server.runCommandSilent("weather rain");
        player.addItemCooldown(item, 20 * ItemCooldownConfig.rainDoll);
        item.setDamageValue(item.getDamageValue() + 1);
        if (item.getDamageValue() == item.getMaxDamage()) {
            item.count--;
        }
    }
})
ItemEvents.rightClicked("meng:rain_doll", event => {
    let level = event.getLevel();
    if (level.dimensionKey == "minecraft:overworld") {
        let player = event.getPlayer();
        let item = event.getItem();
        level.server.runCommand("weather rain");
        player.addItemCooldown(event.getItem(), 20 * 60);
        item.setDamageValue(item.getDamageValue() + 1);
        if (item.getDamageValue() == item.getMaxDamage()) {
            item.count--;
        }
    }
})
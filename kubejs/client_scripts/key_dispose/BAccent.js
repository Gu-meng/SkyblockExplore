ClientEvents.tick(event => {
    const key = global.regKeyB;
    if (key.isDown()) {
        if (!event.player.getPersistentData().getBoolean("openBackpack")) {
            event.player.sendData("openBackpack")
            event.player.getPersistentData().putBoolean("openBackpack", true);
        }
    } else {
        if (event.player.getPersistentData().getBoolean("openBackpack")) {
            event.player.getPersistentData().putBoolean("openBackpack", false);
        }
    }
})
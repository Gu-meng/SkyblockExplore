ClientEvents.tick(event => {
    const key = global.regKey;
    if (key.isDown()) {
        if (!event.player.getPersistentData().getBoolean("multipleBlocks")) {
            event.player.sendData("multipleBlocks",{multipleBlocks:true})
            event.player.getPersistentData().putBoolean("multipleBlocks", true);
        }
    } else {
        if (event.player.getPersistentData().getBoolean("multipleBlocks")) {
            event.player.sendData("multipleBlocks",{multipleBlocks:false})
            event.player.getPersistentData().putBoolean("multipleBlocks", false);
        }
    }
})
NetworkEvents.dataReceived("multipleBlocks",event=>{
    event.player.getPersistentData().putBoolean("multipleBlocks", event.getData().getBoolean("multipleBlocks"));
})
NetworkEvents.dataReceived("multipleBlocks",event=>{
    event.player.getData().add("multipleBlocks", event.getData().getBoolean("multipleBlocks"));
})
EntityEvents.hurt("minecraft:pig",event=>{
    entityDropPainfulTears(event.getEntity(),event.getLevel(),event.getServer(),event.getSource().getType())
})
ItemEvents.rightClicked("minecraft:lapis_block",event=>{
    event.item.count--;
    let experienceBottle = event.level.createEntity("experience_bottle")
    experienceBottle.setPos(event.entity.onPos)
    experienceBottle.spawn();
})
ServerEvents.recipes(event=>{
    const deploying = event.recipes.create.deploying
    deploying('minecraft:dirt',['minecraft:coarse_dirt','#minecraft:hoes'])
})
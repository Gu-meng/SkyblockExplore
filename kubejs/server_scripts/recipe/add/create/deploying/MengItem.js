ServerEvents.recipes(event=>{
    const deploying = event.recipes.create.deploying
    deploying('meng:iron_mesh',['meng:iron_mesh','minecraft:diamond'])
})
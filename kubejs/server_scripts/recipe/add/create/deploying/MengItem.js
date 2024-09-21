ServerEvents.recipes(event=>{
    const deploying = event.recipes.create.deploying
    deploying('meng:diamond_mesh',['meng:iron_mesh','minecraft:diamond'])
})
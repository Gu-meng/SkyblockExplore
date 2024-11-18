ServerEvents.recipes(event=>{
    event.remove({id:"minecraft:bone_meal"})
    event.remove({output:'#minecraft:beds'})
    event.remove({id:"minecraft:magma_block"})
})
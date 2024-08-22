ServerEvents.recipes(event=>{
    // 骨块的合成配方
    event.shapeless("minecraft:bone_block",[
        'minecraft:bone','minecraft:bone','minecraft:bone',
        'minecraft:bone','minecraft:bone','minecraft:bone',
        'minecraft:bone','minecraft:bone','minecraft:bone'
    ]).stage("stage_one");
})
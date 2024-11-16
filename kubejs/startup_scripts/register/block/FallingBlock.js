StartupEvents.registry("block",event=>{
    event.create(regIds.slag_block,"falling")
        .gravelSoundType()
        .tagBlock("minecraft:mineable/shovel")

        event.create(regIds.new_slag_block,"falling")
        .gravelSoundType()
        .tagBlock("minecraft:mineable/shovel")
})
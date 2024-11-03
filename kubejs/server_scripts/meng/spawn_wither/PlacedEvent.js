BlockEvents.placed(event=>{
    let {level,block} = event;
    if (!(block.id == "minecraft:wither_skeleton_skull" || 
        block.id == "minecraft:wither_skeleton_wall_skull" ||
        block.id == "meng:wither_core_block")
    ) return;
    let jg = WitherSpawn.patternBlock().find(level,block.pos);
    if(jg != null && level.difficulty != $Difficulty.PEACEFUL){
        $CarvedPumpkinBlock.clearPatternBlocks(level,jg);
        let en = $EntityType.WITHER.create(level)
        let {x,y,z} = jg.getBlock(1,2,0).getPos();
        en.x = x +0.5
        en.y = y +0.5
        en.z = z +0.5
        en.makeInvulnerable()
        level.addFreshEntity(en)
        $CarvedPumpkinBlock.updatePatternBlocks(level,jg);
    }
})
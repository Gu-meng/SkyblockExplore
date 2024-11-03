const WitherSpawn = {
    patternBlock : function patternBlock(){
        return $BlockPatternBuilder.start().aisle(
            "SSS",
            "BXB",
            "ABA",
        ).where("S",
            $BlockInWorld.hasState(
                $BlockStatePredicate.forBlock(Blocks.WITHER_SKELETON_SKULL)
                    .or($BlockStatePredicate.forBlock(Blocks.WITHER_SKELETON_WALL_SKULL))
            )
        ).where("X",bw=>bw.getState().is(Block.getBlock('meng:wither_core_block'))
        ).where("B",bw=>bw.getState().is(Block.getBlock("minecraft:soul_sand"))
        ).where("A",bw=>bw.getState().isAir()
        ).build()
    }
}
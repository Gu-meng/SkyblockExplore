
BlockEvents.rightClicked('minecraft:cauldron',event=>{
    if (event.getHand() == "OFF_HAND") return;
    let item = event.getItem();
    if (item.id != 'minecraft:snowball') return
    if (item.getCount() < 16) return
    let level = event.getLevel();
    let block = event.getBlock();
    if (level.getBlock(block.x,block.y-1,block.z).id != 'minecraft:campfire') return;
    
    
    level.setBlock(block.pos,Block.getBlock("water_cauldron").defaultBlockState(),1)

    item.count = 0
})

BlockEvents.rightClicked('minecraft:water_cauldron',event=>{
    if (event.getHand() == "OFF_HAND") return;
    let item = event.getItem();
    if (item.id != 'minecraft:snowball') return
    if (item.getCount() < 16) return
    let level = event.getLevel();
    let block = event.getBlock();
    let blockState = block.getBlockState();
    if (level.getBlock(block.x,block.y-1,block.z).id != 'minecraft:campfire') return;
    let newBlock;
    let nvalue;
    blockState.getProperties().forEach(value=>{
        nvalue = value;
    })
    if (blockState.getValue(nvalue) != 3){
        newBlock = blockState.setValue(nvalue,$Integer.valueOf(Math.floor(blockState.getValue(nvalue) + 1).toString()))
        level.setBlock(block.pos,newBlock,1)
        item.count -= 16
    }
})

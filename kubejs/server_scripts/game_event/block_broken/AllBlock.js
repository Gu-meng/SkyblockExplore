BlockEvents.broken(event => {
    let player = event.getPlayer();
    if (player.getPersistentData().getBoolean("multipleBlocks")) {
        let posList = [];
        let maxMultiple = MultipleBlockConfig.maxMultiple;
        let block = event.getBlock();
        let isDrop = !block.getBlockState().requiresCorrectToolForDrops()
        let level = block.getLevel();
        let handItem = player.getMainHandItem()
        if (!isDrop) isDrop = canDrop(block, handItem);
        let tempCount = 0;
        let multiple = addMultipleBlocks(block, posList)
        posList = multiple.list;
        let listBlock = multiple.blockList
        let listBlock2 = []
        for (let index = 1; index < maxMultiple; index = posList.length) {
            listBlock.forEach(blockValue => {
                if (blockValue == null) return;
                multiple = addMultipleBlocks(blockValue, posList)
                posList = multiple.list;
                listBlock2 = listBlock2.concat(multiple.blockList)
            })
            listBlock = listBlock2;
            listBlock2 = []
            if (tempCount == index) break;
            else tempCount = index;
        }
        posList.forEach(pos => level.destroyBlock(BlockPos.of(pos), isDrop, player))
        if (!handItem.hasTag('minecraft:tools')) return
        handItem.setDamageValue(handItem.getDamageValue() + posList.length);
        if (handItem.getDamageValue() > handItem.getMaxDamage()) handItem.count--
    }
})

/**
 * 
 * @param {Internal.BlockContainerJS} block
 * @param {Array} list 
 */
function addMultipleBlocks(block, list) {
    let blockList = []
    
    pushList(equalBlock(block.getUp(),block),list,blockList);
    pushList(equalBlock(block.getDown(),block),list,blockList);
    pushList(equalBlock(block.getWest(),block),list,blockList);
    pushList(equalBlock(block.getNorth(),block),list,blockList);
    pushList(equalBlock(block.getSouth(),block),list,blockList);
    pushList(equalBlock(block.getEast(),block),list,blockList);

    return {
        blockList: blockList,
        list: list
    }
}

function pushList(block,list1,list2){
    if (block != null && !list1.includes(block.getPos().asLong())) {
        list1.push(block.getPos().asLong())
        list2.push(block)
    }
}

function equalBlock(block1,block2){
   return block1.getId() == block2.getId() ? block1 : null;
}

/**
 * 判断是否物品是否可以正常掉落
 * @param {Internal.BlockContainerJS} block 
 * @param {Internal.ItemStack} item 
 * @returns 
 */
function canDrop(block, item) {
    let tool = blockDestroyTool(block)
    if (tool == undefined) return false
    let level = blockDestroyLevel(block)
    if (item.hasTag(tool)) {
        if (level == 0) return true
        for (let index = level; index < 4; index++) {
            let l = MengUtils.tool[index][tool]
            for (let j = 0; j < l.length; j++) if (item.id == l[j]) return true
        }
    }
    return false;
}

function blockDestroyLevel(block) {
    if (block.hasTag(MengUtils.toolLevel.stoneTool)) return MengUtils.toolLevel["minecraft:needs_stone_tool"]
    if (block.hasTag(MengUtils.toolLevel.ironTool)) return MengUtils.toolLevel["minecraft:needs_iron_tool"]
    if (block.hasTag(MengUtils.toolLevel.diamondTool)) return MengUtils.toolLevel["minecraft:needs_diamond_tool"]
    return 0;
}

function blockDestroyTool(block) {
    if (block.hasTag(MengUtils.tagBlockTool.pickaxes)) return MengUtils.tagTool.pickaxes;
    if (block.hasTag(MengUtils.tagBlockTool.axes)) return MengUtils.tagTool.axes;
    if (block.hasTag(MengUtils.tagBlockTool.shovels)) return MengUtils.tagTool.shovels;
    if (block.hasTag(MengUtils.tagBlockTool.hoes)) return MengUtils.tagTool.hoes;
}
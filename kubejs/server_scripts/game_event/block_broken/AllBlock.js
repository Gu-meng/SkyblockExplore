BlockEvents.broken(event => {
    const key = global.regKey;
    let player = event.getPlayer();
    if (key.isDown()) {
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
        handItem.setDamageValue(handItem.getDamageValue() + posList.length);
        console.log(handItem.getDamageValue());
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
    let upBlock = block.getUp().getId() == block.getId() ? block.getUp() : null;
    let downBlock = block.getDown().getId() == block.getId() ? block.getDown() : null;
    let westBlock = block.getWest().getId() == block.getId() ? block.getWest() : null;
    let northBlock = block.getNorth().getId() == block.getId() ? block.getNorth() : null;
    let southBlock = block.getSouth().getId() == block.getId() ? block.getSouth() : null;
    let eastBlock = block.getEast().getId() == block.getId() ? block.getEast() : null;

    if (upBlock != null && !list.includes(upBlock.getPos().asLong())) {
        list.push(upBlock.getPos().asLong())
        blockList.push(upBlock);
    }
    if (downBlock != null && !list.includes(downBlock.getPos().asLong())) {
        list.push(downBlock.getPos().asLong())
        blockList.push(downBlock)
    }
    if (westBlock != null && !list.includes(westBlock.getPos().asLong())) {
        list.push(westBlock.getPos().asLong())
        blockList.push(westBlock)
    }
    if (northBlock != null && !list.includes(northBlock.getPos().asLong())) {
        list.push(northBlock.getPos().asLong())
        blockList.push(northBlock)
    }
    if (southBlock != null && !list.includes(southBlock.getPos().asLong())) {
        list.push(southBlock.getPos().asLong())
        blockList.push(southBlock)
    }
    if (eastBlock != null && !list.includes(eastBlock.getPos().asLong())) {
        list.push(eastBlock.getPos().asLong())
        blockList.push(eastBlock)
    }

    return {
        blockList: blockList,
        list: list
    }
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
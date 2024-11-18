BlockEvents.broken(event => {
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = event.getPlayer();
    if (player.getData().get("multipleBlocks")) {
        let posList = [];
        let maxMultiple = MultipleBlockConfig.maxMultiple;
        let block = event.getBlock();
        let isDrop = !block.getBlockState().requiresCorrectToolForDrops()
        let level = block.getLevel();
        let handItem = player.getMainHandItem()
        if (handItem.id == "mekanism:atomic_disassembler") isDrop = true;
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
        posList.forEach(pos => {
            if (player.isCreative()) {
                level.destroyBlock(BlockPos.of(pos), false, player)
                return;
            }
            if (isDrop) {
                level.getBlockState(BlockPos.of(pos))
                    .getBlock()
                    .playerDestroy(
                        level, 
                        player, 
                        BlockPos.of(pos), 
                        level.getBlockState(BlockPos.of(pos)), 
                        level.getBlockEntity(BlockPos.of(pos)), 
                        handItem
                    );
                level.destroyBlock(BlockPos.of(pos), false)
            }else{
                level.destroyBlock(BlockPos.of(pos), false,player)
            }
        })
        if (!handItem.hasTag('minecraft:tools')) return
        if (!player.isCreative()) {
            handItem.setDamageValue(handItem.getDamageValue() + posList.length - 1);
            if (handItem.getDamageValue() > handItem.getMaxDamage()) handItem.count--
        }
    }
})

/**
 * 
 * @param {Internal.BlockContainerJS} block
 * @param {Array} list 
 */
function addMultipleBlocks(block, list) {
    let blockList = []

    pushList(equalBlock(block.getUp(), block), list, blockList);
    pushList(equalBlock(block.getDown(), block), list, blockList);
    pushList(equalBlock(block.getWest(), block), list, blockList);
    pushList(equalBlock(block.getNorth(), block), list, blockList);
    pushList(equalBlock(block.getSouth(), block), list, blockList);
    pushList(equalBlock(block.getEast(), block), list, blockList);

    return {
        blockList: blockList,
        list: list
    }
}

function pushList(block, list1, list2) {
    if (block != null && !list1.includes(block.getPos().asLong())) {
        list1.push(block.getPos().asLong())
        list2.push(block)
    }
}

function equalBlock(block1, block2) {
    return block1.getId() == block2.getId() ? block1 : null;
}

/**
 * 判断是否物品是否可以正常掉落
 * @param {Internal.BlockContainerJS} block 
 * @param {Internal.ItemStack} item 
 * @returns 
 */
function canDrop(block, item) {
    let db = toolDestroyBlock(item);
    if (db == undefined) return false;
    if (block.hasTag(db)) {
        let level = blockDestroyLevel(block);
        if (level == 0) return true
        for (let index = level; index < 4; index++) {
            try{
                let l = null
                Object.keys(MengUtils.tool[index]).forEach(key=>{
                    if (l == null && item.hasTag(key)){
                        l = MengUtils.tool[index][key]
                    }
                    return;
                })
                for (let j = 0; j < l.length; j++) if (item.id == l[j]) return true
            }catch(err){    
                console.warn(err);
                return false;
            }
        }
    }
    return false;
}

/**
 * 获取方块破坏等级
 * @param {*} block 
 * @returns 
 */
function blockDestroyLevel(block) {
    if (block.hasTag(MengUtils.toolLevel.stoneTool)) return MengUtils.toolLevel["minecraft:needs_stone_tool"]
    if (block.hasTag(MengUtils.toolLevel.ironTool)) return MengUtils.toolLevel["minecraft:needs_iron_tool"]
    if (block.hasTag(MengUtils.toolLevel.diamondTool)) return MengUtils.toolLevel["minecraft:needs_diamond_tool"]
    return 0;
}

/**
 * 获取工具可破坏的方块
 * @param {*} item 
 * @returns 
 */
function toolDestroyBlock(item) {
    if (item.hasTag(MengUtils.tagTool.axes)) return MengUtils.tagBlockTool.axes;
    if (item.hasTag(MengUtils.tagTool.pickaxes)) return MengUtils.tagBlockTool.pickaxes;
    if (item.hasTag(MengUtils.tagTool.shovels)) return MengUtils.tagBlockTool.shovels;
    if (item.hasTag(MengUtils.tagTool.hoes)) return MengUtils.tagBlockTool.hoes;
}
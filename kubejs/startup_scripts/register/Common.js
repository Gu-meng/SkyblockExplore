// priority: 15

const modid = "meng";
const namespace = modid + ":";

const basicItem = {
    crushbone : namespace + "crushbone",
    redstone_dust : namespace + "redstone_dust",
    iron_dust : namespace + "iron_dust",
    iron_frame : namespace + "iron_frame",
    white_dust : namespace + "white_dust",
    iron_timber_sheet : namespace + "iron_timber_sheet",
    raffle_ticket : namespace + "raffle_ticket",
    reinforce_iron_sheet : namespace + 'reinforce_iron_sheet',
    lava_debris : namespace + "lava_debris",
    lava_chunk : namespace + "lava_chunk",
    drill_bit : namespace + "drill_bit",
    saw_blade : namespace + "saw_blade",
    harvesting_accessories : namespace + "harvesting_accessories",
    screw_nut : namespace + "screw_nut",
    screw : namespace + "screw",
    machine : namespace + "machine",
    diamond_wire : namespace + "diamond_wire",
    slag : namespace + "slag",
    painful_tears : namespace + "painful_tears",
    xp_shop : namespace + "xp_shop",
    small_andesite : namespace + "small_andesite",
    small_cobblestone : namespace + "small_cobblestone",
    small_diorite : namespace + "small_diorite",
    diamond_upgrade_smithing_template : namespace + "diamond_upgrade_smithing_template",
    deep_fear : namespace + "deep_fear",
    catalyst_goat : namespace + "catalyst_goat",
}

const ironTimberblock = {
    iron_acacia_block : namespace + "iron_acacia_block",
    iron_birch_block : namespace + "iron_birch_block",
    iron_cherry_block : namespace + "iron_cherry_block",
    iron_crimson_block : namespace + "iron_crimson_block",
    iron_dark_oak_block : namespace + "iron_dark_oak_block",
    iron_jungle_block : namespace + "iron_jungle_block",
    iron_mangrove_block : namespace + "iron_mangrove_block",
    iron_oak_block : namespace + "iron_oak_block",
    iron_spruce_block : namespace + "iron_spruce_block",
    iron_warped_block : namespace + "iron_warped_block",  
}

const basicBlock = {
    stalinite_block : namespace + "stalinite_block",
    slag_block : namespace + "slag_block",
    precision_machine_parts : namespace + "precision_machine_parts",
    dirty_cobblestone : namespace + "dirty_cobblestone",
    better_precision_machine_parts : namespace + "better_precision_machine_parts"
}

const ToolItem = {
    crushbone_axe : namespace + "crushbone_axe",
    crushbone_sword : namespace + "crushbone_sword",
    rain_doll : namespace + "rain_doll",
    sunny_doll : namespace + "sunny_doll",
    crushbone_shears : namespace + "crushbone_shears"
}

const MeshItem = {
    iron_mesh : namespace + "iron_mesh",
    diamond_mesh : namespace + "diamond_mesh",
    charged_certus_quartz_crystal_mesh : namespace + "charged_certus_quartz_crystal_mesh",
    copper_mesh : namespace + "copper_mesh"
}

const CreateIncompleteItem = {
    machine_incomplete : namespace + "machine_incomplete",
    precision_machine_incomplete : namespace + "precision_machine_incomplete",
    better_precision_machine_incomplete : namespace + "better_precision_machine_incomplete"
}

const musicDisc = {
    music_disc_never : namespace + "music_disc_never"
}

const fluidBucket = {
    steel : namespace + "steel_bucket"
}

let AECellComponentItems = {
}

let AECellComponentItemIds = {

}

/**
 * 注册存储元件和对应的组件
 * @param {Number} byte 最大内存 kb
 * @param {Number} maxItemTypeCount 最大物品类型属性 1~63
 * @param {Number} AE2Energy 消耗的ae能
 * @param {Number} bytesPer 每一个新物品开辟所需的空间byte
 */
function regCellComponent(byte,maxItemTypeCount,AE2Energy,bytesPer){
    let cellComponentId = `${namespace}cell_component_${byte}k`
    let storageCellId = `${namespace}item_storage_cell_${byte}k`
    AECellComponentItems[byte] = {
        byte:byte,
        cellComponent: cellComponentId,
        storageCell:storageCellId,
        maxItemTypeCount:maxItemTypeCount,
        AE2Energy:AE2Energy,
        bytesPer:bytesPer
    }
    AECellComponentItemIds[`component${byte}`] = cellComponentId
    AECellComponentItemIds[`storage${byte}`] = storageCellId
}

regCellComponent(512,63,3.0,4096)
regCellComponent(1024,63,4.0,4096)
regCellComponent(2048,63,5.0,4096)
regCellComponent(4096,63,6.0,4096)
regCellComponent(8192,63,7.0,4096)
regCellComponent(16384,63,12.0,4096)
regCellComponent(32768,63,20.0,8192)

const regIds = Object.assign({},basicItem,ironTimberblock,basicBlock,ToolItem,MeshItem,CreateIncompleteItem,musicDisc,AECellComponentItemIds,fluidBucket);


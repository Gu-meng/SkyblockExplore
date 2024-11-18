// priority: 15

const modid = "meng";
const namespace = modid + ":";

const basicItem = {
    crushbone: namespace + "crushbone",
    redstone_dust: namespace + "redstone_dust",
    iron_dust: namespace + "iron_dust",
    iron_frame: namespace + "iron_frame",
    white_dust: namespace + "white_dust",
    iron_timber_sheet: namespace + "iron_timber_sheet",
    raffle_ticket: namespace + "raffle_ticket",
    reinforce_iron_sheet: namespace + 'reinforce_iron_sheet',
    lava_debris: namespace + "lava_debris",
    lava_chunk: namespace + "lava_chunk",
    drill_bit: namespace + "drill_bit",
    saw_blade: namespace + "saw_blade",
    harvesting_accessories: namespace + "harvesting_accessories",
    screw_nut: namespace + "screw_nut",
    screw: namespace + "screw",
    machine: namespace + "machine",
    diamond_wire: namespace + "diamond_wire",
    slag: namespace + "slag",
    painful_tears: namespace + "painful_tears",
    xp_shop: namespace + "xp_shop",
    small_andesite: namespace + "small_andesite",
    small_cobblestone: namespace + "small_cobblestone",
    small_diorite: namespace + "small_diorite",
    diamond_upgrade_smithing_template: namespace + "diamond_upgrade_smithing_template",
    deep_fear: namespace + "deep_fear",
    catalyst_goat: namespace + "catalyst_goat",
    reload_xpshop: namespace + "reload_xpshop",
    return_pearl: namespace + "return_pearl",
    nether_gem : namespace + "nether_gem",
    netherite_scrap_nugget : namespace + "netherite_scrap_nugget",
    broken_glass : namespace + "broken_glass",
    glowstone_gem : namespace + "glowstone_gem",
    overcharged_osmium : namespace + "overcharged_osmium"
}

const especial = {
    backpack : namespace + "backpack"
}

const ironTimberblock = {
    iron_acacia_block: namespace + "iron_acacia_block",
    iron_birch_block: namespace + "iron_birch_block",
    iron_cherry_block: namespace + "iron_cherry_block",
    iron_crimson_block: namespace + "iron_crimson_block",
    iron_dark_oak_block: namespace + "iron_dark_oak_block",
    iron_jungle_block: namespace + "iron_jungle_block",
    iron_mangrove_block: namespace + "iron_mangrove_block",
    iron_oak_block: namespace + "iron_oak_block",
    iron_spruce_block: namespace + "iron_spruce_block",
    iron_warped_block: namespace + "iron_warped_block",
}

const basicBlock = {
    stalinite_block: namespace + "stalinite_block",
    slag_block: namespace + "slag_block",
    new_slag_block : namespace + "new_slag_block",
    precision_machine_parts: namespace + "precision_machine_parts",
    dirty_cobblestone: namespace + "dirty_cobblestone",
    better_precision_machine_parts: namespace + "better_precision_machine_parts",
    wither_core_block:namespace + "wither_core_block"
}

const ToolItem = {
    crushbone_axe: namespace + "crushbone_axe",
    crushbone_sword: namespace + "crushbone_sword",
    rain_doll: namespace + "rain_doll",
    sunny_doll: namespace + "sunny_doll",
    crushbone_shears: namespace + "crushbone_shears"
}

const MeshAdvanced = {
    diamond_mesh: namespace + "diamond_mesh",
    charged_certus_quartz_crystal_mesh: namespace + "charged_certus_quartz_crystal_mesh",
    netherite_mesh:namespace + "netherite_mesh"
}

const MeshItem = {
    iron_mesh: namespace + "iron_mesh",
    copper_mesh: namespace + "copper_mesh",
    quartz_mesh: namespace + "quartz_mesh"
}

const CreateIncompleteItem = {
    machine_incomplete: namespace + "machine_incomplete",
    precision_machine_incomplete: namespace + "precision_machine_incomplete",
    better_precision_machine_incomplete: namespace + "better_precision_machine_incomplete"
}

const musicDisc = {
    music_disc_never: namespace + "music_disc_never"
}

const fluidBucket = {
    steel: namespace + "steel_bucket",
    nether_fluid: namespace + "nether_fluid_bucket"
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
function regCellComponent(byte, maxItemTypeCount, AE2Energy, bytesPer) {
    let cellComponentId = `${namespace}cell_component_${byte}k`
    let storageCellId = `${namespace}item_storage_cell_${byte}k`
    AECellComponentItems[byte] = {
        byte: byte,
        cellComponent: cellComponentId,
        storageCell: storageCellId,
        maxItemTypeCount: maxItemTypeCount,
        AE2Energy: AE2Energy,
        bytesPer: bytesPer
    }
    AECellComponentItemIds[`component${byte}`] = cellComponentId
    AECellComponentItemIds[`storage${byte}`] = storageCellId
}

regCellComponent(512, 63, 3.0, 4096)
regCellComponent(1024, 63, 4.0, 4096)
regCellComponent(2048, 63, 5.0, 4096)
regCellComponent(4096, 63, 6.0, 4096)
regCellComponent(8192, 63, 7.0, 4096)
regCellComponent(16384, 63, 12.0, 4096)
regCellComponent(32768, 63, 20.0, 8192)

let budding = {
}

let buddingIds = {}

function regBudding(name, color,dropItem) {
    buddingIds[`budding_${name}`] = `${namespace}budding_${name}`;
    buddingIds[`${name}_cluster`] = `${namespace}${name}_cluster`;
    buddingIds[`large_${name}_hud`] = `${namespace}large_${name}_hud`;
    buddingIds[`medium_${name}_hud`] = `${namespace}medium_${name}_hud`;
    buddingIds[`small_${name}_hud`] = `${namespace}small_${name}_hud`;

    budding[`budding_${name}`] = {
        budding: buddingIds[`budding_${name}`],
        cluster: buddingIds[`${name}_cluster`],
        large: buddingIds[`large_${name}_hud`],
        medium: buddingIds[`medium_${name}_hud`],
        small: buddingIds[`small_${name}_hud`],
        color:color,
        dropItem:dropItem
    }

    // blockJsonIO(modid, `${name}_cluster`, "cluster");
    // blockJsonIO(modid, `large_${name}_hud`, "large_hud"); 
    // blockJsonIO(modid, `medium_${name}_hud`, "medium_hud");
    // blockJsonIO(modid, `small_${name}_hud`, "small_hud");
}

regBudding("redstone",0xff2b44,'meng:redstone_dust')
regBudding("coal",0x3c3b40,"minecraft:coal")
regBudding("quartz",0xd9d9d9,"minecraft:quartz")

const regIds = Object.assign({}, basicItem, ironTimberblock, basicBlock, ToolItem, MeshItem, MeshAdvanced, CreateIncompleteItem, musicDisc, AECellComponentItemIds, fluidBucket,buddingIds);
/**
 * 为了防止不稳定因素，该代码请在发布前删除或者不要打包到发布代码中
 * 可能会出现错删文件等操作
 * @param {*} modid 
 * @param {*} name 
 * @param {*} type 
 */
function blockJsonIO(modid, name, type) {
    let path = `./kubejs/assets/${modid}`
    let obj = {
        "variants": {
            "facing=down": {
                "model": `${modid}:block/${name}`,
                "x": 180
            },
            "facing=east": {
                "model": `${modid}:block/${name}`,
                "x": 90,
                "y": 90
            },
            "facing=north": {
                "model": `${modid}:block/${name}`,
                "x": 90
            },
            "facing=south": {
                "model": `${modid}:block/${name}`,
                "x": 90,
                "y": 180
            },
            "facing=up": {
                "model": `${modid}:block/${name}`
            },
            "facing=west": {
                "model": `${modid}:block/${name}`,
                "x": 90,
                "y": 270
            }
        }
    }
    JsonIO.write(`${path}/blockstates/${name}.json`, obj)
    let obj2 = {
        "parent": `${modid}:block/cross`,
        "render_type": "minecraft:cutout",
        "textures": {
            "cross": `${modid}:block/cluster/${type}`
        }
    }
    JsonIO.write(`${path}/models/block/${name}.json`, obj2)
    let obj3 = {
        "parent": "minecraft:item/small_amethyst_bud",
        "textures": {
            "layer0": `${modid}:block/cluster/${type}`
        }
    }

    JsonIO.write(`${path}/models/item/${name}.json`, obj3)
}
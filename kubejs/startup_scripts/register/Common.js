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
    small_diorite : namespace + "small_diorite"
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
}

const musicDisc = {
    music_disc_never : namespace + "music_disc_never"
}

const regIds = Object.assign({},basicItem,ironTimberblock,basicBlock,ToolItem,MeshItem,CreateIncompleteItem,musicDisc);


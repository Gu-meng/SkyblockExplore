ServerEvents.recipes(event=>{
    event.shapeless("4x meng:iron_dust",["minecraft:iron_nugget"]);

    event.shaped("meng:crushbone_sword",[
        ['','meng:crushbone'],
        ['minecraft:stick','']
    ]);

    event.shaped("meng:crushbone_axe",[
        ['meng:crushbone','meng:crushbone',''],
        ['meng:crushbone','minecraft:stick',''],
        ['','minecraft:stick','']
    ]);

    event.shapeless("7x meng:iron_dust",['minecraft:bone']);

})
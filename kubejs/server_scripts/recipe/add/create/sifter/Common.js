// priority: 5

// 线筛网
function stringMesh(output,input,time,isWater){
    sifting(output,[input,'createsifter:string_mesh'],time,isWater);
}

// 安山筛网
function andesiteMesh(output,input,time,isWater){
    sifting(output,[input,'createsifter:andesite_mesh'],time,isWater);
}
// 锌筛网
function zincMesh(output,input,time,isWater){
    sifting(output,[input,'createsifter:zinc_mesh'],time,isWater);
}
// 黄铜筛网
function brassMesh(output,input,time,isWater){
    sifting(output,[input,'createsifter:brass_mesh'],time,isWater);
}
// 高级黄铜筛网
function advancedBrassMesh(output,input,time,isWater){
    sifting(output,[input,'createsifter:advanced_brass_mesh'],time,isWater);
}

// 铁筛网
function ironMesh(output,input,time,isWater){
    sifting(output,[input,'meng:iron_mesh'],time,isWater);
}

// 钻石筛网
function diamondMesh(output,input,time,isWater){
    sifting(output,[input,'meng:diamond_mesh'],time,isWater);
}

// 赛特斯筛网
function quartzMesh(output,input,time,isWater){
    sifting(output,[input,'meng:charged_certus_quartz_crystal_mesh'],time,isWater);
}

// 铜筛网
function copperMesh(output,input,time,isWater){
    sifting(output,[input,'meng:copper_mesh'],time,isWater);
}

/**
 * 
 * @param {*} output 
 * @param {*} input 
 * @param {*} time 不填写默认为5秒
 * @param {*} isWater 不填写默认为false
 * @returns 
 */
function sifting(output,input,time,isWater){
    if(time == undefined) time = 5
    if(isWater == undefined) isWater = false
    /**
     * @type {Special.Recipes.SiftingCreatesifter}
     */
    let cs;
    let createsifter;
    ServerEvents.recipes(event=>{
        createsifter = event.recipes.createsifter;
        cs = createsifter.sifting(output,input,time * 20,isWater);
    });
    return cs
}
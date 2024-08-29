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

/**
 * 
 * @param {*} output 
 * @param {*} input 
 * @param {*} time 不填写默认为5秒
 * @param {*} isWater 不填写默认为false
 */
function sifting(output,input,time,isWater){
    if(time == undefined) time = 5
    if(isWater == undefined) isWater = false
    ServerEvents.recipes(event=>{
        const createsifter = event.recipes.createsifter;
        createsifter.sifting(output,input,time * 20,isWater);
    });
}
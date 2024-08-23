// 线筛网
function string_mesh(output,input,time,isWater){
    sifting(output,[input,'createsifter:string_mesh'],time,isWater);
}

// 安山筛网
function andesite_mesh(output,input,time,isWater){
    sifting(output,[input,'createsifter:andesite_mesh'],time,isWater);
}
// 锌筛网
function zinc_mesh(output,input,time,isWater){
    sifting(output,[input,'createsifter:zinc_mesh'],time,isWater);
}
// 黄铜筛网
function brass_mesh(output,input,time,isWater){
    sifting(output,[input,'createsifter:brass_mesh'],time,isWater);
}
// 高级黄铜筛网
function advanced_brass_mesh(output,input,time,isWater){
    sifting(output,[input,'createsifter:advanced_brass_mesh'],time,isWater);
}


function sifting(output,input,time,isWater){
    ServerEvents.recipes(event=>{
        const createsifter = event.recipes.createsifter;
        createsifter.sifting(output,input,time * 20,isWater);
    });
}
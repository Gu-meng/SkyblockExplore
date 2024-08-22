// ServerEvents.recipes(event=>{
//     const createsifter = event.recipes.createsifter;
//     // 线筛网
//     function string_mesh(output,input,time,isWater){
//         createsifter.sifting(output,
//             [input,
//             'createsifter:string_mesh'
//         ],time * 20,isWater);
//     }
//     // 安山筛网
//     function andesite_mesh(output,input,time,isWater){
//         createsifter.sifting(output,
//             [input,
//             'createsifter:andesite_mesh'
//         ],time * 20,isWater);
//     }
//     // 锌筛网
//     function zinc_mesh(output,input,time,isWater){
//         createsifter.sifting(output,
//             [input,
//             'createsifter:zinc_mesh'
//         ],time * 20,isWater);
//     }
//     // 黄铜筛网
//     function brass_mesh(output,input,time,isWater){
//         createsifter.sifting(output,
//             [input,
//             'createsifter:brass_mesh'
//         ],time * 20,isWater);
//     }
//     // 高级黄铜筛网
//     function advanced_brass_mesh(output,input,time,isWater){
//         createsifter.sifting(output,
//             [input,
//             'createsifter:advanced_brass_mesh'
//         ],time * 20,isWater);
//     }
    
//     // 下面是测试代码
//     string_mesh([
//         Item.of('minecraft:campfire',3).withChance(0.3),
//         Item.of('minecraft:bone_block',1).withChance(0.5)
//         ],'minecraft:bedrock',5,false);

//     string_mesh('minecraft:campfire','minecraft:bone_block',5,false);
// })
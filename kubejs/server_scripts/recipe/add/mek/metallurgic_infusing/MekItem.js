MekRecipe.metallurgicInfusing('mekanism:enriched_iron','#forge:ingots/iron',MekInfuse.carbon,50);
MekRecipe.metallurgicInfusing('mekanism:dust_steel','mekanism:enriched_iron',MekInfuse.carbon,90);
MekRecipe.metallurgicInfusing('mekanism:alloy_infused','#forge:ingots/steel',MekInfuse.redstone,90)
MekRecipe.metallurgicInfusing('mekanism:basic_control_circuit',"meng:overcharged_osmium",MekInfuse.alloyInfused,40)
MekRecipe.metallurgicInfusing('mekanism:advanced_control_circuit','mekanism:basic_control_circuit',MekInfuse.alloyInfused,80);     
MekRecipe.metallurgicInfusing('mekanism:alloy_reinforced','mekanism:alloy_infused',MekInfuse.diamond,80)
MekRecipe.metallurgicInfusing('mekanism:elite_control_circuit','mekanism:advanced_control_circuit',MekInfuse.alloyReinforced,120)
MekRecipe.metallurgicInfusing('mekanism:dust_refined_obsidian','#forge:dusts/obsidian',MekInfuse.alloyReinforced,80)
MekRecipe.metallurgicInfusing('mekanism:ultimate_control_circuit','mekanism:elite_control_circuit',MekInfuse.alloyAtomic,100)
// MekRecipe.metallurgicInfusing()
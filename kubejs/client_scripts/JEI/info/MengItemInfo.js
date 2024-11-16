JEIEvents.information(event=>{
    let list = [
        "painful_tears",
        "raffle_ticket",
        "xp_shop",
        "rain_doll",
        "sunny_doll",
        "dirty_cobblestone",
        "catalyst_goat",
        "reload_xpshop",
        "return_pearl",
        "nether_gem",
        "wither_core_block",
        "stalinite_block"
    ]
    list.forEach(value=>{
        event.addItem("meng:" + value,Text.translate("jei.item.information." + value))
    })
})
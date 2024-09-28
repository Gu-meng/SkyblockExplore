JEIEvents.information(event=>{
    let list = [
        "painful_tears",
        "raffle_ticket",
        "xp_shop",
        "rain_doll",
        "sunny_doll",
        "dirty_cobblestone",
        "catalyst_goat"
    ]
    list.forEach(value=>{
        event.addItem("meng:" + value,Text.translate("jei.item.information." + value))
    })
})
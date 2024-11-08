let RaffleTicketObj = {};

function regRaffleTicket (type,color) {
    RaffleTicketObj[type] = {
        color:color
    }
}
regRaffleTicket("basal",0xff8317)
regRaffleTicket("ore",0x54daff);
regRaffleTicket("sapling",0x09ff00);
regRaffleTicket("bed",0xff85b4);

StartupEvents.registry("item", event => {
    event.create(basicItem.raffle_ticket)
        .texture("layer0", "meng:item/raffle_ticket2")
        .texture("layer1", "meng:item/raffle_ticket1")
        .name(item => {
            if (item.hasNBT()) {
                let type = item.nbt.ticketType
                if (type) return global.raffleTicketName(type);
            }
            return Text.translate("item.meng.raffle_ticket")
        })
        .color((itemStack, tintIndex) => {
            if (tintIndex == 1) {
                let nbt = itemStack.nbt || {};
                let type = nbt.ticketType || "basal";
                return global.raffleTicketColor(type);
            }
            return 0xFFFFFF
        });
})

global.raffleTicketName = (type) =>{
    let obj = RaffleTicketObj[type];
    return Text.translate("item.meng.raffle_ticket." + type).color(obj.color)
}

global.raffleTicketColor = (type) => {
    return RaffleTicketObj[type].color
}
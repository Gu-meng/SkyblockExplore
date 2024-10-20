ItemEvents.firstRightClicked("meng:reload_xpshop",event=>{
    replenishment(event.server)
    let item = event.getItem();
    event.server.tell(Text.translate("meng.tell.reload_xpshop"));
    item.count--;

})
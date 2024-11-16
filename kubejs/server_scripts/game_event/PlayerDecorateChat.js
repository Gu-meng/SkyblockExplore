PlayerEvents.decorateChat(event=>{
    const msg = event.getMessage();
    event.setMessage(Text.of(msg).clickSuggestCommand(msg).hover(Text.of("+1")))
})

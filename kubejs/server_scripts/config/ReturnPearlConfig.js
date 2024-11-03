const ReturnPearlConfig = {
    /**
     * 删除时间 (秒)
     */
    deleteTime : 5
}


PlayerEvents.loggedIn(event=>{
    event.player.sendData("ReturnPearlConfig",ReturnPearlConfig)
})
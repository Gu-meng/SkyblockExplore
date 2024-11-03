const ReturnPearlConfig = {
    /**
     * 删除时间 (秒)
     */
    deleteTime : 5
}

NetworkEvents.dataReceived("ReturnPearlConfig",event=>{
    ReturnPearlConfig = event.getData().get("ReturnPearlConfig")
})
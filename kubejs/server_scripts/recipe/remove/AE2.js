ServerEvents.recipes(event=>{
    event.remove({id:"createaddition:compat/ae2/charged_certus_quartz"})
    event.remove({id:"ae2:inscriber/engineering_processor"})
    event.remove({id:"ae2:inscriber/logic_processor"})
    event.remove({id:"ae2:inscriber/calculation_processor"})
    event.remove({type:"ae2:charger"})
})
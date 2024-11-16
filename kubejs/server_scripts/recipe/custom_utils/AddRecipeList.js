// priority: 11

let customList = [];

ServerEvents.recipes(event=>{
    customList.forEach(value=>{
        event.custom(value);
    })
})
// priority: 9

function FileHelper(fileName,path){
    if (path == undefined) path = "./meng";
    path = path + "/" + fileName;
    this.json = JsonIO.readJson(path);

    this.getJson = () =>{
        try {
            return this.json.asJsonObject.get("data")
        }catch(err){
            console.warn(err);
            this.updateJson(path,{})
            return {}
        }
        
    }

    this.updateJson = (newJson) =>{
        JsonIO.write(path,{data:newJson});
    }
}
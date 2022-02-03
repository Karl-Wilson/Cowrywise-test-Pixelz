const handler = (req, res)=>{
    if(req.method == "POST"){
        const {searchQuery} = req.body
        let query = searchQuery.trim().toLowerCase();
        try{
            fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=8&client_id=fn0Chrhv_LsBGuCRKcijPcNNEph7im43rm5KzPW5gT4`).then(response=>response.json()).then(data=>res.status(200).json({data: data}))

        }
        catch(e){
            res.status(404).json({message: "unsuccessful"});
        }

    }else{
        try{
            fetch('https://api.unsplash.com/search/photos?query=african&per_page=8&client_id=fn0Chrhv_LsBGuCRKcijPcNNEph7im43rm5KzPW5gT4').then(response=>response.json()).then(data=>res.status(200).json({data: data}))

        }
        catch(e){
            res.status(404).json({message: "unsuccessful"});
        }
    }
}
export default handler;
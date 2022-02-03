const handler = (req, res) =>{
    if(req.method == "POST"){
        const {username} = req.body
        try{
            fetch(`https://api.unsplash.com/users/${username}/?client_id=fn0Chrhv_LsBGuCRKcijPcNNEph7im43rm5KzPW5gT4`).then(response=>response.json()).then(data=>res.status(200).json({data: data}))
        }
        catch(e){
            res.status(404).json({message: "unsuccessful"});
        }
    }else{
        
    }
}
export default handler;
const posts = require("../data/posts")


//INDEX
function index (req,res) {
    res.json({message:"lista dei post", posts, postsCount: posts.length})
}

//SHOW
function show (req,res) {
    const id = parseInt(req.params.id);
    const post =posts.find((post) =>post.id===id);
     res.json( post )
}

//STORE
function store (req,res){
    res.json("creazione nuovo post")
}

//UPDATE
function update (req,res){
    const id = parseInt (req.params.id);
    res.json(`aggiornamento del post ${id}`)
}
//DESTROY
function destroy (req,res){
    const id = parseInt (req.params.id);
    res.json(`eliminazione del post ${id}`)
}


module.exports = {index,show,store,update,destroy};


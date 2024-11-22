const posts = require("../data/posts");
const { post } = require("../routers/posts");


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
    const {titolo, contenuto, img, tags}=req.body;
    const id=posts.at(-1).id+1
    const newPost={
    id:id,
    titolo:titolo,
    contenuto:contenuto,
    img:img,
    tags:tags
    }
    posts.push(newPost)

    res.json(newPost)
}

//UPDATE
function update (req,res){
    const id = parseInt (req.params.id);
    const post =posts.find((post) =>post.id===id);
    const {titolo, contenuto, img, tags}=req.body;
   
        
        post.titolo=titolo;
        post.contenuto=contenuto;
        post.img=img;
        post.tags=tags;
        res.json(post)
}
//DESTROY
function destroy (req,res){
const id = parseInt (req.params.id);
const eliminato =posts.find((post,index) =>post.id===id);
console.log( "Elemento eliminato: ", eliminato);
posts.splice(posts.indexOf(eliminato), 1);
res.sendStatus(204);
console.log("Lista aggiornata: ", posts);
}

module.exports = {index,show,store,update,destroy};


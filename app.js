
const express =require('express')
const cors=require("cors");
const app = express()
const port = 3000


app.use(cors());
app.use(express.json());
app.use(express.static('public'));


const postsRouter=require ("./routers/posts.js");
app.use("/posts",postsRouter)



const checkTime=require( "./Middlewares/checkTime.js");
app.use(checkTime)
const errorHandler =require ("./Middlewares/errorHandler.js");
app.use(errorHandler)
const notFound =require ("./Middlewares/notFound.js");
app.use(notFound)





app.get('/', (req, res) => {
    res.send('Server del mio blog!')
    });
     
    app.listen(port, () => {
    console.log(`il server risulta online su http://localhost:${port}`)
    })
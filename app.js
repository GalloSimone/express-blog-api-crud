const express = require('express')
const { url } = require('inspector');
const app = express()
const port = 3000
app.use(express.json());

app.use(express.static('public'))



const postsRouter = require("./routers/posts")
app.use("/posts",postsRouter)



const checkTime = require ("./Middlewares/checkTime")
app.use(checkTime)
const errorHandler = require ("./Middlewares/errorHandler")
app.use(errorHandler)
const notFound = require ("./Middlewares/notFound")
app.use(notFound)





app.get('/', (req, res) => {
    res.send('Server del mio blog!')
    });




    app.listen(port, () => {
    console.log(`il server risulta online`)
    })
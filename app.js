const express = require('express')
const { url } = require('inspector');
const app = express()
const port = 3000
app.use(express.json());

app.use(express.static('public'))

const checkTime = require ("./Middlewares/checkTime")
app.use(checkTime)
const postsRouter = require("./routers/posts")


app.use("/posts",postsRouter)

app.get('/', (req, res) => {
    res.send('Server del mio blog!')
    });




    app.listen(port, () => {
    console.log(`il server risulta online`)
    })
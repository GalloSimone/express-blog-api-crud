const express = require('express')
const { url } = require('inspector');
const app = express()
const port = 3000
app.use(express.static('public'))

const postsRouter = require("./routers/posts")


app.use("/posts",postsRouter)

app.get('/', (req, res) => {
    res.send('Server del mio blog!')
    });




    app.listen(port, () => {
    console.log(`il server risulta online`)
    })
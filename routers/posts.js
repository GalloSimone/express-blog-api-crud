const express = require("express");
const router = express.Router();

const posts =require("../data/posts.js")
            //INDEX
    router.get('/',(req, res)=> {

            res.json({message: "POST", noticeBoard, noticeBoardCount: noticeBoard.length})
            });


            //SHOW 
            router.get("/:id", (req,res)=>{
                const {id} = req.params;
                res.json( ` post ${id}` )
            });

            //STORE
            router.post("/", (req,res)=>{
             res.json( "creazione nuovo post" )

            });

            //UPDATE
            router.put("/:id", (req,res)=>{
                const {id}=req.params;
                res.send(`aggiornamento del post ${id}`)
            }) 
            
            //DESTROY
            router.delete('/:id', (req,res)=>{
                const {id} = req.params;
                res.send(`eliminazione del post ${id}`)

            })









module.exports = router;
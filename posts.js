const express = require("express");
const router = express.Router();




        const noticeBoard =[
            {  
                id:1, 
                titolo: "Ciambellone",
                contenuto:"Un dolce soffice e genuino, perfetto per addolcire le tue giornate con un tocco di tradizione casalinga.",
                img:"./public/images/ciambellone.jpeg",
                tags : ["ciambellone", "tradizione"]
            },
            {   
                id:2,
                titolo: "Cracker alla barbabietola",
                contenuto:"Leggeri e croccanti, questi cracker uniscono il sapore unico della barbabietola a una bontà irresistibile.",
                img:"./public/images/cracker_barbabietola.jpeg",
                tags : ["cracker","barbabietola"]
            },
            {   
                id:3,
                titolo: "Pane fritto",
                contenuto:" Una delizia dorata e fragrante, ricoperta di zucchero o miele, che regala un'esplosione di dolcezza al primo morso.",
                img:"./public/images/cracker_barbabietola.jpeg",
                tags : ["pane", "fritto"]
            },
            {   
                id:4,
                titolo: "Pasta alla barbabietola",
                contenuto:"Un primo piatto scenografico e raffinato, dal sapore delicato e dalla crema vellutata che conquista",
                img:"./public/images/pasta_barbabietola.jpeg",
                tags : ["pasta", "barbabietola"]
            },
            {   
                id:5,
                titolo: "Torta paesana",
                contenuto:"Il dolce rustico che racchiude tutta la magia dei sapori antichi, con note di cacao, uvetta e pinoli.",
                img:"./public/images/torta_paesana.jpeg",
                tags : ["dolce", "torta", "paesana"]
            }]
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
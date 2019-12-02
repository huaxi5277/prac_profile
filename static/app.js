var express = require("express")
var app = express()
var router = express.Router()
express.request(router)

router.use("/",(rea,res)=>{
    res.send(JSON.stringify("1111"))
})

app.listen(3000,(err)=>{
    if(err){
        console.log(err)
        return 
    }
    console.log("server start")
})


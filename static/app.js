var express = require("express")
var router = express.Router()
express.request(router)

router.use("/",(rea,res)=>{
    res.send(JSON.stringify("1111"))
})
const express = require("express")
const app = express()

app.get('/health-checkup', function(req,res){

    res.send("Ur heart is healthy")

})

app.listen(3000)
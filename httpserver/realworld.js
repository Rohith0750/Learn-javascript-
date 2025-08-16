const express = require("express");
const app = express();

const users = [{
    name: 'jhon',
    kidney: [
        { healthy: false }
    ]
}];

app.use(express.json());

app.get('/', function (req, res) {
    const johnKidney = users[0].kidney; // lowercase 'kidney'
    const numberOfKidney = johnKidney.length;

    let numberOfHealthyKidney = 0;
    for (let i = 0; i < johnKidney.length; i++) {
        if (johnKidney[i].healthy) {
            numberOfHealthyKidney++;
        }
    }

    let numberOfUnhealthyKidney = numberOfKidney - numberOfHealthyKidney;

    res.send({
        numberOfKidney,
        numberOfHealthyKidney,
        numberOfUnhealthyKidney
    });
});

app.post('/', function (req, res) {
    const isHealthy = req.body.ishealthy; // make sure body-parser is used

    users[0].kidney.push({ 
        healthy: isHealthy
    });

    res.json({
        msg: "Kidney status updated successfully",
        kidney: users[0].kidney 
    });
});

app.put('/' , function(req,res){
    for(let i = 0; i < users[0].kidney.length; i++) {
        users[0].kidney[i].healthy = req.body.ishealthy;
    }
    res.json({
        msg:"Done"
    })

    app.delete('/' , function(req,res){
        const newkidney = [];
        for(let i=0;i<users[0].kidney.length;i++){
            if(users[0].kidney[i].healthy){
                newkidney.push(users[0].kidney[i]);
            }
        }
        res.json({msg : "Done"})
    })


})

app.listen(3000);

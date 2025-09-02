//This is to create a http server based on ur logic ..  demo how to run the server #node index_1.js
const express= require("express");

function Calculate_sum(n){
    let ans = 0;
    for(let i =0;i<n;i++){
        ans =ans+i;

    }
    return ans;
}

const app = express();
app.get('/', function(req,res){
    const n = req.query.n;
    const ans= Calculate_sum(n)
    res.send(ans.toString());
})

app.listen(3000);
//this is the port number 

const fs = require('fs');

function rohithfile(cb){
    fs.readFile('a.txt', 'utf-8', function(err, data) {
        cb(data);
    });
    } 

    function aDone(data){
        console.log(data);
    }

    rohithfile(aDone);
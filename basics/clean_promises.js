const fs = require('fs');

function rohithfile() {
    return new Promise(function(resolve, reject) {
        fs.readFile('a.txt', 'utf-8', function(err, data) {
            if (err) {
                reject(err); // Handle errors properly
            } else {
                resolve(data);
            }
        });
    });
}

function aDone(data) {
    console.log(data);
}

function aError(err) {
    console.error('Error reading file:', err);
}

// Call the function and handle the result
rohithfile().then(aDone).catch(aError);

// Using promises to handle asynchronous file reading in a cleaner way.
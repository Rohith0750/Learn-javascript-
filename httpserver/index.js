//const express = require('express');

const express = require('express')
const app = express()//create an instance of express
const port = 3000

app.get('/', function(req, res) {
  res.send('Hello World! This is my first Express server.This is rohith S D')
})

app.listen(port)
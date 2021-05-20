const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express(); // return instance of the app

// Setting up the cors config
app.use(cors());

app.get('/',function(req,res){
  res.send({'name' : 'Mariraja'})
})

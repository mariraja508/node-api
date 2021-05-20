var express = require('express');
var app = express();
const cors = require('cors')
app.use(cors)
app.get('/',function(req,res){
  res.send({name : 'Mariraja'});
})

app.listen(5000)

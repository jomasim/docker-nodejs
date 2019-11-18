var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors())

app.get('/', function(req, res){
    res.send({ Oranges:10, Mangoes:14, Tomatoes:20, Grapes:23 });
});

app.listen('8080', function(){
    console.log('Server is running on port 8080');
})
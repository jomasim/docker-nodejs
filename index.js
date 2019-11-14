var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello Docker Man!')
});

app.listen('8080', function(){
    console.log('Server is running');
})
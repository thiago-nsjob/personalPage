var express = require('express');
var app = express();

var port = process.env.PORT || 8080;


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/app/view'));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(port, function() {
    console.log('Example app listening on port 8080!');
});
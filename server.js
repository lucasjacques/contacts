var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

let port = 3500;
app.listen(port);
console.log('Server running on port ' + port);
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactList', function (req, res) {
	console.log('I received a GET request');
	db.contactlist.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});
app.post('/contactList',function (req, res) {
    console.log(req.body);
    db.contactlist.insert(req.body, function (err, doc) {
        res.json(doc);
    })
});

let port = 3500;
app.listen(port);
console.log('Server running on port ' + port);
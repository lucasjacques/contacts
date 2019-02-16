var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactList', function (req, res) {
	console.log('I received a GET request');
	db.contactlist.find(function (err, doc) {	
		console.log('Returned ' + doc.length + ' documents');
        res.json(doc);
    });
});

app.post('/contactList',function (req, res) {
    db.contactlist.insert(req.body, function (err, doc) {
        console.log(doc);
        res.json(doc);
    });
});

app.delete('/contactList/:id', function(req, res){
	var id = req.params.id;
	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

app.get('/contactList/:id', function (req, res) {
	let id = req.params.id;
	db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

app.put('/contactList/:id', function (req, res) {
	var id = req.params.id;
	console.log(req.body.name);
	db.contactlist.findAndModify({
		query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name,
			email: req.body.email, number: req.body.number}},
		new: true
	}, 
	function (err, doc) {
		res.json(doc);
	});
});

let port = 3500;
app.listen(port);
console.log('Server running on port ' + port);
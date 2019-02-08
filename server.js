var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/contactList', function (req, res) {
	console.log('I received a GET request');
	let person1 = {
    	name : 'Jacs',
    	email : 'email@test.com',
    	number : '1337' 
    },
  	person2 = {
    	name : 'Alice',
    	email : 'email@test.com',
    	number : '666' 
    },
    person3 = {
    	name : 'Bob',
    	email : 'email@test.com',
    	number : '11233123' 
    };

    let contactList = [person1, person2, person3];
    res.json(contactList);
})

let port = 3500;
app.listen(port);
console.log('Server running on port ' + port);
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/insurance');

var Insurance = mongoose.model('insur', mongoose.Schema({
	policy_no:String,
	name:String,
	period:String,
	customer_name:String,
	customer_address:String,
	customer_contact:String,
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/insurance', function(req, res){
	Insurance.find(function(err, insurances){
		if(err)
			res.send(err);
		res.json(insurances);
	});
});

app.get('/api/insurance/:id', function(req, res){
	Insurance.findOne({_id:req.params.id}, function(err, insurance){
		if(err)
			res.send(err);
		res.json(insurance);
	});
});

app.post('/api/insurance', function(req, res){
	Insurance.create( req.body, function(err, insurance){
		if(err)
			res.send(err);
		res.json(insurance);
	});
});

app.delete('/api/insurance/:id', function(req, res){
	Insurance.findOneAndRemove({_id:req.params.id}, function(err, insurance){
		if(err)
			res.send(err);
		res.json(insurance);
	});
});

app.put('/api/insurance/:id', function(req, res){
	var query = {
		policy_no:req.body.policy_no,
		name:req.body.name,
		period:req.body.period,
		customer_name:req.body.customer_name,
		customer_address:req.body.customer_address,
		customer_contact:req.body.customer_contact,
	};
	Insurance.findOneAndUpdate({_id:req.params.id}, query, function(err, insurance){
		if(err)
			res.send(err);
		res.json(insurance);
	});
});

app.listen(3001, function(){
	console.log('server is running on port 3001..');
});

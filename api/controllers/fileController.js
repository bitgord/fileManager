var mongoose = require('mongoose');

var FileSchema = mongoose.model('File');

exports.createFiles = function (req, res) {
	// var incomingFiles = req.body;
	console.log('req.body', req.body);
	var new_file = new FileSchema(req.body);
	new_file.save(function(err, savedFile){
		if(!err) {
			return res.json(savedFile);
		} else {
			console.log('error', err);
			return res.json({message: 'This error was returned : ' + err})
		}
	});
}

exports.getAllFiles = function (req, res) {
	FileSchema.find().exec(function(err, allFiles){
		if(!err) {
			return res.json(allFiles);
		} else {
			console.log('error', err);
			return res.json({message: 'This error was returned : ' + err})
		}
	});
}

exports.getSingleFile = function (req, res) {
	var id = req.params.fileId;
	FileSchema.findById(id).exec(function(err, file) {
		if(!err) {
			return res.json(file);
		} else {
			console.log('error', err);
			return res.json({message: 'This error was returned : ' + err})
		}
	});
}

exports.deleteSingleFile = function (req, res) {
	var id = req.params.fileId;
	FileSchema.remove({
		_id: id
	}).exec(function(err, file) {
		if(!err) {
			return res.json(file);
		} else {
			console.log('error', err);
			return res.json({message: 'This error was returned : ' + err})
		}
	});
}
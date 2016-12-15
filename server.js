var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var _ = require('lodash');
var ejs = require('ejs');
var routes = require('./api/routes/routes');
var models = require('./api/models/fileSchema');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/fileUploads');
mongoose.connection
	.once('open', () => console.log ('Good to go'))
	.on('error', (error) => {
		console.warn('Warning', error);
	});

app.engine('.html',ejs.__express);

app.set('views', __dirname + '/app'); 
app.set('view engine', 'html');

app.get('/', function (req,res) {
	res.render('index.html');
});

app.use(express.static(__dirname + '/app'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); 

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});


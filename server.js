var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var goodreads = require('goodreads');
var config = require('./config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();

var gr = new goodreads.client({ 
	'key': config.key,
	'secret': config.secret 
})

router.get('/showUser', function(req, res) {
    gr.showUser('braydenk', function(json) {
      res.json(json);   
    })
});

router.get('/getShelves', function(req, res) {
	gr.getShelves('62731027', function(json) {
		res.json(json);
	})
});

router.get('/search', function(req, res) {
	gr.searchBooks('stormlight', function(json) {
		res.json(json);
	})
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
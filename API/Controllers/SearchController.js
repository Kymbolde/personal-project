var goodreads = require('goodreads');
var config = require('../../config');
var searchService = require('../Services/SearchService');


module.exports.searchBooks = function(req, res) {
	var gr = new goodreads.client({ 
		'key': config.key,
		'secret': config.secret 
	});
    gr.searchBooks('stormlight', function(json) {
    	var data = searchService.getData(json)
		res.json(data);
	});  
}
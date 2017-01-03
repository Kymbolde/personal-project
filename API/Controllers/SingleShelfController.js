var goodreads = require('goodreads');
var config = require('../../config');
var singleShelfService = require('../Services/SingleShelfService');


module.exports.getSingleShelf = function(req, res) {
	var gr = new goodreads.client({
		'key': config.key,
		'secret': config.secret
	});
	// var shelfOptions = {
	// 	userID: '62731027',
 //        shelf: 'read',
 //        page: 1,
 //        per_page: 10
 //    }
 	var shelfOptions = req.body
	gr.getSingleShelf(shelfOptions, function(json) {
		var data = singleShelfService.getData(json)
		res.json(data);
	})
}
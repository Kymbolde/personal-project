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
 //        per_page: 20
 //    }
 	var shelfOptions = req.body
 	// console.log("this one shouldnt be broken", shelfOptions)
 	console.log(shelfOptions[req.params.index])
 	console.log(req.params.index)
	gr.getSingleShelf(shelfOptions[req.params.index], function(json) {
		// console.log("everything is here", shelfOptions, json, shelfOptions[req.params.index])
		var data = {
			shelfData: singleShelfService.getData(json),
			userData: req.user
		}
		res.json(data);
	})
}
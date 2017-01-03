var goodreads = require('goodreads');
var config = require('../../config');
var shelfService = require('../Services/ShelfService');


module.exports.getShelves = function(req, res) {
	var gr = new goodreads.client({ 
		'key': config.key,
		'secret': config.secret 
	});
	var username = req.params.user;
	gr.showUser(username, function(json) {
      	var userId = json.GoodreadsResponse.user[0].id[0]; 
        gr.getShelves(userId, function(json) {
        	//transform object
        	var data = shelfService.getData(json)
		  	res.json(data);
	    });  
    });

}
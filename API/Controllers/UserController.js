var goodreads = require('goodreads');
var config = require('../../config');
var userService = require('../Services/UserService');
var singleShelfService = require('../Services/SingleShelfService');


module.exports.showUser = function(req, res, next) {
	var gr = new goodreads.client({ 
		'key': config.key,
		'secret': config.secret 
	});
	var username = req.params.user;
	gr.showUser(username, function(json) {
      	var data = userService.getData(json)
      	var shelfOptions = {
      		"userID": json.GoodreadsResponse.user[0].id[0],
      		"shelf": json.GoodreadsResponse.user[0].user_shelves[0].user_shelf[0].name[0],
      		"page": 1, 
      		"per_page": 20
      	}
      	req.body = shelfOptions;
      	req.user = data;
			next()
    });

}



// 			{ read: {
//       		quantity: x,
//       		shelfid: x
//       	},
//   	   	to-read: {
//       		quantity: x,
//       		shelfid: x
//       	},
// 			reading: {
// 				quantity: x,
//       		shelfid: x
// 			}}
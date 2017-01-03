var goodreads = require('goodreads');
var config = require('../../config');
var userService = require('../Services/UserService');


module.exports.showUser = function(req, res) {
	var gr = new goodreads.client({ 
		'key': config.key,
		'secret': config.secret 
	});
	var username = req.params.user;
	gr.showUser(username, function(json) {
      	var data = userService.getData(json)
      	res.json(data); 
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
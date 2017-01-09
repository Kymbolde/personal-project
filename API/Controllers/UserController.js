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
            var shelfOptions = []
            // console.log(16, data)
            for (var i = 1; i < data.length; i++) {
                  // console.log("HEY LISTEN!!!", data[0])
                  shelfOptions[i - 1] = { 
            		"userID": data[0].id,
            		"shelf": data[i].shelfName,
            		"page": 1, 
            		"per_page": 50
                  }      
            }      
            // console.log("shelf options", shelfOptions)
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
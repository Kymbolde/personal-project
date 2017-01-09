


module.exports.getData = function(json) {
	var pathing = json.GoodreadsResponse.user
	var shelfPath = json.GoodreadsResponse.user[0].user_shelves[0].user_shelf
	
	//user specific info filter
	var userInfo = []
	var userItems = {}
		if (pathing[0].id[0]) userItems.id = pathing[0].id[0];
		if (pathing[0].name[0]) userItems.name = pathing[0].name[0];
		if (pathing[0].user_name[0]) userItems.user_name = pathing[0].user_name[0];
		if (pathing[0].small_image_url[0]) userItems.small_image_url = pathing[0].small_image_url[0];
		if (pathing[0].friends_count[0]._) userItems.friends_count = pathing[0].friends_count[0]._;
		if (pathing[0].reviews_count[0]._) userItems.reviews_count = pathing[0].reviews_count[0]._;
		userInfo.push(userItems)
	
	//shelf id filter for shelf retreival
	for (var i = 0; i < shelfPath.length; i++) {
		var userShelves = {}
			if (shelfPath[i].id[0]._) userShelves.shelfID = shelfPath[i].id[0]._;
			if (shelfPath[i].name[0]) userShelves.shelfName = shelfPath[i].name[0];
			if (shelfPath[i].book_count[0]._) userShelves.shelfBooks = shelfPath[i].book_count[0]._;
		userInfo.push(userShelves)
	}
	console.log('Getting ' + userInfo[0].name + "'s info")
	// console.log("service return", userInfo)
	return userInfo;

}
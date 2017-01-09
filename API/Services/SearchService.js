


module.exports.getData = function(json) {

	var pathing = json.GoodreadsResponse.search[0].results[0].work
	var books = []
	for (var i = 0; i < pathing.length; i++) {
		var bookInfo = {}
		if (pathing[i].id[0]) bookInfo.title = pathing[i].best_book[0].title[0];
		if (pathing[i].id[0]) bookInfo.author = pathing[i].best_book[0].author[0].name[0];
		if (pathing[i].id[0]) bookInfo.image_url = pathing[i].best_book[0].image_url[0];
		if (pathing[i].id[0]) bookInfo.publication_year = pathing[i].original_publication_year[0]._;
		if (pathing[i].id[0]) bookInfo.average_rating = pathing[i].average_rating[0];
		if (pathing[i].id[0]) bookInfo.ratings_count = pathing[i].ratings_count[0]._;
		books.push(bookInfo)
	}
	console.log("Searching")
	return books

}
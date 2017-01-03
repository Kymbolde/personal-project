


module.exports.getData = function(json) {
	var pathing = json.GoodreadsResponse.books[0].book
	var books = []
	for (var i = 0; i < pathing.length; i++) {
		var bookInfo = {}
		if (pathing[i].title[0]) bookInfo.title = pathing[i].title.pop();
		if (pathing[i].authors[0].author[0].name[0]) bookInfo.author = pathing[i].authors[0].author[0].name.pop();
		if (pathing[i].isbn[0]) bookInfo.isbn = pathing[i].isbn.pop();
		if (pathing[i].image_url[0]) bookInfo.image_url = pathing[i].image_url.pop();
		if (pathing[i].num_pages[0]) bookInfo.num_pages = pathing[i].num_pages.pop();
		if (pathing[i].publication_year[0]) bookInfo.publication_year = pathing[i].publication_year.pop();
		if (pathing[i].average_rating[0]) bookInfo.average_rating = pathing[i].average_rating.pop();
		if (pathing[i].ratings_count[0]) bookInfo.ratings_count = pathing[i].ratings_count.pop();
		if (pathing[i].description[0]) bookInfo.description = pathing[i].description.pop();
		books.push(bookInfo)
	}
	// console.log(books)
	return books
}
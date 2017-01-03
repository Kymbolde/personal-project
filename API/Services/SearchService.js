


module.exports.getData = function(json) {
	var books = json.GoodreadsResponse.search[0].results[0].work[0].best_book[0].title;
	console.log(books)
	return books;

}
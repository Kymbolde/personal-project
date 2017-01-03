


module.exports.getData = function(json) {
	var shelfNumbers = [
		json.GoodreadsResponse.shelves[0].user_shelf[0].id[0]._, 
		json.GoodreadsResponse.shelves[0].user_shelf[1].id[0]._,
		json.GoodreadsResponse.shelves[0].user_shelf[2].id[0]._
	]
	console.log(shelfNumbers)
	return shelfNumbers;

}
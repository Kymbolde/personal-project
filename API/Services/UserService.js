


module.exports.getData = function(json) {
	var userInfo = json.GoodreadsResponse.user;
	console.log('Getting ' + userInfo[0].name + "'s info")
	return userInfo;

}
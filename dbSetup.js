var app = require('./server');
var db = app.get('db');


module.exports = {
	run: function() {
		console.log('Initializing database');

		db.table_initializer(function(err, table) {
			if (err) return console.log('Some tables failed to create');
			else console.log('Tables successfully initalized');
		});
	}
};
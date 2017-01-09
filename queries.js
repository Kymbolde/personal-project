var app = require('./server');
var db = app.get('db');

module.exports = {
	getAllFavorites: function(req, res, next) {
		console.log('Get All Working');
		db.run('select * from favorites', function(err, favorites) {
			if (err) {
				console.log(err);
				return res.status(500).send(err);
			}

			return res.status(200).send(favorites);
		})
	},

	getSingleFavorite: function(req, res, next) {
		console.log('Get One Working');
		db.run('select * from favorites where id = $1', [req.params.id], function(err, favorites) {
			if (err) {
				console.log(err);
				return res.status(500).send(err);
			}

			return res.status(200).send(favorites);
		})
	},

	createFavorite: function(req, res, next) {
		console.log('Create Working');
		db.run("insert into favorites (isbn, title, author, image_url, average_rating, rating_count) values ($1, $2, $3, $4, $5, $6)",
		 [req.body.isbn, req.body.title, req.body.author, req.body.image_url, req.body.average_rating, req.body.ratings_count],
		  function(err, favorites) {
			if (err) {
				console.log(err);
				return res.status(500).send(err);
			}

			return res.status(200).send(favorites);
		})
	},

	updateFavorite: function(req, res, next) {
		console.log('Update Working');
		db.run('update favorites set title = $1 where isbn = $2', [req.body.title, req.body.isbn], function(err, favorites) {
			if (err) {
				console.log(err);
				return res.status(500).send(err);
			}

			return res.status(200).send(favorites);
		})
	},

	removeFavorite: function(req, res, next) {
		console.log('Remove Working');
		db.run('delete from favorites where isbn = $1', [req.params.isbn], function(err, favorites) {
			if (err) {
				console.log(err);
				return res.status(500).send(err);
			}

			return res.status(200).send(favorites);
		})
	}
}
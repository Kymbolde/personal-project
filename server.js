var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var goodreads = require('goodreads');
var massive = require('massive');
var config = require('./config')
var shelfController = require('./API/Controllers/ShelfController');
var userController = require('./API/Controllers/UserController');
var singleShelfController = require('./API/Controllers/SingleShelfController');
var searchController = require('./API/Controllers/SearchController');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname))

var massiveUri = config.massiveUri;
var massiveServer = massive.connectSync({
	connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');

var dbSetup = require('./dbSetup');
dbSetup.run();

var queries = require('./queries.js');


var port = process.env.PORT || 3000;

//API endpoints
app.get('/api/showUser/:user/:index', userController.showUser, singleShelfController.getSingleShelf);
app.post('/api/getShelf', singleShelfController.getSingleShelf);
app.get('/api/getShelves/:user', shelfController.getShelves);
app.get('/api/search/:keyword', searchController.searchBooks);

//Database endpoints
app.get('/api/favorites', queries.getAllFavorites);
app.get('/api/favorites/:id', queries.getSingleFavorite);
app.post('/api/favorites', queries.createFavorite);
app.put('/api/favorites/:id', queries.updateFavorite);
app.delete('/api/favorites/:id', queries.removeFavorite);

app.listen(port);
console.log('Magic happens on port ' + port);

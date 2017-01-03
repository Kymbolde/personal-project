var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var goodreads = require('goodreads');
var config = require('./config')
var shelfController = require('./API/Controllers/ShelfController');
var userController = require('./API/Controllers/UserController');
var singleShelfController = require('./API/Controllers/SingleShelfController');
var searchController = require('./API/Controllers/SearchController');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname))

var port = process.env.PORT || 3000;

var router = express.Router();


router.get('/showUser/:user', userController.showUser, singleShelfController.getSingleShelf);

router.post('/getShelf', singleShelfController.getSingleShelf);

router.get('/getShelves/:user', shelfController.getShelves);

router.get('/search/:keyword', searchController.searchBooks);


app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
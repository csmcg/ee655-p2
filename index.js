const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const inventory = require('./inventory.js');
const db = require('./db-service.js');
const pug = require('pug');

const port = 3000;
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/products', async (req, res) => {
	let result = await inventory.getAllProducts(req, res);
	res.render('all_products', {title: "All Products",
		products: result});
});

app.get('/products/:id', async (req, res) => {
	let result = await inventory.getProductByID(req, res);
	var resultStatus;
		if (!!result) {
			resultStatus = "Product Found";
		} else {
			resultStatus = "Product Doesn't Exist";
		}
	res.render('action_response', {title: resultStatus,
		products: result});
});

app.get('/delete/:id', async (req, res) => {
	let result = await inventory.deleteProductByID(req, res);
	var resultStatus;
	if (!!result) {
		resultStatus = "Product Deleted";
	} else {
		resultStatus = "Product Doesn't Exist";
	}
	res.render('action_response', {title: resultStatus,
		products: result});
});

app.get('/delete', async (req, res) => {
	let result = await inventory.deleteAllProducts(req, res);
	var resultStatus = "Deleted all products";
	res.render('action_response', {title: resultStatus,
		products: result});
});

app.post('/add_product/', async (req, res) => {
	let result = await inventory.addProduct(req, res);
	var resultStatus = "Added product";
	res.render('action_response', {title: resultStatus,
		products: result});
});

app.post('/update_product/', async (req, res) => {
	let result = await inventory.updateProduct(req, res);
	let resultStatus;
	if (!!result) resultStatus = "Updated Product";
	else resultStatus = "Product does not previously exist"

	res.render('action_response', {title: resultStatus,
		products: result});
});

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
	db.connectMongoose();	
});

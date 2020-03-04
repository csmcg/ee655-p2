const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const inventory = require('./inventory.js');
const db = require('./db-service.js');

const port = 3000;
app.use(bodyParser.json);

app.get('/', (req, res) => {
	console.log('received get');
	res.sendFile(__dirname + '/index.html');
});

app.get('/products', (req, res) => {
	console.log('test')
	inventory.getAll(req, res);
});

app.get('/products/:id', (req, res) => {
	inventory.getProductByID(req, res);
});

app.get('/delete/:id', (req, res) => {
	inventory.deleteProductByID(req, res);
});

app.get('/delete', (req, res) => {
	inventory.deleteAllProducts(req, res);
});

app.post('/add_product/:id', (req, res) => {
	inventory.addProduct(req, res);
});

app.post('/update_product/:id', (req, res) => {
	inventory.updateProduct(req, res);
});

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
	db.connectMongoose();	
});

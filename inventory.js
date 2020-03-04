const db = require('./db-service.js');

const getAllProducts = async (req, res) => {
	try {
		let products = await db.getAll();
		return products;
	} catch (e) {
		res.status(500).send(e);	
	};
};

const getProductByID = async (req, res) => {
	try {
		let product = await db.getByID(req.params.id);
		return product;
	} catch (e) {
		res.status(500).send(e);
	};
};

const deleteAllProducts = async (req, res) => {
	try {
		return await db.removeAll();
	} catch (e) {
		res.status(500).send(e);
	}
};

const deleteProductByID = async (req, res) => {
	try {
		let product = await db.remove(req.params.id);
		return product;
	} catch (e) {
		res.status(500).send(e)
	};
};

const addProduct = async (req, res) => {
	try {
		let payload = {};
		payload.id = req.body.id;
		payload.name = req.body.name;
		payload.quantity = req.body.quantity;
		payload.price = req.body.price;
		await db.add(payload);
		return payload;
	} catch (e) {
		res.status(500).send(e)
	}
};

const updateProduct = async (req, res) => {
	let payload = {};
	payload.id = req.body.id;
	if (!!req.body.name) payload.name = req.body.name;
	if (!!req.body.quantity) payload.quantity = req.body.quantity;
	if (!!req.body.price) payload.price = req.body.price;
	let result = await db.update(payload);
	return result;
};

module.exports = {
	getAllProducts,
	getProductByID,
	deleteAllProducts,
	deleteProductByID,
	addProduct,
	updateProduct
};

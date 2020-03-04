const db = require('./db-service.js');

const getAllProducts = async (req, res) => {
	try {
		let products = await db.getAll();
		res.send({products});

	} catch (e) {
		res.status(500).send(e);	
	};
};

const getProductByID = async (req, res) => {
};

const deleteAllProducts = async (req, res) => {
};

const deleteProductByID = async (req, res) => {
};

const addProduct = async (req, res) => {
};

const updateProduct = async (req, res) => {
};

module.exports = {
	getAllProducts,
	getProductByID,
	deleteAllProducts,
	deleteProductByID,
	addProduct,
	updateProduct
};

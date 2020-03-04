const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017';
const dbName = 'ee655-p2';
const collectionName = 'inventory';
const dbHostname = url + '/' + dbName;
const Product = require('./ProductSchema.js');
const _ = require('lodash');

const connectMongoose = () => {
	mongoose.connect(dbHostname, {useNewUrlParser: true});
	const db = mongoose.connection;
	db.on('error', () => console.log('error connecting to db'));
	db.once('open', () => console.log('Connected to MongoDB @ ' + dbHostname));
};

const getAll = async () => {
	let allProducts = await Product.find({}).sort({id: 1});
	return allProducts;
};

const getByID = async (q) => {
	let product = await Product.findOne({id: q});
	return product;
};

const add = async (p) => {
	let product = new Product(p);
	await product.save();
	
};

const update = async (p) => {
	const updated = _.assign(p);	
	let product = await Product.findOneAndUpdate({id: p.id}, updated, {new: true});
	return product;
};

const remove = async (q) => {
	let result = await Product.findOneAndDelete({id: q}).sort({id: 1});
	return result;	
};

const removeAll = async () => {
	await Product.deleteMany({});
};

module.exports = {connectMongoose, getByID, getAll,
	add, update, remove, removeAll};

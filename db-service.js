const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017';
const dbName = 'ee655-p2';
const collectionName = 'inventory';
const dbHostname = url + '/' + dbName;
const Product = require('./ProductSchema.js');

const connectMongoose = () => {
	mongoose.connect(dbHostname, {useNewUrlParser: true});
	const db = mongoose.connection;
	db.on('error', () => console.log('error connecting to db'));
	db.once('open', () => console.log('Connected to MongoDB @ ' + dbHostname));
};

const getAll = async () => {
	let results = await Product.find({});
	return results;
};

const getByID = async () => {
};

const add = () => {
};

const update = () => {
};

const remove = () => {
}

module.exports = {connectMongoose, getByID, getAll,
	add, update, remove};

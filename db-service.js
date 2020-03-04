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

/*const get = async () => {
	return await Product.find({}).exec();
};*/

const add = () => {
};

const update = () => {
};

const remove = () => {
}

module.exports = {connectMongoose, //get, 
	add, update, remove};

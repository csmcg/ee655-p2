const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	id: Number,
	name: String,
	quantity: Number,
	price: Number
},
{collection: 'inventory'}
);

module.exports = mongoose.model('Product', ProductSchema);

const mongoose = require('mongoose');


// Define a schema
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	description:  String,
	unit_cost: Number,
	quantity: Number,
	discount: Number,
	invoice_id: {
		type: Schema.Types.ObjectId,
		ref: 'Invoice'
	}
});

module.exports = mongoose.model('Item', ItemSchema);
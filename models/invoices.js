const mongoose = require('mongoose');


// Define a schema
const Schema = mongoose.Schema;

let InvoiceSchema = new Schema({
	notes:  String,
	status: String,
	client_id: {
		type: Schema.Types.ObjectId,
		ref: 'Client'
	},
	items: [
		{
			item: { 
				type: Schema.Types.ObjectId,
				ref: 'Item'
			},
			description: String,
		}
	],
	terms: String,
	updated_date: { type: Date, default: Date.now },
});

Schema.methods.total = function() {
	this.total = 0;
}

Schema.methods.addClient = function(client_id) {
	this.client_id = client_id;
	return this.save();
}

Schema.methods.findById() {
	return;
}

module.exports = mongoose.model('Invoice', InvoiceSchema);
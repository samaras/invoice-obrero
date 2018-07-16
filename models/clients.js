const mongoose = require('mongoose');


// Define a schema
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
	name:  String,
	email: String,
	address: String,
	company_id: {
		type: Schema.Types.ObjectId,
		ref: 'Company'
	},
	company_name: String,
	updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Client', UserSchema);
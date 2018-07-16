const mongoose = require('mongoose');


// Define a schema
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
	name:  String,
	address: String,
	updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Company', CompanySchema);
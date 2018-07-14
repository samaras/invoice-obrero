const mongoose = require('mongoose');


// Define a schema
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
	name:  String,
	address: String,
});

module.exports = mongoose.model('Company', CompanySchema);
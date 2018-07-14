const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
const saltRounds = 10;


// Define a schema
const Schema = mongoose.Schema;

let UserSchema = new Schema({
	name: String,
	email: String,
	password: String,
	company_id: {
		type: Schema.Types.ObjectId,
		ref: 'Company'
	}
});

module.exports = mongoose.model('User', UserSchema);
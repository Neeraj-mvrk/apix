var dbConfig = require('../config/db');

var loginSchema = new dbConfig.Schema({


	// User_Name:String,
	// Password:String
	 First_Name: String,
  Last_Name: String,
  Contact_No:{ 
				type:String
			}, 
  E_Mail: { 
				type:String
			},
  Password:String
});
module.exports = dbConfig.mongoose.model('User',loginSchema);

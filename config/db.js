		var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost:27017/Login",function(err,db){
	if (err) throw err;
		console.log("connection Establish");
	
});
module.exports={
	Schema:Schema,
	mongoose:mongoose
};

	

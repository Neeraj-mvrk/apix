var User = require('../models/model')
exports.LoginData=function(body,callback){
//console.log("body=",body)
	var query = {E_Mail:body.E_Mail};
	User.findOne(query,function(err,data){
		if(err) {
			return callback( new err('Error'));
		}

		// console.log('data',data);
		if(data.Password == body.Password){

			console.log("Logged In")
           return callback(null,data);
		}
	
	});
	};
exports.addname=function(data,callback){
	var Rdata= new User(data);
	Rdata.save(function(err){
		if(err)return callback(new Error('error on saving'));
		return callback(null,'successful');
   });
}
exports.records=function(Error,callback){
	if (Error)
		return callback(new Error('error'));

	User.find({},function(err,data){
		if (err)return callback(new Error('docs get error'));
		return callback(null,data);
	});
};

exports.session = function(session,cb){
 var query ={_id:session._id};
 console.log('query=',query)
 User.findOne(query,function(err,data){
 	if (err) return cb(Error('Error'));
 	// if(!data){
 	// 	return cb(Error('No User Found'));
 	// }else{
 		console.log("user data=",data)
 		var uData = {user:data}
 	 cb(null,uData);
 	// }

 	});
};

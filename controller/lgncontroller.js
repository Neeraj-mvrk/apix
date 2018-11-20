var LgnService = require('../service/lgnservice');

exports.LoginData=function(req,res){
	// sess=req.session;
	console.log(req.body);
	LgnService.LoginData(req.body,function(err,data){
		if(err) throw (err);

		req.session.data = data;
		req.session.save();
		console.log('cookie=',req.session.data);
		//console.log("Ctrl=",data)
		res.send('Sucessfully login');

	});
	};



exports.addname = function(req,res){
	LgnService.addname(req.body,function(err){
		if(err)res.staus(404).json(err);
		res.send("saved sucessfully");



	});
};

exports.records = function(req,res){
	LgnService.records(req.User,function(err,docs){
		if(err)res.send("data not found");
		res.json(docs);
	});
};

exports.session = function(req, res) {
	var options = {};
	if(req.session.data){
		options = req.session.data;

	}else{
		return res.send(Error("session not found"));
	}
	console.log('option=',options)
	LgnService.session(options,function(err,data){
		if (err) return res.send("session not found");
		res.json(data);
	});
};

exports.logout = function(req,res){
var session_id = req.SessionID;
	req.session.destroy();

			res.clearCookie('id');
			res.send("User Logged out Successfully.");


}

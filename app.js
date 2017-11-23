var express = require('express');
var morgan = require('morgan');
var app = express();
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var port = 4000;
var path = require('path');
var bodyParser=require('body-parser');
var cookieParser = require('cookie-parser');
app.use(morgan('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));

var mongo = require('./config/db.js');

debugger;
app.use(session({
  secret: 'work hard',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongo.mongoose.connection,
    maxAge:  24*60*60*1000,   //Session exists for 24 hours
  }),
  cookie: {
        // domain: '.spicegst.in',
        path: "/",
        maxAge:24*60*60*1000
        //httpOnly: emitraAppConfig.httpOnly
        //secure: emitraAppConfig.secure
  }
}));
routes = require('./route/lgnroute');
routes(app);

app.all('*',function(req,res){
  res.sendfile('public/index.html');
});
var server = app.listen(4000);


var io = require('socket.io').listen(server);


/*app.get('/mypage', function(req, res) {
   res.sendfile('./public/FirstPage');
});*/


 var nsp = io.of('/chat'); 

var user = [];
/*function deleteFromArray(user, element) {
  position = user.indexOf(element);
  user.splice(position, 1);
}*/
nsp.on('connection', function (socket) {
	if(typeof socket.handshake.name!='undefined'){
		user = {
			name:socket.query.First_Name,
			id:socket.query.id,
			email:socket.query.E_mail
		}
	}
  socket.on('username',function(userName){

  console.log('SocketId=', socket.id)
  user.push({
      id:socket.id,
      userName:userName
   });
  var len = user.length;
  len--;
  nsp.emit('userList',user,user[len].id);
});
   socket.on('getMsg', function(data){
          socket.broadcast.to(data.toid).emit('sendMsg',{
            msg:data.msg,
            name:data.name
          });
        });
   socket.on('disconnect',function(){
          
            for(let i=0; i < user.length; i++){
              
              if(user[i].id === socket.id){
                  user.splice(i,1); 
              }
            }
            nsp.emit('exit',user); 
            console.log('user disconnected');
        });

console.log('A user connected');

/*nsp.to(user[0]).emit("greeting", "Howdy, User 1!");
   nsp.to(user[1]).emit("greeting", "Hey there, User 2!");
    nsp.to(user[2]).emit("greeting", "Hey there, User 3!");

    setTimeout(function(){
      nsp.to(user[0]).emit("complete","mongo process done");
       nsp.to(user[1]).emit("complete","mongo process done");
        nsp.to(user[2]).emit("complete","mongo process done");
     },4000);*/
    
   /* socket.on('message', function(data) {
      console.log('message ='+data);
      nsp.emit("message",data);
 
   });

  socket.on('disconnect', function () {
      console.log('A user disconnected');
      deleteFromArray(clients, socket.id)
   }); */ 
});
 /*console.log('client=', clients)*/
console.log('Listening to port'+ port);

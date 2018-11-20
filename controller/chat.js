var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var app = express();
var http = require('http');
var Chat = require('../models/Chat.js');
// // socket io
// io.on('connection', function (socket) {
//   console.log('User connected');
//   socket.on('disconnect', function() {
//     console.log('User disconnected');
//   });
//   socket.on('save-message', function (data) {
//     console.log(data);
//     io.emit('new-message', { message: data });
//   });
// });
//
// /* GET ALL CHATS */
// router.get('/:room', function(req, res, next) {
//   Chat.find({ room: req.params.room }, function (err, chats) {
//     if (err) return next(err);
//     res.json(chats);
//   });
// });
//
// /* SAVE CHAT */
// router.post('/', function(req, res, next) {
//   Chat.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
var io = require('socket.io')(http);


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
	/*if(typeof socket.handshake.name!='undefined'){
		user = {
			name:socket.handshake.query.First_Name,
			id:socket.handshake.query.id,
			email:socket.handshake.query.E_mail
		}
		}*/

  socket.on('username',function(userName){

  //console.log('SocketId=', socket.id)
  user.push({
      id:socket.id,
      userName:userName
   });
  var len = user.length;
  len--;
  nsp.emit('userList',user,user[len].id);
  console.log("userList=",user)
});
   socket.on('getMsg', function(data){
          socket.broadcast.to(data.toid).emit('sendMsg',{
            msg:data.msg,
            name:data.name
          });
        });
   socket.on('disconnect',function(){

            for(let i=0; i <= user.length; i++){

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
module.exports = router;

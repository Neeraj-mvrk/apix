myapp.controller('ChatCtrl',['$rootScope','$scope','socket',function($rootScope,$scope,socket){
  $scope.socketId = null;
  $scope.selectedUser = null;
  $scope.messages = [];
  $scope.msgData = null;
  $scope.userList = [];


 $scope.username = $rootScope.userName;

 console.log("username = "+$scope.username)
/* if(){
    $scope.username = window.prompt('Enter Your Name');
    if ($scope.username === '') {
      window.location.reload();
    }    nsp.emit('exit',user);    nsp.emit('exit',user);
          for(let i=0; i <= user.length; i++){

              if(user[i].id === socket.id){
                user.splice(i,1);
              }
            }
          for(let i=0; i <= user.length; i++){

              if(user[i].id === socket.id){
                user.splice(i,1);
              }
            }
 }
 */


  $scope.seletedUser = function(selectedUser)  {
    selectedUser.id === $scope.socketId ? alert("Can't message to yourself.") : $scope.selectedUser = selectedUser;
      console.log(selectedUser);
  };



  $scope.sendMsg = function ($event) {

    var keyCode = $event.which || $event.keyCode;

      if (keyCode === 13 && $scope.message !== null) {
           socket.emit('getMsg',{
            toid : $scope.selectedUser.id,
          msg : $scope.message,
          name : $scope.username

          });
          $scope.message = null;
        }

 };


  socket.emit('username',$scope.username);

  socket.on('userList', function(userList,socketId)  {
      if($scope.socketId === null){
          $scope.socketId = socketId;
      }

      $scope.userList = userList;
  });


  socket.on('exit',function (selectedUser)  {
    $scope.selectedUser = selectedUser;
  });

  socket.on('sendMsg', function(data)  {
    $scope.messages.push(data);
  });


}]);

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
    }
 }
 */
 
 
  $scope.seletedUser = function(selectedUser)  {
    selectedUser === $scope.socketId ? alert("Can't message to yourself.") : $scope.selectedUser = selectedUser;
      console.log(selectedUser);
  };

 
 
  $scope.sendMsg = function ($event) {

    var keyCode = $event.which || $event.keyCode; 
 
      if (keyCode === 13 && $scope.message !== null) { 
           socket.emit('getMsg',{
            toid : $scope.selectedUser,
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
 
 
  socket.on('exit',function (userList)  {
    $scope.userList = userList;
  });
 
  socket.on('sendMsg', function(data)  {
    $scope.messages.push(data);
  });

  
}]);


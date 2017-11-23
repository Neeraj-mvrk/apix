myapp.controller('MypageController', ['$scope','socket','$location', function($scope,socket,$location) { 
/*$scope.sendMessage = function(){
var message = $scope.chat;
alert(data);
    socket.emit('message',message);
    $scope.chat='';
  }


  socket.on('greeting', function(data) {
            document.getElementById("content").textContent = data; 
    });
socket.on('complete',function(data){
   document.getElementById("mg_db").textContent = data; 
    });
socket.on('message',function(data){
 alert(data)
  document.getElementById('msg_cnt').textContent=data;
});*/
 

        
    


$scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
   $scope.products = [{ 
    name: 'The Book of Trees', 
    price: 19,
    pubdate: new Date('2014', '03', '08'),
    cover:'images/darktime.jpg', 
    likes:0,
    dislikes:0
  },
     { 
    name: 'Deep beneath the cover', 
    price: 8, 
    pubdate: new Date('2017', '08', '01'), 
    cover: 'images/time.jpg', 
    likes:0,
    dislikes:0
  },
  {
    name: 'Another Perfect Wonder', 
    price: 8, 
    pubdate: new Date('2015', '08', '01'), 
    cover: 'images/lam.jpg',
    likes:0,
    dislikes:0
  },
  {
   name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'images/time1.jpg',
    likes:0,
    dislikes:0
  }] 
  $scope.plusOne=function(index){
    $scope.products[index].likes+=1;
  };
 $scope.minusOne=function(index){
    $scope.products[index].dislikes+=1;
  };

}]);
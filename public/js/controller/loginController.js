myapp.controller("logincontroller",['socket','$scope','$http','$location', function(socket,$scope,$http,$location){

$scope.submit = function(loginform){
    $scope.data={
    E_Mail : $scope.E_Mail,
    Password : $scope.Password
  };
 
  $http.post('/UserLogin',$scope.data).then(function success(resp){
  	console.log(resp)
  $scope.data=resp.data;
 alert(JSON.stringify(resp.data))
 
   $location.path("/mypage");
  	
  });
}

$scope.reset=function(){
	$scope.User_Name= '',
	$scope.Password= ''
};
}]);








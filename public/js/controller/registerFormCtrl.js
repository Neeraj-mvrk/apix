myapp.controller('RegisterCtrl',function($scope,$http,$location){
	 
	 $scope.submit = function(register) {
	 	$scope.data={
	 	First_Name : $scope.First_Name,
	 	Last_Name : $scope.Last_Name,
	 	E_Mail : $scope.E_Mail,
	 	Contact_No : $scope.Contact_No,
	 	 Password : $scope. Password
	 };

    
     
        $http.post('/user',$scope.data).then(function success(result){
        	console.log(result);
	 	$scope.data = result.data;
	 	
	 	alert(JSON.stringify(result.data));
	 	$location.path('/');

	 },function error(err){
	 	$scope.error = err;
	 });
     }
     $scope.reset = function(){
	    $scope.First_Name ='',
	    $scope.Last_Name ='',
	 	$scope.E_Mail ='',
	 	$scope.Contact_No  ='',
	 	$scope. Password =''
     	};
     });

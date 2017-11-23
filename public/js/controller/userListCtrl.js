myapp.controller('UserCtrl',function($http,$scope){
	   $scope.msg = "UserList";
	$http.get('/user').then(function success(resp){
		$scope.data = resp.data;
	},function error(err){
	$scope.error = err;
	})
});		
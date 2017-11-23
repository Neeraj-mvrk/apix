myapp.controller("Sessionctrl",['$rootScope','$http','$scope','$location','$cookies',function($rootScope,$http,$scope,$location,$cookies){
	$http.get('/Session').then(function success (result){
		/*console.log(result);*/
		$rootScope.userName = result.data.user.First_Name;
		/*console.log("DATA FROM SESSion"+JSON.stringify(result.data))*/
		// console.log("DATA FROM SESSion"+JSON.stringify($scope.data.First_Name))
		console.log("DATA FROM SESSion = "+$rootScope.userName)
		if(!Object.keys(result.data).length){
			console.log('User  not loggedin')
			$location.path('/');
		}		/*else {
			$location.path('/mypage');
		}
		*/
	// $rootScope.userName = result.data.First_Name;

	}, function errorCallback(err){
		console.log("err=",err)
	});
	$scope.logout = function(){
	$http.post('/Logout').then(function success(resp){
		console.log(resp);
		 $scope.data=resp.data;
 alert(resp.data)
      /*$cookies.remove("connect.sid");*/
		$location.path('/');
	});
}
}])
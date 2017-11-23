myapp.config(["$routeProvider","$locationProvider","$rootScopeProvider",function($routeProvider,$locationProvider,$rootScopeProvider){
	
	$routeProvider.when("/",{
		templateUrl:"home.html",
		controller:"logincontroller"
	})
	.when("/mypage",{
		templateUrl:"FirstPage.html",
		controller:"MypageController"
	})
	.when("/chat",{
		templateUrl:"customD.html",
		controller:"ChatCtrl"
	})
	.when("/signup",{
		templateUrl:"registration.html",
		controller:"RegisterCtrl"

	})
	.when("/getUser",{
		templateUrl:"UserList.html",
		controller:"UserCtrl"
	})
	.otherwise({
		redirectTo:"/"
	})
	$locationProvider.html5Mode({
		enable:true
		// requireBase:false
	})
}])


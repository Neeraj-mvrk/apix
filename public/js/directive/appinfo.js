myapp.directive('appinfo',function(){
	
	return{
		restrict:'E',
		scope:{
			info:'='
		},
		templateUrl:'./js/directive/appinfo.html'
		
	};
});
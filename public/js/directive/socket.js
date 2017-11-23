myapp.factory('socket',['$rootScope',function($rootScope) {
	
	
 var socket = io.connect('/chat');
 if(typeof io != "undefined"){
  var visitor = io.connect('/chat' , {
        'query': $.param({token: '<?=Session::$instance->session['id']?>'}) + '&name=<?=Session::get("username")?>&id=<?=Session::get("ID")?>&email=<?=Sesion::get("Email")?>'
  });
}
    return {
        on: function (eventName, callback) {
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    };
}]);
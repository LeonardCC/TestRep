app.controller('TodoCtrl', ['$scope', function($scope) { 
	$scope.todolists = [];
	$scope.HelloWorld = "Hello World!"

	$scope.addTodoList = function (){
		$scope.todolists.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';
	};
}]);
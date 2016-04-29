app.controller('TodoCtrl', ['$scope', function($scope) { 
	$scope.todolists = [];
	$scope.HelloWorld = "Hello World!"

	$scope.addTodoList = function (){
		if ($scope.formTodoText != undefined && $scope.formTodoText != '')
		{
		$scope.todolists.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';
		}
		else
		{
			alert('List name cannot be empty.')
		}
	};

	$scope.removeCompleted = function () {
		$scope.todolists = _.filter($scope.todolists, function(todolist){
			return !todolist.done;
		});
	};
}]);
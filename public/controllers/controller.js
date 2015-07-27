var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl',['$scope', '$http', 
	function($scope, $http){

		console.log("Hola Mundo desde el controlador");
	var refresh = function(){
		$http.get('/contactlist').success(function(response){
			console.log("I got the date i requested");
			$scope.contactlist = response;
			$scope.contact = "";
		});
		};
		refresh();

		$scope.addContact = function(){
			console.log($scope.contact);
			$http.post('/contactlist', $scope.contact).success(function(response){
				console.log(response);
				refresh();
			});
		};

		$scope.remove = function(id){
			console.log(id);
			$http.delete('/contactlist/' + id).success(function(response){
				refresh();
			});
		};	
		
	}]);
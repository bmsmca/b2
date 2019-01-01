myApp.controller('insurController', function($scope,$route,$routeParams,$http){

	$scope.getinsurance = function(){
		$http.get('/api/insurance/').then(function(response){
			$scope.insurance = response.data;
		});
	};

	$scope.showinsurance = function(){
		var id = $routeParams.id;
		$http.get('/api/insurance/'+ id).then(function(response){
			$scope.insurance = response.data;
		});
	};

	$scope.addinsurance = function(){
		$http.post('/api/insurance/', $scope.insurance).then(function(response){
			window.location.href = '/';
		});
	};

	$scope.updateinsurance = function(){
		var id = $routeParams.id;
		$http.put('/api/insurance/'+ id , $scope.insurance).then(function(response){
			window.location.href = '/';
		});
	};
	
	$scope.deleteinsurance = function(id){
		var id = id;
		$http.delete('/api/insurance/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});

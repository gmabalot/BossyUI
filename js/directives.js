angular.module('app.directives', [])

	.directive('jaPaginator', function(){
		return {
			restrict: 'AEC',
			controller: "paginator"
		}
	})

	.directive('bossySvg', function($state, $rootScope, $http){
    return {
      templateUrl: function(elem, attr){
        return attr.src;
      }
    }
  });
angular.module('app.directives', [])

	.directive('jaPaginator', function(){
		return {
			restrict: 'AEC',
			controller: "paginator"
		}
	})

	.directive('bossySvg', function(){
		return {
			restrict: 'AEC',
			templateUrl: function(elem, attr) {
				return attr.src;
			}
		}
	});
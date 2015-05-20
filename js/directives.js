angular.module('app.directives', [])

	.directive('jaPaginator', function(){
		return {
			restrict: 'E',
			controller: "paginator"
		}
	});
var app = angular.module( 'app', [
	'ngRoute',
	'ui.router',
	'app.controllers',
	'app.filters',
	'app.directives',
	'angularUtils.directives.dirPagination'
	], function($interpolateProvider) {
	  $interpolateProvider.startSymbol('[[');
	  $interpolateProvider.endSymbol(']]');
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	// route to show our basic form (/form)
	.state('page',{
		url: '/{path}{p}',
		controller: 'homeCtrl',
		templateUrl: function ($stateParams){
			if($stateParams.path) {
				return $stateParams.path;
			} else {
				return base+'/home/index.html'
			}
  	}
	})
	$urlRouterProvider.otherwise('/');
});
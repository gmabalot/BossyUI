angular.module('demoApp', [
    'ui.router',
    'demoApp.controllers',
    'bossy'
])

    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: '/',
                template: '<h1>TEST</h1>',
                //templateUrl: '../../templates/home.html',
                controller: 'HomeCtrl'
            })
            .state('demos', {
                abstract: true,
                url: '/demos',
                template: '<ui-view></ui-view>'
            })
            .state('demos.matrix', {
                url: '/matrix',
                template: '<h1>TEST</h1>',
                //templateUrl: '../../templates/demos.matrix.html',
                controller: 'MatrixCtrl'
            });

        $urlRouterProvider.otherwise('/BossyUI/');
    })

    .run(['$location', function($location) { 
        
        console.log($location);
        
    }])

;

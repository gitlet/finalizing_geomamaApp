/**
 * Created by zoodoo92 on 16/06/16.
 */
// alert('Hi');
angular
    .module('gts', [
        'ui.router'
])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('map', {
                url: '/',
                templateUrl: 'templates/index.html'
            });
    }])
var cinderellaApp = angular.module('cinderellaApp', ['ngRoute', 'cinderellaControllers']);

cinderellaApp.config(function($routeProvider) {
  $routeProvider
    .when('/tests', {
      templateUrl: 'partials/test-list.html',
      controller: 'TestListCtrl'
    })
    .when('/tests/:testId', {
      templateUrl: 'partials/test-detail.html',
      controller: 'TestDetailCtrl'
    })
    .otherwise({
      redirectTo: '/tests'
    });
  });
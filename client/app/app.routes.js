'use strict';

angular.module('VideoPortal')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'HomeController',
        templateUrl: 'app/components/home/home.view.html'
      })
      .when('/login', {
        controller: 'AuthController',
        templateUrl: 'app/components/auth/login.view.html'
      })
      .when('/goodbye', {
        controller: 'AuthController',
        template: ' '
      })
      .when('/video/:id', {
        template: '<video-component></video-component>'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }]);

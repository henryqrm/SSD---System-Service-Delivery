'use strict';

angular.module('trocar')
  .config(function($stateProvider) {
    $stateProvider
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/signup/signup.html'
      });
  });

'use strict';

angular.module('trocar')
  .config(function($stateProvider) {
    $stateProvider
      .state('register-service', {
        url: '/register-service',
        templateUrl: 'app/services/register/register.html',
        controller: 'registerServicesCtrl',
        controllerAs: 'registerServices'
      });
  });

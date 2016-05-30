'use strict';

angular.module('trocar')
  .config(function($stateProvider) {
    $stateProvider
      .state('services', {
        url: '/services',
        templateUrl: 'app/services/services.html',
        controller:'ServicesCtrl',
        controllerAs: 'services'
      });
  });

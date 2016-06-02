'use strict';

angular.module('trocar')
  .config(function($stateProvider) {
    $stateProvider
      .state('enable', {
        url: '/enable',
        templateUrl: 'app/enable/enable.html',
        controller:'EnableCtrl',
        controllerAs: 'enable'
      });
  });

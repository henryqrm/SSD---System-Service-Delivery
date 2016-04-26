'use strict';

angular.module('trocar')
  .config(function($stateProvider) {
    $stateProvider
      .state('reports', {
        url: '/reports',
        templateUrl: 'app/reports/reports.html',
        controller: 'reportsCtrl'
      });
  });

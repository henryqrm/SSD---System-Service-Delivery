(function() {
  'use strict';

  angular
    .module('tui.auth.directive', [])
    .directive('tuiAuth', auth);

  /** @ngInject */
  function auth() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/auth/auth.html',
      scope: {
        creationDate: '='
      },
      controller: 'AuthCtrl',
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
})();

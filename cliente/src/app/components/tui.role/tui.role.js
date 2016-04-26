(function() {
  'use strict';

  angular
    .module('tui.role', [])
    .directive('tuiRole', role);

  /** @ngInject */
  function role() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/role/role.html',
      scope: {
        is: '='
      },
      controller: RoleController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function RoleController() {
      var vm = this;
      vm.is = '';

    }
  }
})();

(function() {
  'use strict';

  angular
    .module('tui.sidebar', [])
    .directive('tuiSidebar', sidebar);

  /** @ngInject */
  function sidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/tui.sidebar/tui.sidebar.html',
      scope: {
        show: '='
      },
      controller: SidebarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SidebarController(moment) {
      var vm = this;
      vm.categories = ('Carro Moto').split(' ').map(function (category) { return { abbrev: category }; });
      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }
})();

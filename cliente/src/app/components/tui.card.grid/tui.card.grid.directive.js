(function(){
  'use strict';
  angular
  .module('tui.card.grid',[])
  .directive('tuiCardGrid', cardGrid);

  function cardGrid(){
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/tui.card.grid/tui.card.grid.html',
      scope:{
        data: '='
      },
      controller: cardGridController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
    function cardGridController(){
      var vm = this;
      vm.vehicle = {};
      vm.vehicle.like = false;
    }
  }
})();

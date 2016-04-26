(function() {
  'use strict';

  angular
    .module('tui.login.directive', [])
    .directive('tuiLogin', login);


  function login() {
    var directive = {
      restrict: 'AE',
      template: '<md-button ng-click="vm.openDialog()"> Login</md-button>',
      scope: {},
      controller: loginController,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;

    function loginController(ngDialog, $mdDialog, $mdMedia, $scope) {
      var vm = this;
      vm.openDialog = openDialog;
      vm.user = {};

        function openDialog() {
          ngDialog.open({
            template: 'app/components/tui.login/tui.login.html',
            className: 'ngdialog-theme-default'
          });
        }
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('trocar')
    .controller('MainController', MainController);

  MainController.$inject = ['AuthService', '$mdDialog', '$rootScope'];

  /* @ngInject */
  function MainController(AuthService, $mdDialog, $rootScope) {
    var vm = this;


    vm.isAdmin = AuthService.isAdmin();
    vm.isProvider = $rootScope.isProvider();
    vm.isUser = $rootScope.isUser();



    activate();

    ////////////////

    function activate() {
        setTimeout(function () {

            console.log(vm.isAdmin);
        },2000);
    }
  }
})();

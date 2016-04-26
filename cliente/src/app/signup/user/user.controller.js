(function() {
  'use strict';

  angular.module('trocar')
    .controller('UserCtrl', UserCtrl);

  UserCtrl.$inject = ['$mdDialog', '$rootScope', 'SignupSrv'];

  /* @ngInject */
  function UserCtrl($mdDialog, $rootScope, SignupSrv) {
    var vm = this;
    vm.register = register;

    activate();

    ////////////////

    function activate() {

    }
    function register(isValid) {
        if (isValid) {
            // SignupSrv.create
            // vm.client.role =
        }
    }

  }
})();

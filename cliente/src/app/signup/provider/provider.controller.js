(function() {
  'use strict';

  angular.module('trocar')
    .controller('ProviderCtrl', ProviderCtrl);

  ProviderCtrl.$inject = ['$mdDialog', '$rootScope', 'SignupSrv'];

  /* @ngInject */
  function ProviderCtrl($mdDialog, $rootScope, SignupSrv) {
    var vm = this;
    vm.register = register;
    activate();

    /////////////

    function activate() {

    }

    function register(isValid) {
      if (isValid) {
          console.log("crash");
      }
    }

  }
})();

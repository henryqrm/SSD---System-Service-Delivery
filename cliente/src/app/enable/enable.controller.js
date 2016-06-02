(function() {
  'use strict';

  angular.module('trocar')
    .controller('EnableCtrl', EnableCtrl);

  EnableCtrl.$inject = ['EnableSrv', 'AuthService', '$rootScope', 'User'];

  /* @ngInject */
  function EnableCtrl(EnableSrv, AuthService, $rootScope, User) {
    var vm = this;
    vm.contracts = {};
    vm.users = {};

    vm.reload = reload;
    vm.enableUser = enableUser;
    vm.enableContract = enableContract;

    activate();

    /////////////

    function reload() {
      activate();
    }

    function enableUser(id) {
      EnableSrv.enableUser(id).then(function(data) {
        console.log(data);
      });
    }

    function enableContract(id) {
      EnableSrv.enableContract(id).then(function(data) {
          console.log(data);
      });
    }

    function activate() {
      EnableSrv.getUsers().then(function(data) {
        vm.users = data;
        console.log(vm.users);
      });
      EnableSrv.getContract().then(function(data) {
        vm.contracts = data;
        console.log(vm.contracts);
      });
    }

  }
})();

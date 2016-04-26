(function() {
  'use strict';

  angular
    .module('tui.auth.controller', [])
    .controller('AuthCtrl', AuthCtrl);

  AuthCtrl.$inject = ['AuthService', '$mdDialog', '$rootScope'];

  /* @ngInject */
  function AuthCtrl(AuthService, $mdDialog, $rootScope) {
    var vm = this;

    vm.login = login;

    activate();

    ////////////////

    function activate() {
    }

    function login() {
      vm.authenticating = true;
      AuthService.authenticate({
        email: vm.email,
        password: vm.password
      }).then(function(data) {
        $rootScope.user = data;
      }).catch(function() {
        var alert = $mdDialog.alert({
          title: 'Desculpe!',
          textContent: 'Usuário ou senha estão incorretos.',
          ok: 'Fechar'
        });
        $mdDialog.show(alert)
          .finally(function() {
            alert = undefined;
          });
      }).finally(function() {
        vm.authenticating = false;
      });
    }
  }
})();

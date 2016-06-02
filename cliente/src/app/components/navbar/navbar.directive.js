(function() {
  'use strict';

  angular
    .module('tui.navbar', [
      'ngDialog'
    ])
    .directive('tuiNavbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($rootScope, AuthService, ngDialog, $scope, $mdDialog) {
      var vm = this;
      vm.isLogged = isLogged;
      vm.user = user;
      vm.logout = logout;
      vm.openLogin = openLogin;
      vm.isAdmin = isAdmin;
      vm.isProvider = isProvider;

      function isLogged() {
        return AuthService.isLogged();
      }

      function user() {
        return $rootScope.user;
      }

      function isAdmin() {
        return AuthService.isAdmin();
      }

      function isProvider() {
        return AuthService.isProvider();
      }

      function logout() {
        AuthService.logout();
      }

      function openLogin() {
        ngDialog.open({
          template: 'app/components/navbar/login/tui.login.html',
          className: 'ngdialog-theme-default',
          controller: LoginController,
          controllerAs: 'vm'
        });
      }

      function LoginController() {
        var vm = this;
        vm.login = login;
        vm.provider = provider;
        vm.user = user;
        vm.admin = admin;

        function provider() {
          vm.email = 'provider@provider.com.br';
          vm.password = '123456';
        }

        function admin() {
          vm.email = 'admin@admin.com.br';
          vm.password = '123456';
        }

        function user() {
          vm.email = 'user@user.com.br';
          vm.password = '123456';
        }

        function login() {
          vm.authenticating = true;
          AuthService.authenticate({
            email: vm.email,
            password: vm.password
          }).then(function(data) {
            ngDialog.close();
            if (data.error === "no_user") {
              var alert = $mdDialog.alert({
                title: 'Desculpe!',
                textContent: 'Usuário ou senha estão incorretos.',
                ok: 'Fechar'
              });
              $mdDialog.show(alert)
                .finally(function() {
                  alert = undefined;
                });
            } else if (data === "disable") {
              var alert = $mdDialog.alert({
                title: 'Desculpe!',
                textContent: 'Peça ao admin para ativar',
                ok: 'Fechar'
              });
              $mdDialog.show(alert)
                .finally(function() {
                  alert = undefined;
                });
            } else {
              $rootScope.user = data;
              ngDialog.close();
            }
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

    }
  }
})();

(function() {
  'use strict';

  angular.module('trocar')
    .controller('UserCtrl', UserCtrl);

  UserCtrl.$inject = ['$mdDialog', '$rootScope', 'SignupSrv', '$state'];

  /* @ngInject */
  function UserCtrl($mdDialog, $rootScope, SignupSrv, $state) {
    var vm = this;
    vm.register = register;
    vm.aux = {};
    activate();

    ////////////////

    function activate() {

    }
    function register(isValid) {
        if (isValid) {
            vm.client.role = 'user';
            vm.client.lat = vm.aux.address.geometry.lat;
            vm.client.lng = vm.aux.address.geometry.lng;
            SignupSrv.create(vm.client).then(function (data) {
                console.log(data);
                var alert = $mdDialog.alert({
                  title: 'Sucesso!',
                  textContent: 'Usuário criado',
                  ok: 'OK'
                });
                $mdDialog.show(alert)
                  .finally(function() {
                    alert = undefined;
                    $state.go('home');
                  });
            }).catch(function (err) {
                console.log(err);
            });
        }
    }

  }
})();

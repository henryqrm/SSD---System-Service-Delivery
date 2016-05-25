(function() {
  'use strict';

  angular.module('trocar')
    .controller('ProviderCtrl', ProviderCtrl);

  ProviderCtrl.$inject = ['$mdDialog', '$rootScope', 'SignupSrv', '$state'];

  /* @ngInject */
  function ProviderCtrl($mdDialog, $rootScope, SignupSrv, $state) {
    var vm = this;
    vm.register = register;
    activate();

    /////////////

    function activate() {

    }

    function register(isValid) {
        if (isValid) {
            vm.provider.role = 'provider';
            vm.provider.lat = vm.aux.address.geometry.lat;
            vm.provider.lng = vm.aux.address.geometry.lng;
            SignupSrv.create(vm.provider).then(function (data) {
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

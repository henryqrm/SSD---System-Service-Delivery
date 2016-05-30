(function() {
  'use strict';

  angular.module('trocar')
    .controller('registerServicesCtrl', registerServicesCtrl);

  registerServicesCtrl.$inject = ['ServicesSrv', 'User', '$rootScope', '$mdDialog'];

  /* @ngInject */
  function registerServicesCtrl(ServicesSrv, User, $rootScope, $mdDialog) {
    var vm = this;
    vm.aux = {};
    vm.user = User.user;
    vm.register = register;
    vm.servicesRegistred = {};
    activate();

    /////////////
    function services() {
      ServicesSrv.listServices().then(function(data) {
        vm.servicesRegistred = data;
      });
      return;
    }

    function register(ev) {
      ServicesSrv.registerServiceProvider(vm.aux.register, $rootScope.user._id).then(function() {
        var confirm = $mdDialog.alert()
          .title('Serviço cadastrado')
          .textContent('Cadastrado com sucesso')
          .targetEvent(ev)
          .ok('Tudo bem');
        $mdDialog.show(confirm);
      });
    }

    function activate() {
      services();
      console.log();
    }

  }
})();

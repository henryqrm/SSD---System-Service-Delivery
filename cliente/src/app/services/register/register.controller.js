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
      var obj = {
        id_service: vm.aux.register,
        id_person: $rootScope.user._id,
        name_provider: ($rootScope.user.name.first + ' ' + $rootScope.user.name.last),
        name: vm.servicesRegistred[vm.aux.register].name,
        category: vm.servicesRegistred[vm.aux.register].category,
        type: vm.aux.type,
      };
      if (vm.aux.type === 'Voluntário') {
        obj.point = vm.aux.point_money;
      } else {
        obj.money = vm.aux.point_money;
      }
      ServicesSrv.registerServiceProvider(obj).then(function() {
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
    }

  }
})();

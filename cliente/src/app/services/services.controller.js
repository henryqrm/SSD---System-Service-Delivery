(function() {
  'use strict';

  angular.module('trocar')
    .controller('ServicesCtrl', ServicesCtrl);

  ServicesCtrl.$inject = ['ServicesSrv', 'AuthService', '$rootScope', 'User', 'ContractSrv'];

  /* @ngInject */
  function ServicesCtrl(ServicesSrv, AuthService, $rootScope, User, ContractSrv) {
    var vm = this;
    vm.aux = {};
    vm.isLogged = AuthService.isLogged;
    vm.user = AuthService.user;
    vm.isAdmin = AuthService.isAdmin;
    vm.register = register;
    vm.logout = logout;
    vm.servicesRegistred = {};
    vm.services = {};
    vm.userContracts = [];
    vm.registerNewContract = registerNewContract;
    vm.closeContract = closeContract;
    vm.getDoneContract = {};
    activate();

    /////////////


    function closeContract(id_contract) {
      ContractSrv.closeContract(id_contract).then(function(data) {
        console.log(data);
      });
    }

    function services() {
      ServicesSrv.listServices().then(function(data) {
        vm.servicesRegistred = data;
      });
      return;
    }

    function getAllServices() {
      ServicesSrv.getAllServices().then(function(data) {
        console.log(data);
        vm.services = data;
      });
    }

    function registerNewContract(item) {
      var obj = {
        service: item.name,
        id_provider: item.id_person,
        id_client: $rootScope.user._id,
        name_provider: item.name_provider,
        name_client: ($rootScope.user.name.first + ' ' + $rootScope.user.name.last),
        cost: {
          tipo: item.type
        }
      };
      if (item.type === 'Voluntário') {
        obj.cost.point = item.point;
      } else {
        obj.cost.money = item.money;
      }
      ContractSrv.create(obj).then(function(data) {
        console.log(data);
      });
    }

    function register() {}

    function logout() {
      AuthService.logout();
    }

    function activate() {
      ContractSrv.getUserContracts($rootScope.user._id).then(function(data) {
        vm.userContracts = data;
      });
      ContractSrv.getProviderContracts($rootScope.user._id).then(function(data) {
        vm.providerContracts = data;
      });
      ContractSrv.getDoneContract($rootScope.user._id).then(function(data) {
        vm.getDoneContract = data;
      });
      services();
      getAllServices();
    }

  }
})();

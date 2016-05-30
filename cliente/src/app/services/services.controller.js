(function() {
  'use strict';

  angular.module('trocar')
    .controller('ServicesCtrl', ServicesCtrl);

  ServicesCtrl.$inject = ['ServicesSrv', 'AuthService', '$rootScope', 'User'];

  /* @ngInject */
  function ServicesCtrl(ServicesSrv, AuthService, $rootScope, User) {
    var vm = this;
    vm.aux = {};
    vm.isLogged = User.isLogged;
    vm.user = User.user;
    vm.isAdmin = User.isAdmin;
    vm.register = register;
    vm.logout = logout;
    vm.servicesRegistred = {};
    activate();

    /////////////
    function services() {
      ServicesSrv.listServices().then(function(data) {
        vm.servicesRegistred = data;
      });
      return;
    }

    function register() {
        ServicesSrv.registerServiceProvider(vm.aux.register, User.user._id).then(function (data) {
            console.log(data);
        });
    }
    var imagePath = 'assets/images/angular.png';
    vm.todos = [{
      face: imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, ];


    function logout() {
      AuthService.logout();
    }

    function activate() {
      services();
      console.log(User.user);
    }

  }
})();

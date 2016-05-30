(function() {
  'use strict';

  angular
    .module('trocar')
    .controller('MainController', MainController);

  MainController.$inject = ['AuthService', '$mdDialog', '$rootScope'];

  /* @ngInject */
  function MainController(AuthService, $mdDialog, $rootScope) {
    var vm = this;


    activate();

    ////////////////

    function activate() {
    }
  }
})();

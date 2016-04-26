(function() {
  'use strict';

  angular.module('trocar')
    .controller('signupCtrl', signupCtrl);

  signupCtrl.$inject = ['$mdDialog', '$rootScope', 'SignupSrv'];

  /* @ngInject */
  function signupCtrl($mdDialog, $rootScope, SignupSrv) {
    var vm = this;

    activate();

    ////////////////

    function activate() {

    }

  }
})();

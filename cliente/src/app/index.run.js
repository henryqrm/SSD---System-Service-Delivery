(function() {
  'use strict';

  angular
    .module('trocar')
    .run(run);

  run.$inject = ['$rootScope', 'AuthService'];
  /** @ngInject */
  function run($rootScope, AuthService) {
    var _user;
    $rootScope.user = function() {
      if (!_user) {
        AuthService.getUser().then(function(user) {
          _user = user;
        });
      }
      return _user;
    };

    $rootScope.isAdmin = function() {
      if ($rootScope.user.role === "admin") {
        return true;
      }
      return false;
    };
    $rootScope.isProvider = function() {
      if ($rootScope.user.role === "provider") {
        return true;
      }
      return false;
    };
    $rootScope.isUser = function() {
      if ($rootScope.user.role === "user") {
        return true;
      }
      return false;
    };
  }

})();

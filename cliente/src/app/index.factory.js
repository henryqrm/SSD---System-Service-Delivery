(function() {
  'use strict';
  angular
    .module('trocar')
    .factory('User', User);

  User.$inject = ['AuthService', '$rootScope'];

  function User(AuthService, $rootScope) {
    var service = {
      isAdmin: isAdmin,
      isProvider: isProvider,
      isUser: user,
      isLogged: isLogged
    };
    return service;

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

  }
}());

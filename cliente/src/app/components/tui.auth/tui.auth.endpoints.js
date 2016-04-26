(function() {
  'use strict';

  angular
    .module('tui.auth.endpoints', [])
    .factory('AuthEndpoints', AuthEndpoints);

  AuthEndpoints.$inject = ['API'];

  /* @ngInject */
  function AuthEndpoints(API) {
    var service = {
      auth: auth,
      getUser: getUser
    };
    return service;

    ////////////////

    function auth() {
      return API + '/auth';
    }

    function getUser(id) {
      return API + '/person/' + id;
    }
  }
})();

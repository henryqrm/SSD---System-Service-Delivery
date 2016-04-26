(function() {
  'use strict';

  angular
    .module('tui.auth.service', [])
    .service('AuthService', AuthService);

  AuthService.$inject = ['$http', '$q', 'AuthEndpoints', '$window'];

  /* @ngInject */
  function AuthService($http, $q, AuthEndpoints, $window) {

    var TOKEN_LS_STRING = 'TokenAUTH';
    var fns = [];
    var user;
    var _isLogged = false;
    var _isAdmin = false;
    var _isProvider = false;
    var _isUser = false;

    this.authenticate = authenticate;
    this.getUser = getUser;
    this.requireAuth = requireAuth;
    this.logout = logout;
    this.onAuth = onAuth;
    this.getToken = getToken;
    this.isLogged = isLogged;
    this.isAdmin = isAdmin;
    this.isProvider = isProvider;
    this.isUser = isUser;

    ////////////////

    function executeAuthFunctions(token) {
      for (var f in fns) {
        var fn = fns[f];
        fn(token);
      }
    }

    function isLogged() {
      return _isLogged;
    }

    function isAdmin() {
      return _isAdmin;
    }

    function isProvider() {
      return _isProvider;
    }

    function isUser() {
      return _isUser;
    }

    function logout() {
      var defer = $q.defer();
      deleteAuthorization();
      user = null;
      executeAuthFunctions(null);
      _isProvider = false;
      _isLogged = false;
      _isAdmin = false;
      _isUser = false;
      defer.resolve('Logged out');
      return defer.promise;
      // chamar fn com null de parametro
    }

    function verifyToken(token) {
      var now = new Date();
      var tokenDate = new Date(token.expires * 1000);
      return tokenDate > now;
    }

    function getToken() {
      var defer = $q.defer();
      var string = $window.localStorage.getItem(TOKEN_LS_STRING) || '{}';
      var object = JSON.parse(string);
      if (object.expires && object.id) {
        if (verifyToken(object)) {
          defer.resolve(object);
        } else {
          deleteAuthorization();
          defer.reject('NoToken');
        }
      } else {
        defer.reject('NoToken');
      }
      return defer.promise;
    }

    function onAuth(fn) {
      fns.push(fn);
    };

    function setAuthorization(token) {
      //   $http.defaults.headers.common.Authorization = token.id;
    }

    function saveToken(token) {
      $window.localStorage.setItem(TOKEN_LS_STRING, JSON.stringify(token));
    }

    function deleteAuthorization() {
      delete $http.defaults.headers.common.Authorization;
      $window.localStorage.removeItem(TOKEN_LS_STRING);
    }

    function requireAuth() {
      var promise = getToken();
      promise.then(function(token) {
        setAuthorization(token);
      });
      return promise;
    }

    function authenticate(credentials) {
      var defer = $q.defer();
      $http.post(AuthEndpoints.auth(), credentials).success(function(data) {
        saveToken({
          id: data._id,
          expires: 86400
        });
        executeAuthFunctions({
          id: data._id,
          expires: 86400
        });
        user = data;
        if (data.role === "admin") {
          _isAdmin = true;
          _isLogged = true;
        } else if (data.role === "provider") {
          _isProvider = true;
          _isLogged = true;
        } else if (data.role === "user") {
          _isUser = true;
          _isLogged = true;
        }
        defer.resolve(data);
      }).error(function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }

    function getUser() {
      var defer = $q.defer();
      if (user) {
        console.log(user);
        defer.resolve(user);
      } else {
        getToken().then(function(token) {
          console.log(token);
          $http.get(getUser(token.id)).success(function(user) {
            defer.resolve(user);
          }).error(function(err) {
            defer.reject(err);
          });
        }).catch(function(err) {
          defer.reject(err);
        });
      }
      console.log("crash");
      return defer.promise;
    }
  }
})();

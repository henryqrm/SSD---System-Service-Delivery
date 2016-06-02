(function() {
  'use strict';
  angular.module('trocar')
    .service('EnableSrv', EnableSrv);

  EnableSrv.$inject = ['$q', '$http', 'API'];

  function EnableSrv($q, $http, API) {
    var endpoint = {};
    var self = this;
    self.getUsers = getUsers;
    self.enableUser = enableUser;
    self.getContract = getContract;
    self.enableContract = enableContract;

    endpoint.user = API + '/api/enable/user';
    endpoint.contract = API + '/api/enable/contract';


    function getUsers() {
      var defer = $q.defer();
      $http.get(endpoint.user)
        .success(function(data) {
          defer.resolve(data);
        })
        .error(function(err) {
          defer.reject(err);
        });
      return defer.promise;
    }

    function enableUser(idUser) {
      var defer = $q.defer();
      $http.post(endpoint.user, {
          id_user: idUser
        })
        .success(function(data) {
          defer.resolve(data);
        })
        .error(function(err) {
          defer.reject(err);
        });
      return defer.promise;
    }

    function getContract() {
      var defer = $q.defer();
      $http.get(endpoint.contract)
        .success(function(data) {
          defer.resolve(data);
        })
        .error(function(err) {
          defer.reject(err);
        });
      return defer.promise;
    }

    function enableContract(idContract) {
      var defer = $q.defer();
      $http.post(endpoint.contract, {
          id_contract: idContract
        })
        .success(function(data) {
          defer.resolve(data);
        })
        .error(function(err) {
          defer.reject(err);
        });
      return defer.promise;
    }
  }
}());

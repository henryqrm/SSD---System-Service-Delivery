(function() {
  'use strict';
  angular.module('trocar')
    .service('ServicesSrv', ServicesSrv);

  ServicesSrv.$inject = ['$q', '$http', 'API'];

  function ServicesSrv($q, $http, API) {
    var endpoint = {};
    var self = this;
    endpoint.services = API + '/api/services';
    endpoint.contractsList = API + '/api/contracts';
    endpoint.contracts = API + '/api/contracts';
    endpoint.enableContract = API + '/api/contracts';
    endpoint.registerServiceProvider = API + '/api/services';

    self.listServices = listServices;
    self.registerServiceProvider = registerServiceProvider;
    self.listContracts = listContracts;
    self.userContract = userContract;
    self.enableContract = enableContract;
    self.createContract = createContract;

    function registerServiceProvider(idService, idProvider) {
        console.log(idService, idProvider);
      var defer = $q.defer();
      $http.post(endpoint.registerServiceProvider, {
          idService: idService,
          idProvider: idProvider
        })
        .success(function(data) {
          defer.resolve(data);
        })
        .error(function(err) {
          defer.reject(err);
        });
      return defer.promise;
    }

    function providerService(idProvider) {
      var defer = $q.defer();
      $http.get(endpoint.contracts, idProvider)
        .success(function(data) {
          defer.resolve(data);
        })
        .error(function(err) {
          defer.reject(err);
        });
      return defer.promise;
    }

    function userContract(idUser) {
      var defer = $q.defer();
      $http.get(endpoint.contracts, idUser)
        .success(function(data) {
          defer.resolve(data);
        })
        .error(function(err) {
          defer.reject(err);
        });
      return defer.promise;
    }

    function listServices() {
      var defer = $q.defer();
      $http.get(endpoint.services)
        .success(function(data) {
          defer.resolve(data);
        })
        .error(function(err) {
          defer.reject(err);
        });
      return defer.promise;
    }

    function listContracts() {
      var defer = $q.defer();
      $http.get(listContracts)
        .success(function(data) {
          defer.resolve(data);
        })
        .error(function(err) {
          defer.reject(err);
        });
      return defer.promise;
    }

    function createContract() {
      var defer = $q.defer();
      $http.post(endpoint.contracts)
        .success(function(data) {
          defer.resolve(data);
        })
        .error(function(err) {
          defer.reject(err);
        });
      return defer.promise;
    }

    function enableContract(idUser) {
      var defer = $q.defer();
      $http.get(endpoint.enableContract, idUser)
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

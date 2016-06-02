(function() {
  'use strict';
  angular.module('trocar')
    .service('ContractSrv', ContractSrv);

  ContractSrv.$inject = ['$q', '$http', 'API'];

  function ContractSrv($q, $http, API) {
    var endpoint = {};
    var self = this;
    endpoint.userContracts = API + '/api/contracts/user';
    endpoint.createContract = API + '/api/contract';
    endpoint.providerContracts = API + '/api/contracts/provider';
    endpoint.closeContract = API + '/api/contract/close';
    endpoint.doneContract = API + '/api/contract/done';

    self.create = create;
    self.getUserContracts = getUserContracts;
    self.getProviderContracts = getProviderContracts;
    self.closeContract = closeContract;
    self.getDoneContract = getDoneContract;

    function getDoneContract(id_contract) {
          var defer = $q.defer();
          $http.post(endpoint.doneContract, {
              id_contract: id_contract
            })
            .success(function(data) {
              defer.resolve(data);
            })
            .error(function(err) {
              defer.reject(err);
            });
          return defer.promise;
    }


    function closeContract(id_contract) {
          var defer = $q.defer();
          $http.post(endpoint.closeContract, {
              id_contract: id_contract
            })
            .success(function(data) {
              defer.resolve(data);
            })
            .error(function(err) {
              defer.reject(err);
            });
          return defer.promise;
    }

    function getUserContracts(idUser) {
      var defer = $q.defer();
      $http.post(endpoint.userContracts, {
          id_client: idUser
        })
        .success(function(data) {
          defer.resolve(data);
        })
        .error(function(err) {
          defer.reject(err);
        });
      return defer.promise;
    }


    function getProviderContracts(idProvider) {
      var defer = $q.defer();
      $http.post(endpoint.providerContracts, {
          id_provider: idProvider
        })
        .success(function(data) {
          defer.resolve(data);
        })
        .error(function(err) {
          defer.reject(err);
        });
      return defer.promise;
    }

    function create(data) {
      var defer = $q.defer();
      $http.post(endpoint.createContract, data)
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

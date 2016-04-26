(function() {
  'use strict';
  angular.module('trocar')
    .service('SignupSrv', SignupSrv);

  SignupSrv.$inject = ['$q', '$http', 'API'];

  function SignupSrv($q, $http, API) {
    var endpoint = API + '/person';
    var self = this;

    self.create = create;

    function create(user) {
      var defer = $q.defer();
      $http.post(endpoint, user)
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

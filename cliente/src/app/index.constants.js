/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('trocar')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('API', 'http://127.0.0.1:5000');
    // .constant('API', 'https://ssd-system-service-delivery.herokuapp.com');

})();

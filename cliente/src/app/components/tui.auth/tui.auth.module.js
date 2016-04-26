(function() {
  angular
    .module('tui.auth', [
      'tui.auth.controller',
      'tui.auth.service',
      'tui.auth.endpoints',
      'tui.auth.directive'
    ]);
})();

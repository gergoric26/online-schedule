(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('madison', {
        url: '/',
        controller: 'MadisonCtrl as madison',
        templateUrl: '/templates/madison.html'
      })
      
  }

  angular
    .module('schedule', ['ui.router'])
    .config(config);
})();
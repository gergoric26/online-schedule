(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: true
      });

    $stateProvider
      .state("madison", {
        url: "/",
        controller: "MadisonCtrl as madison",
        //templateUrl: "/templates/madison.html"
        template: "<h1>hello madison controller</h1>"
      })
      
  }

  angular
    .module('schedule', ['ui.router'])
    .config(config);
})();
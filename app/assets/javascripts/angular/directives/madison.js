(function() {
  function MadisonCtrl($scope) {

    $scope.$watch("servers", function(oldVal, newVal){
      console.log(newVal)
    })

    $scope.servers = [
    {
      name: "Dean Gergoric",
      monday: "off",
      tuesday: "off",
      wednesday: "4-cl",
      thursday: "4-cl",
      friday: "4-cl",
      saturday: "4-cl",
      sunday: "11-cl"
    }]
    
    $scope.addRow = function() {
    $scope.servers.push({});
    }

  }

  angular
    .module('schedule')
    .controller('MadisonCtrl', MadisonCtrl);

})();

angular.module('schedule')
  .directive('madison', [function(){
    return {
      templateUrl: "madison.html",
      restrict: 'E',
      controller: 'MadisonCtrl as madison'
    }
  }])
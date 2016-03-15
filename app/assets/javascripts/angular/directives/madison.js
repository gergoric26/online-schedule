(function() {
  function MadisonCtrl($scope, $http) {

    $scope.$watch("rows", function(oldVal, newVal){
      console.log(newVal)
    })

    $scope.rows = [
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
    $scope.rows.push({});
    }

    $http({
      method: 'GET',
      url: '/allworkers/api'
    }).then(function(results){
      $scope.servers = results.data
      // console.log(results)
    },
    function(error){
      $scope.servers = error.data
      // console.log(error)
    });

    

   //  $scope.data = {
   //  repeatSelect: null,
   //  availableOptions: [
   //    { }
   //  ],
   // };

    // $scope.debug = function() {
    //   console.log($scope.servers)
    // }


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
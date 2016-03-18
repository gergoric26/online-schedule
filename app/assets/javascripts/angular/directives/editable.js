angular.module("editable", [])
.controller('editableExample',function($scope) {
  // $http.get("/users")
  //   .then(function(response) {
  //     $scope.users = response.users;
  //   })
})
.directive('contenteditable', function() {
    return {
      restrict: 'A', // only activate on element attribute
      // replace: true, // get a hold of NgModelController
      // controller: 'editableExample',
      // template: '<div contenteditable ng-model="ngModel">{{ngModel}}</div>',
      // scope: {rowUpdate: ''},
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {



        // scope.$watch('ngModel', function(oldVal, newVal){
        //   console.log(newVal)
        // })

        // if(!ngModel) return; // do nothing if no ng-model
        
        // // Specify how UI should be updated
        ngModel.$render = function() {
          element.html(ngModel.$viewValue || '');
        };

        // // Listen for change events to enable binding
        element.bind('blur keyup change', function() {
          // $http.get(url, scope)
          scope.$apply(read);
        });
        // read(); // initialize

        // // Write data to the model
        function read() {
          var html = element.html();
        //   // When we clear the content editable the browser leaves a <br> behind
        //   // If strip-br attribute is provided then we strip this out
        //   if( attrs.stripBr && html == '<br>' ) {
        //     html = '';
        //   }

        
           ngModel.$setViewValue(html);
        }
      }
    };
  });


angular.module("editable", [])
.controller('editableExample',function($scope) {
  // $http.get("/users")
  //   .then(function(response) {
  //     $scope.users = response.users;
  //   })
})
.directive('contentEditable', function() {
    return {
      restrict: 'A', // only activate on element attribute
      // replace: true, // get a hold of NgModelController
      // controller: 'editableExample',
      template: '<div contenteditable ng-model="ngModel">{{ngModel}}</div>',
      scope: {ngModel: '='},
      link: function(scope, element, attrs) {

        // if(!ngModel) return; // do nothing if no ng-model
        
        // // Specify how UI should be updated
        // ngModel.$render = function() {
        //   alert(ngModel.$modelValue)
        //   element.html(ngModel.$viewValue || '');
        // };

        // // Listen for change events to enable binding
        // element.on('blur keyup change', function() {
        //   scope.$apply(read);
        // });
        // read(); // initialize

        // // Write data to the model
        // function read() {
        //   var html = element.html();
        //   // When we clear the content editable the browser leaves a <br> behind
        //   // If strip-br attribute is provided then we strip this out
        //   if( attrs.stripBr && html == '<br>' ) {
        //     html = '';
        //   }
        //   ngModel.$setViewValue(html);
        // }
      }
    };
  });


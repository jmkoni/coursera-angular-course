(function () {
  'use strict';
  angular.module('myFirstApp', [])
         .controller('MyFirstController', function ($scope) {
            $scope.hello = "Hello";
            $scope.sayHello = function() {
              $scope.hello = "Hello " + $scope.name + "!";
            }
         });
})();
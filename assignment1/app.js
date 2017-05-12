(function () {
  'use strict';

  angular.module('LunchCheckApp', [])
         .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController ($scope, $filter, $injector) {
    $scope.message = "";
    $scope.lunchList = "";
    $scope.color = "black";

    $scope.countList = function(){
      var count = $scope.lunchList.split(',').filter(Boolean).length;
      if (count == 0){
        $scope.message = "Please enter data first"
        $scope.color = "black";
      } else if (count <= 3){
        $scope.message = "Enjoy!"
        $scope.color = "green";
      } else {
        $scope.message = "Too much!"
        $scope.color = "red";
      }
    };
  }

})();
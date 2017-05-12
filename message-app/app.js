(function () {
'use strict';

  angular.module('MsgApp', [])
         .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = "";
    $scope.colors = ["y", "w"]
    $scope.color = 0;
    $scope.sayMessage = function() {
      return $scope.name + " like Nine Inch Nails."
    };

    $scope.changeImage = function() {
      return $scope.color = ($scope.color + 1) % 2;
    };
  }

})();

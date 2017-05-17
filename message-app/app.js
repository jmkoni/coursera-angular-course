(function () {
'use strict';

  angular.module('MsgApp', [])
         .controller('MsgController', MsgController)
         .filter('loves', LovesFilter)
         .filter('truth', TruthFilter);

  MsgController.$inject = ['$scope', '$filter', 'lovesFilter'];
  function MsgController($scope, $filter, lovesFilter) {
    $scope.name = "";
    $scope.colors = ["y", "w"]
    $scope.color = 0;
    $scope.cookieCost = 12.36;
    $scope.subWord = "";
    $scope.sayMessage = function() {
      var msg = $scope.name + " likes Nine Inch Nails.";
      var output = $filter('uppercase')(msg);
      return output;
    };

    $scope.sayLovesMessage = function() {
      var msg = $scope.name + " likes Nine Inch Nails.";
      var output = lovesFilter(msg, "loves");
      return output;
    };

    $scope.changeImage = function() {
      return $scope.color = ($scope.color + 1) % 2;
    };
  }

  function LovesFilter() {
    return function(input, arg1) {
      input = input || "";
      input = input.replace("likes", arg1);
      return input;
    }
  }

  function TruthFilter() {
    return function(input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    }
  }

})();

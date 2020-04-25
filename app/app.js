(function () {
'use strict';

angular.module('myFirstApp', [])
.controller('DIController', DIController);

DIController.$inject= ['$scope', '$filter']; //for minification proof

function DIController($scope, $filter){
    $scope.name="Gino";

    $scope.upper= () => {
      let upCase= $filter('uppercase');
      $scope.name= upCase($scope.name)
    };
}
})();




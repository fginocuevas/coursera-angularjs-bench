(function () {
'use strict';

angular.module('myFirstApp', [])
.filter('customToLowerCase', LowercaseFilterFactory)
.controller('DIController', DIController);

DIController.$inject= ['$scope', '$filter', 'customToLowerCaseFilter']; //for minification proof

function DIController($scope, $filter, customToLowerCaseFilter){
    $scope.name="Gino";

    $scope.upper= () => {
      let upCase= $filter('uppercase');
      $scope.name= upCase($scope.name)
    };

    $scope.lower= () => {
        $scope.name= customToLowerCaseFilter($scope.name);
    }
}

function LowercaseFilterFactory(){
    return function (input) {
        input= input || "";
        return input.toLowerCase();
    }
}

})();




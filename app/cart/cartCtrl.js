'use strict';

(function(){

    angular.module('cartApp').controller('cartCtrl', ['$scope', 'cartSvc', function($scope, cartSvc){

        $scope.merchandise = cartSvc.getAll();

    }]);
})();
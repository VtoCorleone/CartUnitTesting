'use strict';

(function(){

    angular.module('bookApp').controller('bookCtrl', ['$scope', 'bookSvc', function($scope, bookSvc){

        $scope.localMerch = bookSvc.getBook();

        $scope.addLocalMerch = function(item, quantity) {
            bookSvc.addBook(item, quantity);
        };

        bookSvc.getOnline().then(function(book){
            $scope.onlineMerch = book;
        });

    }]);
})();
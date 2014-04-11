'use strict';

(function(){

    angular.module('scSurfShack').factory('scCartSvc', ['$http', '$q', function($http, $q){

        var merchandise = [];

        

        var getAll = function(){
            if (merchandise.length == 0){
                var deferred = $q.defer();

                $http.get('/data/mock.json')
            }
            return merchandise;
        }

        var getNumberOfItems = function(){
            var numItems = 0;
            _(merchandise).forEach(function(merch){
                numItems += merch.quantity;
            });
            return numItems;
        }

        var getTotalAmount = function(){
            var amount = 0;
            _(merchandise).forEach(function (merch) {
                amount += (merch.surfboard.price * merch.quantity);
            });
            return amount;
        }

        var addItems = function(surfboard, quantity){
            merchandise.push({'surfboard': surfboard, 'quantity': quantity});
        }

        var removeItems = function(sku, quantity){
            _(merchandise).forEach(function(board){

            });
        }

        return {
            getAll: getAll,
            getNumberOfItems: getNumberOfItems,
            getTotalAmount: getTotalAmount,
            addItems: addItems,
            removeItems: removeItems
        };

    }]);
})();
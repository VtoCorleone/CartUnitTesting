'use strict';

(function(){

    angular.module('bookApp').factory('bookSvc', ['$http', '$q', function($http, $q){

        var merchandise = [];

        var getBook = function(){
            return merchandise;
        };

        var addBook = function(item, quantity){
            merchandise.push({"item": item, "quantity": quantity});
        };

        var getOnline = function(){
            var deferred = $q.defer();

            $http.get('/book/v1/books')
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(data, status, headers, config){
                    deferred.reject("error")
                });

            return deferred.promise;
        };

        return {
            getBook: getBook,
            addBook: addBook,
            getOnline: getOnline
        };

    }]);
})();
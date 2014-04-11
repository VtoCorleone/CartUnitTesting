'use strict';

describe('Book Controller', function(){

    beforeEach(module('bookApp'));

//    beforeEach(module('cartApp', function($provide){
//        var mockAuthorSvc = {
//            getAutor: function(name){
//                return "George";
//            }
//        };
//        $provide.value('authorSvc', mockAuthorSvc);
//    }));

    var scope, ctrl, bookSvc;

    beforeEach(inject(function ($rootScope, $controller, _bookSvc_, _$q_) {
        var deferred = _$q_.defer();

        bookSvc = _bookSvc_;
        scope = $rootScope.$new();

        deferred.resolve('Game of Thrones');
        spyOn(bookSvc, 'getOnline').andReturn(deferred.promise);
        spyOn(bookSvc, 'getBook').andReturn(1);

        ctrl = $controller('bookCtrl', {$scope: scope, bookSvc: bookSvc});
    }));

    it('should return "Game of Thrones"', function(){
        scope.$apply();
        expect(scope.onlineMerch).toBe('Game of Thrones');
    });

    it('should return 1', function(){
        expect(scope.localMerch).toBe(1);
    });
});
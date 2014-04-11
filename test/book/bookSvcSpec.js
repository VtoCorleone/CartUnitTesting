'use strict';

describe('Book Service', function(){

    // Create an instance of the angularjs app
    beforeEach(module('bookApp'));

    // Declare global instances to use in your test cases
    var bookSvc, $httpBackend;

    beforeEach(
        // Inject the service and $httpBackend into our tests
        // The _ is ignored.  Now we can use the name of the service and $httpBackend as our "variable" name
        inject(function(_$httpBackend_, _bookSvc_){
            $httpBackend = _$httpBackend_;
            bookSvc = _bookSvc_;
    }));

    it('- should return "Game of Thrones"', function(){

        /**********
         Arrange
         **********/
        // Sets up the expected response from the $http call
        // You can have multiple .whenGETs.  It matches the 'url' that you provide
        $httpBackend.whenGET('/book/v1/books').respond('Game of Thrones');

        // Gets a promise from the service
        var promise = bookSvc.getOnline();
        // Return object from service call
        var book;

        // Once the promise resolves, set the data
        promise.then(function(_book){
            book = _book;
        });

        /**********
         Act
         **********/
        // The requests get queued up in the $httpBackend until you call .flush() to execute
        $httpBackend.flush();

        /**********
         Assert
         **********/
        // Compare the value of the response with what you expect it to be
        expect(book).toEqual('Game of Thrones');
    });

    it('- merchandise should be 0', function(){
        var merch =  bookSvc.getBook().length;
        expect(merch).toBe(0);
    });

    it('- merchandise should be 1', function(){
        bookSvc.addBook({"id": 1, "cost": "24.99"}, 3);
        var merch =  bookSvc.getBook().length;
        expect(merch).not.toBe(0);
        expect(merch).toBe(1);

    });
});
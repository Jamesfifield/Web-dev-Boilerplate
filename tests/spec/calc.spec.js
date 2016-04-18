describe("calculator", function() {
    var service = {};
    var $httpBackend;
    
    beforeEach(module('app'));  
    
    beforeEach(inject(function(_dataStore_, _$httpBackend_){
              service = _dataStore_;
              $httpBackend = _$httpBackend_;
          }));
     
    
    it("Data should be returned after promise is resolved", function() {
        var result;
        
        $httpBackend.when('GET', 'http://www.omdbapi.com/?v=1&s=star%20wars')
            .respond(200, {'data': [1,2,3]}); //intercept the response

        service.search('star wars')
            .then(function(data){
                result = data
            });        
        $httpBackend.flush(); //defer all promises
      
        expect(result).toEqual({'data': [1,2,3]});
    });
    
     it("Should handle http errors", function() {
        var result;
        
        $httpBackend.when('GET', 'http://www.omdbapi.com/?v=1&s=star%20wars')
            .respond(500); //intercept the response

        service.search('star wars')
            .then(function(data){
                result = data
            })
            .catch(function(){
                result = "error";
            });
        $httpBackend.flush(); //defer all promises
      
        expect(result).toEqual("error");
    });


});

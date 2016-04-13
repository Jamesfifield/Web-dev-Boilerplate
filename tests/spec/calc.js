describe("calculator", function() {
   
  it("should add two numbers", function() {
    var calc = new calcb();
    var result = calc.add(1,2);
    expect(result).toEqual(3);
  });


});

const assert = require('chai').assert;
const multiply = require('./multiply');

 //console.log(multiply());
//return value 1
// 0 passing (2ms)


describe('checks product of two integers', () => {
  // First TDD Cycle 1
   it('checks if the total sales is 1000000', () => {
       assert.equal(multiply(20,50000), 1000000)
  })
  




    
  // First TDD Cycle 2
  it("checks if the total purchase is 200000 ", () => {
    assert.equal(multiply(50, 4000), 200000);
  });
  
    
    
    
    
    
  






  
    
    
  


    
} )
   

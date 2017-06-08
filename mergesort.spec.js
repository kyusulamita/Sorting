// describe('Merge Sort', function(){
//   it('is able to merge two sorted arrays into one sorted array', function(){
    
//   });
// });

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([4, 5]) ).toEqual( [[4], [5]] );
  });
    it('is able to split an array into two halves', function() {
    expect( split([4, 3, 5]) ).toEqual( [[4], [3,5]] );
  });
    
});
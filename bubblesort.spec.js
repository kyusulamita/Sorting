describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array of length 1', function(){
  	expect(bubbleSort([4])).toEqual([4]);
  });
  it('handles an array of length 2', function(){
  	expect(bubbleSort([12, 2]).toEqual([2, 12]));
  });
});
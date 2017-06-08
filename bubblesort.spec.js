describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array of length 1', function(){
  	expect(bubbleSort([4])).toEqual([4]);
  });
  it('handles an array of length 2', function(){
  	expect(bubbleSort([12, 2])).toEqual([2, 12]);
  });
  it('handles an array of length 3', function(){
  	expect(bubbleSort([5,4,3, 2, 1])).toEqual([1, 2, 3, 4,5]);
  });
  it('handles arrays', function(){
  	expect(bubbleSort([45,12,31,2,16])).toEqual([2,12,16, 31, 45]);
  });
});
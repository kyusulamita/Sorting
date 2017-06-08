function split(wholeArray){
	if(wholeArray.length < 2) return wholeArray;
	var length = wholeArray.length/2;
	var firstHalf = wholeArray.slice(0, length);
	var secondHalf = wholeArray.slice(length);
	return [firstHalf, secondHalf];
}
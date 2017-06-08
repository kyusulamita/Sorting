function bubbleSort(array){
	if (array.length < 2) return array;
	for(var i = array.length-1; i >= 0; i--){
		for(var j = 1; j<=i; j++){//the stop
			if(array[j-1] > array[j]){
				var temp = array[j-1];
				array[j-1] = array[j];
				array[j] = temp;
			}
		}
	}
	return array;
}
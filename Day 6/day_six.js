const banks  = [14,0,15,12,11,11,3,5,1,6,8,4,9,1,8,4]
// const banks = [0,2,7,0]
var value = 0;
var history = [];

// //Part one
while(true){
	value +=1;
	var max = Math.max(...banks);
	var maxIndex = banks.indexOf(max);
	banks[maxIndex] = 0;

	while(0 < max){
		maxIndex += 1; 
		banks[maxIndex % banks.length] +=1
		max -= 1

	}
	
	if(history.indexOf(banks.toString()) == -1){
		history.push(banks.toString());				
	}
	else{	

		break; 
	}
}
	console.log(value);

//Part two
while(true) {
	value +=1;
	var max = Math.max(...banks);
	var index = banks.indexOf(max);
	banks[index] = 0;

	while(0 < max){		
		index += 1; 
		banks[index % banks.length] +=1
		max -= 1
	}

	if(history.indexOf(banks.toString()) >= 0) {
		console.log(value - (history.indexOf(banks.toString()) + 1))			
		break;
	} else {
		history.push(banks.toString());		
	}	
}
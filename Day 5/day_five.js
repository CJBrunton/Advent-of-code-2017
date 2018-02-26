const fs = require('fs');
const _ = require('lodash');

//Part one
fs.readFile('puzzleInput.txt', 'utf8', (err, data) => {	
	var jump = 0; 
	data = data.trim();
    data = data.split('\n').map(d => parseInt(d));
	let steps = 0; 
	for (let i = 0; i < data.length; i += jump) {
    	steps++;
    	jump = data[i];    
    	data[i]++; 
	}
	console.log(steps)
})


//Part 2
fs.readFile('puzzleInput.txt', 'utf8', (err, data) => {	
	var jump = 0; 
    data = data.trim().split('\n').map(d => parseInt(d));
	let steps = 0; 
	for (let i = 0; i < data.length; i += jump) {
    	steps++;
    	jump = data[i];        	
		(data[i] >= 3) ? data[i]-- : data[i]++;
	}
	console.log(steps)
})
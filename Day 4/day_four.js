const fs = require('fs');
const _ = require('lodash');

//Part 1
fs.readFile('puzzleInput.txt', 'utf8', (err, data) => {	
	data = data.trim();
    var invalid = 0;
    var lines = data.split('\n');
    _.forEach(lines, function(line){
    	line = line.trim();
		var words = line.split(' ');
		words.sort();
		 for (var i = 0;  i < words.length; i+=1) {
            if(words[i] === words[i + 1]) {
                invalid++;
                break;
            }
        }
    })
     console.log(lines.length - invalid);
})

//Part 2 

fs.readFile('puzzleInput.txt', 'utf8', (err, data) => {	
	data = data.trim();
    var invalid = 0;
    var lines = data.split('\n');
    _.forEach(lines, function(line){
    	line = line.trim();
		var words = line.split(' ');
		words = _.map(words, function(word){
			word = word.split(''); 
			word.sort();
			return word.join('');
		});
		words.sort();
		 for (var i = 0;  i < words.length; i+=1) {
            if(words[i] === words[i + 1]) {
                invalid++;
                break;
            }
        }
    })
     console.log(lines.length - invalid);
})
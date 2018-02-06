"use strict";

let czech = require("./czech");
let spanish = require("./spanish");
let french = require("./french");



let Languages = {

	czech,
	spanish,
	french

};

var keypair = {

	"merry": "MERRY", 
	"christmas": "CHRISTMAS",
	"and": "AND",
	"a" : "A",
	"happy": "HAPPY",
	"new" : "NEW",
	"year": "YEAR"
    
};

var greeting = "merry christmas and a happy new year";

var sentence, newsentence = [];

sentence = greeting.split(" "); // sentence is an array of the greeting

for (var word in sentence){ // For each word in the sentence
	for( var key in keypair){ // For each key in the key pair
		if(sentence[word] === key){ // Compare the word to the Key
			newsentence.push(keypair[key]); // Append the keypair into the array
		}
		//var temp1 = key; //first entry
		//var temp2 = keypair[key]; // second entry
	}

}
/* for( var word in sentence)
	if (sentence[word] === keypair){
		newsentence.push = (sentence[index])
	}

}); */


/* for (var i = 0; i < greeting.length; i++){
	temp = greeting.match(/`${keypair[i]}`/g);
	document.getElementsByClassName("demo")[0].innerHTML += temp;

} */

module.exports = Lanugages;
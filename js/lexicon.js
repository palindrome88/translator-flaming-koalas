"use strict";

let czech = require("./czech");
let spanish = require("./spanish");
let french = require("./french");
let icelandic = require("./icelandic");


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

function lexicon() {

	var greeting = "merry christmas and a happy new year"; // INPUT FROM CONSOLE HERE
	var sentence, newsentence, newsentence2, newsentence3, newsentence4 = []; // newsentence## input values to be translated
	
	sentence = greeting.split(" "); // sentence is an array of the greeting 

	// CZECH TRANSLATOR	
	for (var word in sentence){ // For each word in the sentence
		for( var key in czech){ // For each key in the key pair
			if(sentence[word] === key){ // Compare the word to the Key
				newsentence.push(czech[key]); // Append the keypair into the array
			}
			//var temp1 = key; //first entry
			//var temp2 = keypair[key]; // second entry
		}
	}
	// FRENCH TRANSLATOR
	for (var word in sentence){ // For each word in the sentence
		for( var key in french){ // For each key in the key pair
			if(sentence[word] === key){ // Compare the word to the Key
				newsentence2.push(french[key]); // Append the keypair into the array
			}
			//var temp1 = key; //first entry
			//var temp2 = keypair[key]; // second entry
		}
	}
	// SPANISH TRANSLATOR
	for (var word in sentence){ // For each word in the sentence
		for( var key in spanish){ // For each key in the key pair
			if(sentence[word] === key){ // Compare the word to the Key
				newsentence3.push(spanish[key]); // Append the keypair into the array
			}
		//var temp1 = key; //first entry
		//var temp2 = keypair[key]; // second entry
		}
	}	
	// ICELANDIC TRANSLATOR
	for (var word in sentence){ // For each word in the sentence
		for( var key in icelandic){ // For each key in the key pair
			if(sentence[word] === key){ // Compare the word to the Key
				newsentence3.push(icelandic[key]); // Append the keypair into the array
			}
		//var temp1 = key; //first entry
		//var temp2 = keypair[key]; // second entry
		}
	}
	var output_czech = newsentence.join(" ");
	var output2_french = newsentence2.join(" ");
	var output3_spanish = newsentence3.join(" ");
	var output4_icelandic = newsentence4.join(" ");
	return output_czech, output2_french, output3_spanish, output4_icelandic;

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
"use strict";

let czech = require("./czech");
let spanish = require("./spanish");
let french = require("./french");
let icelandic = require("./icelandic");


let Languages = {

	czech,
	spanish,
	french,
	lexicon

};


function lexicon() {
console.log("lex works");
	var greeting = "merry christmas and a happy new year"; // INPUT FROM CONSOLE HERE
	var sentence, newsentence, newsentence2, newsentence3, newsentence4 = []; // newsentence## input values to be translated
	
	sentence = greeting.split(" "); // sentence is an array of the greeting 

	// CZECH TRANSLATOR	
	for (var word in sentence){ // For each word in the sentence
		for( var key in czech){ // For each key in the key pair
			if(sentence[word] === key){ // Compare the word to the Key
				newsentence.push(czech[key]); // Append the keypair into the array
			}
		}
	}
	// FRENCH TRANSLATOR
	for (var word1 in sentence){ // For each word in the sentence
		for( var key1 in french){ // For each key in the key pair
			if(sentence[word1] === key1){ // Compare the word to the Key
				newsentence2.push(french[key1]); // Append the keypair into the array
			}
		}
	}
	// SPANISH TRANSLATOR
	for (var word2 in sentence){ // For each word in the sentence
		for( var key2 in spanish){ // For each key in the key pair
			if(sentence[word2] === key2){ // Compare the word to the Key
				newsentence3.push(spanish[key2]); // Append the keypair into the array
			}
		
		}
	}	
	// ICELANDIC TRANSLATOR
	for (var word3 in sentence){ // For each word in the sentence
		for( var key3 in icelandic){ // For each key in the key pair
			if(sentence[word3] === key3){ // Compare the word to the Key
				newsentence3.push(icelandic[key3]); // Append the keypair into the array
			}
		
		}
	}

	var output_czech = newsentence.join(" ");
	var output_french = newsentence2.join(" ");
	var output_spanish = newsentence3.join(" ");
	var output_icelandic = newsentence4.join(" ");
	
	return output_czech, output_french, output_spanish, output_icelandic;

}


module.exports = Languages;
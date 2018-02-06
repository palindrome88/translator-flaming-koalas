(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
function czech() {


	var czech = {

		"merry":"vesele", 
		"christmas":"vanoce", 
		"and":"a", 
		"happy":"stastni", 
		"new":"novy", 
		"year":"rok"
	};
    
	return czech;
}

module.exports = czech;
},{}],2:[function(require,module,exports){
"use strict";

function french() {

	var french = {
		"merry":"joyeux",
		"christmas":"Noel",
		"and":"et",
		"happy":"joyeuses",
		"new":"nouveau",
		"year":"fetes"
	};
    
	return french;

}

module.exports = french;
},{}],3:[function(require,module,exports){
"use strict";

function icelandic() {

	var icelandic = {
		"merry": "gleðilegt",
		"christmas": "jól",
		"and": "og",
		"happy": "farsælt",
		"new": "komandi",
		"year": "ár"
	};

	return icelandic;

}

module.exports = icelandic;
},{}],4:[function(require,module,exports){
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
},{"./czech":1,"./french":2,"./icelandic":3,"./spanish":6}],5:[function(require,module,exports){
"use strict";

var transButton = document.getElementById("translate");

console.log("test");

let lexicon = require("./lexicon");

let outputCzech = lexicon.output_Czech;
let outputFrench = lexicon.output_French;
let outputSpanish = lexicon.output_Spanish;
let outputIcelandic = lexicon.output_Icelandic;

function translate (){
	if (document.getElementById("spanish").checked){
		console.log("spanish");
		console.log(outputSpanish);
		return outputSpanish;
	}
	if (document.getElementById("czech").checked){
		console.log("czech");
		return outputCzech;
	}
	if (document.getElementById("french").checked){
		console.log("french");
		return outputFrench;
	}
	if (document.getElementById("icelandic").checked){
		console.log("icelandic");
		return outputIcelandic;
	}

}



// on click or enter get info




// on enter keypress
function enter(event) {
	if (event.keyCode === 13) {
		translate();
	} else if (event.keyCode != 13) {
	}
}

// enter press spanish
document.getElementById("spanish").addEventListener("keypress", enter);
// enter press czech
document.getElementById("czech").addEventListener("keypress", enter);
// enter press french
document.getElementById("french").addEventListener("keypress", enter);
// enter press icelandic
document.getElementById("icelandic").addEventListener("keypress", enter);
// on click
document.getElementById("translate").addEventListener("click", translate);


},{"./lexicon":4}],6:[function(require,module,exports){
"use strict";
function spanish() {


	var spanish = {

		"merry":"feliz", 
		"christmas":"navidad", 
		"and":"y", 
		"happy":"feliz", 
		"new":"nuevo", 
		"year":"ano"
	};
    
	return spanish;
}

module.exports = spanish;



},{}]},{},[5]);

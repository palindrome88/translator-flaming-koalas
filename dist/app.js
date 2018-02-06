(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
	var czech = {

		"merry":"vesele", 
		"christmas":"vanoce", 
		"and":"a", 
		"happy":"stastni", 
		"new":"novy", 
		"year":"rok"
	};

module.exports = czech;
},{}],2:[function(require,module,exports){
"use strict";

	var french = {
		"merry":"joyeux",
		"christmas":"Noel",
		"and":"et",
		"happy":"joyeuses",
		"new":"nouveau",
		"year":"fetes"
	};
    

module.exports = french;
},{}],3:[function(require,module,exports){
"use strict";


	var icelandic = {
		"merry": "gleðilegt",
		"christmas": "jól",
		"and": "og",
		"happy": "farsælt",
		"new": "komandi",
		"year": "ár"
	};





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
	icelandic

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

let czech = require("./czech");
let spanish = require("./spanish");
let french = require("./french");
let icelandic = require("./icelandic");


let Languages = {

	czech,
	spanish,
	french,
	icelandic

};

var transButton = document.getElementById("translate");
var output = document.getElementById("output");


console.log("test");

let lexicon = require("./lexicon");

let outputCzech = lexicon.output_Czech;
let outputFrench = lexicon.output_French;
let outputSpanish = lexicon.output_Spanish;
let outputIcelandic = lexicon.output_Icelandic;

var greeting = ["merry","christmas","and", "happy", "new", "year"];

var translatedGreeting= [];

function translate (){

var spanPropNames = (Object.getOwnPropertyNames(spanish));
var czePropNames = (Object.getOwnPropertyNames(czech));
var frenPropNames = (Object.getOwnPropertyNames(french));
var icePropNames = (Object.getOwnPropertyNames(icelandic));
output.innerHTML = "";

	if (document.getElementById("spanish").checked){
		console.log("works");
		console.log(spanPropNames);
		for(let i=0;i<greeting.length;i++){
			var currentWord = greeting[i];
			// console.log("current word",currentWord);
			for(let j=0;j<spanPropNames.length;j++){
				var compareWord = spanPropNames[j];
				// console.log("compare word", compareWord)
				if(currentWord === compareWord){
					var x = spanish[compareWord];
					// console.log("push", x)
					translatedGreeting.push(x);
	
				}
			}
				
		}
		console.log(translatedGreeting);

		var newGreeting = translatedGreeting.join(' ');
		output.innerHTML = newGreeting;
	}
	if (document.getElementById("czech").checked){
		// console.log("works");
		// console.log(czePropNames);
		for(let a=0;a<greeting.length;a++){
			var currentWord2 = greeting[a];
			// console.log("current word",currentWord);
			for(let b=0;b<czePropNames.length;b++){
				var compareWord2 = czePropNames[b];
				// console.log("compare word", compareWord)
				if(currentWord2 === compareWord2){
					var x2 = czech[compareWord2];
					// console.log("push", x)
					translatedGreeting.push(x2);
	
				}
			}
				
		}
		// console.log(translatedGreeting);

		var newGreeting2 = translatedGreeting.join(' ');
		output.innerHTML = newGreeting2;
	}
	
	if (document.getElementById("french").checked){
		// console.log("works");
		// console.log(czePropNames);
		for(let c=0;c<greeting.length;c++){
			var currentWord3 = greeting[c];
			// console.log("current word",currentWord);
			for(let d=0;d<frenPropNames.length;d++){
				var compareWord3 = frenPropNames[d];
				// console.log("compare word", compareWord)
				if(currentWord3 === compareWord3){
					var x3 = french[compareWord3];
					// console.log("push", x)
					translatedGreeting.push(x3);
	
				}
			}
				
		}
		// console.log(translatedGreeting);

		var newGreeting3 = translatedGreeting.join(' ');
		output.innerHTML = newGreeting3;
	}
	if (document.getElementById("icelandic").checked){
		// console.log("works");
		// console.log(czePropNames);
		for(let e=0;e<greeting.length;e++){
			var currentWord4 = greeting[e];
			// console.log("current word",currentWord);
			for(let f=0;f<icePropNames.length;f++){
				var compareWord4 = icePropNames[f];
				// console.log("compare word", compareWord)
				if(currentWord4 === compareWord4){
					var x4 = icelandic[compareWord4];
					// console.log("push", x)
					translatedGreeting.push(x4);
	
				}
			}
				
		}
		// console.log(translatedGreeting);

		var newGreeting4 = translatedGreeting.join(' ');
		output.innerHTML = newGreeting4;
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
// on enter press translate
document.getElementById("translate").addEventListener("keypress", enter);


},{"./czech":1,"./french":2,"./icelandic":3,"./lexicon":4,"./spanish":6}],6:[function(require,module,exports){
"use strict";



var spanish = {

"merry":"feliz", 
"christmas":"navidad", 
"and":"y", 
"happy":"feliz", 
"new":"nuevo", 
"year":"ano"
};
    



module.exports = spanish;



},{}]},{},[5]);

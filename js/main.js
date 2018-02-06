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


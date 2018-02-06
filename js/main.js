"use strict";

var transButton = document.getElementById("translate");
var output = document.getElementById("output");

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
		output.innerHTML = outputSpanish;
		return outputSpanish;
	}
	if (document.getElementById("czech").checked){
		console.log("czech");
		output.innerHTML = outputCzech;
		return outputCzech;
	}
	if (document.getElementById("french").checked){
		console.log("french");
		output.innerHTML = outputFrench;
		return outputFrench;
	}
	if (document.getElementById("icelandic").checked){
		console.log("icelandic");
		output.innerHTML = outputIcelandic;
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
// on enter press translate
document.getElementById("translate").addEventListener("keypress", enter);


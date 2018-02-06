"use strict";

var transButton = document.getElementById("translate")

console.log("test");

let lexicon = require("/.lexicon");
let spanish = require("/.spanish");
let czech = require("/.czech");
let french = require("/.french");




function translate (){
    if (document.getElementById("spanish").checked){
        return outputSpanish
    }
    if (document.getElementById("czech").checked){
        return outputCzech
    }
    if (document.getElementById("french").checked){
        return outputFrench
    }

}



// on click or enter get info

// translate
function translate() {
    }
    



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
// on click
document.getElementById("translate").addEventListener("click", translate);


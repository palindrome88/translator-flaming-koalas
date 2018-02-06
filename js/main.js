"use strict";

console.log("test");

let lexicon = require("/.lexicon");
let spanish = require("/.spanish");
let czech = require("/.czech");
let french = require("/.french");

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
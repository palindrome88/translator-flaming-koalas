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



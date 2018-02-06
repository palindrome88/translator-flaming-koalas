var spanishLex = {
    "merry":"feliz",
    "christmas":"Navidad",
    "and":"y",
    "happy":"feliz",
    "new":"nuevo",
    "year":"ano"
}

propNames = (Object.getOwnPropertyNames(spanishLex));

// console.log(propNames)

transButton = document.getElementById("translate");


greeting = ["merry","christmas","and", "happy", "new", "year","merry", "merry", "merry"]


// console.log(spanishLex["merry"])


translatedGreeting= []


function translateToSpanish (){
if (document.getElementById("spanish").checked){
    console.log("works");
    console.log(propNames);
    for(i=0;i<greeting.length;i++){
        var currentWord = greeting[i];
        // console.log("current word",currentWord);
        for(j=0;j<propNames.length;j++){
            var compareWord = propNames[j];
            // console.log("compare word", compareWord)
            if(currentWord === compareWord){
                x = spanishLex[compareWord]
                // console.log("push", x)
                translatedGreeting.push(x);

            }
        }
            
    }
    console.log(translatedGreeting)
}
}



transButton.addEventListener("click",translateToSpanish);
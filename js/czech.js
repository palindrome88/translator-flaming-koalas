var czechObject = {
    merry: "vesele", 
    christmas: "vanoce", 
    and: "a", 
    happy: "stastni",
    new: "novy",
    year: "rok"
}

// 1.Accept user input by creating html page w/ textarea and radio buttons.

// 2.Capture user input with the following code:
var enteredText = document.getElementById("user-input");

// 3.Button -- Connect with it on the DOM
let translateButton = document.getElementById("translate");
translateButton.addEventListener("click", () => {
    function translateToCzech() {    // 4. Function declared

        // 5.Create var to store user's input, convert to lower case to match keys/properties in object (see top)
        var userInput = enteredText.value.toLowerCase();
        console.log(userInput);

        // 6.Create array to hold split strings. 7.Split the input into separate strings, using the spaces to identify where they split.
        let wordArray = userInput.split(" "); // split ALWAYS creates an array
        console.log(wordArray);

        // 8. Create empty array to hold translation
        let translatedPhrase = [];

        // 9. Run each word through wordArray
        wordArray.forEach((taco) => {

            // 10. Create a var so we can push to translatedPhrase
            let translation = czechObj[taco];
            if (taco in czechObject) {
                translatedPhrase.push(translation);
            }
                // 11. Create array to join the Czech words now that they have been translated
                let transJoin = translatedPhrase.join();
                    document.getElementById("translated-greeting").innerHTML = `Your translation is ${translation}`;          
        })
    }  

/* OLD STUFF ------>

let czechGreeting = (merry, christmas, and, a, happy, new, year) => 
{
  console.log(merry + christmas + and + a + happy + new + year);
};

czechGreeting("vesele", "vanoce", "a", "stastni", "novy", "rok");

*/

// test---> console.log(czechObject.merry); (prints vesele)

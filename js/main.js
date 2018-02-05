var keypair = {"merry": "MERRY", "christmas": "CHRISTMAS", "and": "AND", "a" : "A", "happy": "HAPPY", "new" : "NEW", "year": "YEAR"};

var greeting = "merry christmas and a happy new year";
var sentence, newsentence = [];

sentence = greeting.split(" "); // sentence is an array of the greeting


for (var word in sentence){
	for( var key in keypair){
		if(sentence[word] === key){
			newsentence.push(keypair[key]);
		}
		//var temp1 = key; //first entry
		//var temp2 = keypair[key]; // second entry
	}

}
/* for( var word in sentence)
	if (sentence[word] === keypair){
		newsentence.push = (sentence[index])
	}

}); */


for (var i = 0; i < greeting.length; i++){
	temp = greeting.match(/`${keypair[i]}`/g);
	document.getElementsByClassName("demo")[0].innerHTML += temp;

}

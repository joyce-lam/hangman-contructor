var inquirer = require("inquirer");

var Word = require("./word");
var Letter = require("./letter");


var wordList = ["afghanistan", "albania", "algeria", "andorra", "angola", "argentina", "armenia", "aruba", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bhutan", "bolivia", "botswana", "brazil", "brunei", "bulgaria", "burma", "burundi", "cambodia", "cameroon", "canada", "chad", "chile", "china", "colombia", "comoros", "croatia", "cuba", "curacao", "cyprus", "czechia", "denmark", "djibouti", "dominica", "ecuador", "egypt", "eritrea", "estonia", "ethiopia", "fiji", "finland", "france", "gabon", "gambia", "georgia", "germany", "ghana", "greece", "grenada", "guatemala", "guinea", "guyana", "haiti", "honduras", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "israel", "italy", "jamaica", "japan", "jordan", "kazakhstan", "kenya", "kiribati", "korea", "kosovo", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "macau", "macedonia", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "mauritania", "mauritius", "mexico", "micronesia", "moldova", "monaco", "mongolia", "motenegro", "morocco", "mozambique", "namibia", "nauru", "nepal", "netherlands", "nicaragua", "niger", "nigeria", "norway", "oman", "pakistan", "palau", "panama", "paraguay", "peru", "philippines", "poland", "portugal", "qatar", "romania", "russia", "rwanda", "samoa", "senegal", "serbia", "seychelles", "singapore", "slovakia", "slovenia", "somalia", "spain", "sudan", "suriname", "swaziland", "sweden", "switzerland", "syria", "taiwan", "tajikistan", "tanzania", "thailand", "togo", "tonga", "tunisia", "turkey", "turmenistan", "tuvalu", "uganda", "ukraine", "uruguay", "uzbekistan", "vanuatu", "venezuela", "vietnam", "yemen", "zambia", "zimbabwe"];

//set variables
//var wins = 0;
//var losses = 0;
//var remainedGuesses = 10; 
//var lettersGuessed = [];
var guessWord;
//var lettersRevealed = [];

// declare a function to find a word within the array
function randomWord () { 
	guessWord = wordList[Math.floor(Math.random()*wordList.length)];
	console.log(guessWord);
	
};

randomWord();



var guessWordArr = [];
	
for (var i = 0; i < guessWord.length; i++) {
	guessWordArr.push(new Letter(guessWord.charAt(i)));
};

console.log(guessWordArr);
var wordA = new Word(guessWordArr);
console.log(wordA);

wordA.display();
wordA.checkIfCorrect("a");
wordA.display();
wordA.checkIfCorrect("o");
var inquirer = require("inquirer");
var Word = require("./word");
var Letter = require("./letter");


var wordList = ["afghanistan", "albania", "algeria", "andorra", "angola", "argentina", "armenia", "aruba", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bhutan", "bolivia", "botswana", "brazil", "brunei", "bulgaria", "burma", "burundi", "cambodia", "cameroon", "canada", "chad", "chile", "china", "colombia", "comoros", "croatia", "cuba", "curacao", "cyprus", "czechia", "denmark", "djibouti", "dominica", "ecuador", "egypt", "eritrea", "estonia", "ethiopia", "fiji", "finland", "france", "gabon", "gambia", "georgia", "germany", "ghana", "greece", "grenada", "guatemala", "guinea", "guyana", "haiti", "honduras", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "israel", "italy", "jamaica", "japan", "jordan", "kazakhstan", "kenya", "kiribati", "korea", "kosovo", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "macau", "macedonia", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "mauritania", "mauritius", "mexico", "micronesia", "moldova", "monaco", "mongolia", "motenegro", "morocco", "mozambique", "namibia", "nauru", "nepal", "netherlands", "nicaragua", "niger", "nigeria", "norway", "oman", "pakistan", "palau", "panama", "paraguay", "peru", "philippines", "poland", "portugal", "qatar", "romania", "russia", "rwanda", "samoa", "senegal", "serbia", "seychelles", "singapore", "slovakia", "slovenia", "somalia", "spain", "sudan", "suriname", "swaziland", "sweden", "switzerland", "syria", "taiwan", "tajikistan", "tanzania", "thailand", "togo", "tonga", "tunisia", "turkey", "turmenistan", "tuvalu", "uganda", "ukraine", "uruguay", "uzbekistan", "vanuatu", "venezuela", "vietnam", "yemen", "zambia", "zimbabwe"];


var guessWord;
var guessWordArr = [];
var noOfGuesses = 5;
var lettersGuessed = [];


// declare a function to find a word within the array
function randomWord () { 
	guessWord = wordList[Math.floor(Math.random()*wordList.length)];
	console.log(guessWord);
	return guessWord;
};

randomWord();


for (var i = 0; i < guessWord.length; i++) {
	guessWordArr.push(new Letter(guessWord.charAt(i)));
};

var newWord = new Word(guessWordArr);
console.log("Guess this word: ");


var askQuestion = function() {
	if (noOfGuesses > 0) {
		newWord.display();
		console.log("Guesses you have: " + noOfGuesses);
		inquirer.prompt([
			{
				name: "question",
				message: "What letter is in your mind?",
				validate: validateString
			}
		]).then(function(answer) {
			var guessedLetter = answer.question;

			var alreadyGuessed = false;
			for (var i = 0; i < lettersGuessed.length; i++) {
				if (guessedLetter === lettersGuessed[i]) {
					alreadyGuessed = true;
					break;
				}
			}

			if (alreadyGuessed) {
				console.log("You have already guessed this letter. Try again.");
			} else {
				noOfGuesses--;
				lettersGuessed.push(guessedLetter);

				newWord.checkIfCorrect(answer.question);
			}


			askQuestion();

		});
	} else {
		console.log("Nil guesses left. Try again.")
	};
};

askQuestion();


function validateString(char) {
	if (char.match(/[A-Z]/gi)) {
		return true;
	} else {
		console.log("Please enter a valid letter from a - z");
	}
};


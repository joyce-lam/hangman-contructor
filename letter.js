var inquirer = require("inquirer");





var word = "joyce";
var count = 0;

var askQuestion = function() {
	if (count < word.length) {
		inquirer.prompt([
			{
				name: "question",
				message: "What letter would you want to guess?"
			}
		]).then(function(answers) {
			var newLetter = new Letter(answers.question);

			newLetter.check();
			count++;
			askQuestion();
		});
	};
};

askQuestion();



function Letter(guessLetter) {

	var guessArr = [];

	this.guessLetter = guessLetter;
	this.guessOrNot = false;
	this.check = function() {
		if (this.guessOrNot === false) {
			console.log("now guessing: " + this.guessLetter);
			for (var i = 0; i<word.length; i++) {
				if (this.guessLetter === word[i]) {
					console.log("correct!")
					guessArr[i] = this.guessLetter;
				} else {
					console.log("Incorrect")
					guessArr[i] = "_";
				}
			}
			console.log(guessArr);
			this.guessOrNot = true;
		}; 
	};
};
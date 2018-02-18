

var Letter = require("./letter");

function Word(letters) {
	this.letters = letters;

 // 		var newLetter = new Letter(character);
	// this.characters = [];

	this.display = function() {
		var s = "";
		for (var i = 0; i < this.letters.length; i++) {
			var letter = this.letters[i];
			s += letter.checkIfGuessed() + " "
		}
		return s;
	}

	this.checkIfCorrect = function(guessCharacter) {
		
	}

	this.showIfGuessed = function(characters) {
		var concatLetters;
		for (var i = 0; i < this.characters.length; i++) {
			concatLetters += newLetter.checkIfGuessed(this.characters[i]);
		}
		console.log("xyz" + concatLetters);
	};
	this.correctOrNot = function(character) {
		newLetter.checkIfCorrect();
	};
	// this.addLetters = function(character) {
	// 	this.characters.push(newLetter);

	// };
}


var WordA = new Word();

WordA.addLetters("b");
WordA.addLetters("c")

console.log(WordA);

WordA.showIfGuessed();
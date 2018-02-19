var Letter = require("./letter");

function Word(letters) {
	this.letters = letters;
	this.display = function() {
		var concatLetters = "";
		for (var i = 0; i < this.letters.length; i++) {
			var letter = this.letters[i];
			concatLetters += letter.checkIfGuessed() + " ";
		}
		return console.log(concatLetters);
	};
	this.checkIfCorrect = function(guessCharacter) {
		for (var i = 0; i < this.letters.length; i++) {
			this.letters[i].checkIfCorrect(guessCharacter);
		};
	};
};

module.exports = Word;


var Letter = require("./letter");

function Word(letters) {
	this.letters = letters;
	this.display = function() {
		var concatLetters = "";
		for (var i = 0; i < this.letters.length; i++) {
			var letter = this.letters[i];
			concatLetters += letter.toStr() + " ";
		}
		return console.log(concatLetters);
	};
	this.checkIfCorrect = function(guessCharacter) {
		for (var i = 0; i < this.letters.length; i++) {
			this.letters[i].checkIfCorrect(guessCharacter);
		};
	};
	this.isComplete = function() {
		for (var i = 0; i < this.letters.length; i++) {
			if (!this.letters[i].isGuessed()) {
				return false;
			}
		}
		return true;
	};
};

module.exports = Word;


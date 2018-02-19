function Letter(character) {
	this.character = character;
	this.guessed = false;
	this.checkIfGuessed = function() {
		if (this.guessed === true) {
			return this.character;
		} else {
			return "_";
		}
	};
	this.checkIfCorrect = function(guessCharacter) {
		if (guessCharacter === this.character) {
			this.guessed = true;
			this.checkIfGuessed();
		}; 
	};
};


module.exports = Letter;
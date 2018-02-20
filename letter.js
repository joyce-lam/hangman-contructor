function Letter(character) {
	this.character = character;
	this.guessed = false;
	this.toStr = function() {
		if (this.guessed === true) {
			return this.character;
		} else {
			return "_";
		}
	};
	this.isGuessed = function() {
		return this.guessed;
	};
	this.checkIfCorrect = function(guessCharacter) {
		if (guessCharacter === this.character) {
			this.guessed = true;
		}; 
	};
};

module.exports = Letter;
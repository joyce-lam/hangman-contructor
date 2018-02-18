
function Letter(character) {

	this.character = character;
	this.guessed = false;
	this.checkIfGuessed = function() {
		if (this.guessed === true) {
			console.log(this.character);
			return this.character;
		} else {
			return "_";
		}
	};
	this.checkIfCorrect = function(guessCharacter) {
		if (guessCharacter === this.character) {
			this.guessed = true;
			console.log("Correct");
		} else {
			console.log("Incorrect");
		}
	}
};



module.exports = Letter;
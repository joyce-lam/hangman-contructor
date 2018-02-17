


function Letter(character) {

	this.character = character;
	this.guessed = false;
	this.checkGuess = function() {
		if (this.guessed === true) {
			console.log(this.character);
			return this.character;
		} else {
			console.log("_")
			return "_";
		}
	};
	this.checkCorrect = function(guessCharacter) {
		if (guessCharacter === this.character) {
			this.guessed = true;
			console.log("Correct");
		} else {
			console.log("Incorrect");
		}
		return this.guessed;
	}
};

var letterA = new Letter("a");

console.log(letterA.guessed);
letterA.checkGuess();
console.log(letterA.checkCorrect("a"));

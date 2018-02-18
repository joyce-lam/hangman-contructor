


function Letter(character) {

	this.character = character;
	this.guessed = false;
	this.checkIfGuessed = function() {
		if (this.guessed === true) {
			console.log(this.character);
			return this.character;
		} else {
			console.log("_")
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

// var letterA = new Letter("a");

// console.log(letterA.guessed);
// letterA.checkIfGuessed();
// console.log(letterA.checkIfCorrect("a"));


// var Arr = ["a", "b", "c"];
// var concatLetters;
// for (var i = 0; i < Arr.length; i++) {
// 	concatLetters += Letter.checkIfGuessed(Arr[i]);
// }
// console.log(concatLetters);

module.exports = Letter;
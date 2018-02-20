# hangman-contructor
A hangman command-line game using constructor functions.

## Getting Started
### Prerequisities 
In order to run this hangman game, you also need to install the following Node package.
* [Inquirer](https://www.npmjs.com/package/inquirer)

### Instructions
1. In terminal, go to your project and run `npm init -y` which can initialize a `package.json` file for your project. 

2. Make 3 javascript files.
(1) letter.js
	* This file contains a constructor, Letter. 
	* The constructor defines a string value which stores the undelying character for the letter, a boolean value which stores whether the letter has been guesses yet, a function which returns the underlying character if teh letter has been guesssed or a placeholder if the letter has not been guessed, and a function which takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly. 

(2) word.js
	* This file contains a constructor, Word, which depends on the Letter constructor.
	* The constructor defines an array of new Letter objects representing the letters of hte underlyign word, a function which returns a string representing the word, and a function which takes a character as an argument and calls the guess function on each letter onject.

(3) index.js
	* This file contains the logic for the game.
	* A random word is selected and the Word constructor is used to store it. The user will be prompted for each guess. 

## Built With
* Node.js
* Npm Inquirer.js 
* JavaScript


## License
This porject is licensed under the MIT License - see the [https://github.com/joyce-lam/hangman-contructor/blob/master/LICENSE](LICENSE.md) file for details.
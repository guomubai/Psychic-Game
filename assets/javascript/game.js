// First, let's set out a variable for the list of words that we need - it's gonna be an array
var wordbank = ["Doug", "Ren", "Stimpy", "Rugrats", "Rocko", "Tommy", "Chuckie", "Porkchop", "Skeeter"]
// Now, the computer will choose a random word from the wordbank, and set it to the variable "word"
var word = wordbank[Math.floor(Math.random() * wordbank.length)]
// Then, I console log the word to make sure the computer guesses one. This is also how to enable "cheat mode" :o
console.log("Computer picks as a word: " + word);

// Let's set oout the maximum amount of tries a player can get. This is basically the buildup to the drawing of the hangman. Once the player uses up ten tries, they lose the game
var maxTries = 10;
// Number of wins
var wins = 0;
// Number of losses
var loss = 0;
// to keep track of the letters you typed
var guessedLetters = [];
// Let's create the empty array that will hold the "_"
var answerArray = [];
// Now we will look through this to create the lines that ween need
for (i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}
// log it out to check - I did and it wors. I origianlly had this as answerArray[i] but obviously that does not work becasue it would be logging only 
console.log("Here is the array" + answerArray);

// then we set out the remining letters so that we keep track of how many letters are left to be guessed. It will go down by 1 for each instant of that letter in the word
var remainingLetters = word.length;

// setting out the variable for the user guess
var userGuess;

// when you press a key. . .
document.onkeyup = function (event) {
	var userGuess = event.key;
	// log that key to make sure
	console.log(userGuess)

// I am trying the below out, so iff 

	for (var j = 0; j < word.length; j++) {
		if (word[j] === userGuess) {
			answerArray[j] = userGuess;
			remainingLetters--;
			conmsole.log(word);
			console.log(answerArray)
		}
	}
}

// // testing to see if this works --- it did not, so I commented it out
// if (remainingLetters > 0) {
	
// // testing here
// alert(answerArray.join(" "));

// }

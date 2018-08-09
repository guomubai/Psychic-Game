// First, let's set out a variable for the list of words that we need - it's gonna be an array
var wordbank = ["Doug" , "Ren" , "Stimpy" , "Rugrats" , "Rocko", "Tommy", "Chuckie", "Porkchop", "Skeeter"]

// Now, the computer will choose a random word from the wordbank, and set it to the variable "word"
var word = wordbank[Math.floor(Math.random() * wordbank.length)]

// Then, I console log the word to make sure the computer guesses one. This is also how to enable "cheat mode" :o
console.log(word);

// Next thing we do is make the list of "_" for the gameboard
var lines = [];
for (i = 0; i < word.length; i++) {
	lines[i] - "_";
	// log it as well to seee if the lines are coming through
	console.log(lines)
}

// Then we set out the variable that will tell us how many letters are left on on the word they are guesses. We know that whatever it is, it is the length of the word that was picked
var lettersLeft = word.length;



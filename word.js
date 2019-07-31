// Word.js should only require Letter.js

var Letter = require("./letter");


// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting to guess. 

// That means the constructor should define:

var Word = function(selectedWord){
    // An array of new Letter objects representing the letters of the underlying word
    this.lettersOfSelectedWord = []; 

    //pushing every result from the Letter contructor of selected word 
    for(var i=0; i<selectedWord.length; i++){
        var eachLetter = new Letter (selectedWord[i]);
        this.lettersOfSelectedWord.push(eachLetter);            
    }
       

    // A function that returns a string representing the word. This should call the function on each letter object
    // (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.displayWord = function(){

        var wordToLog  = this.lettersOfSelectedWord.join(" ");

        return wordToLog;
    }


// A function that takes a character as an argument and calls the guess function on each letter object (
//     the second function defined in Letter.js)
    this.guess = function(guessTaken) {

    for (var i = 0; i < this.lettersOfSelectedWord.length; i++) {
      this.lettersOfSelectedWord[i].guessedCorrectly(guessTaken);
    }
  };
}

module.exports = Word;


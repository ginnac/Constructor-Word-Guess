// Word.js should only require Letter.js

var Letter = require("./letter");
var inquirer = require("inquirer")

// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting to guess. 

// That means the constructor should define:

var Word = function(selectedWord){
    // An array of new Letter objects representing the letters of the underlying word
    var lettersOfSelectedWord = []; 
       

    // A function that returns a string representing the word. This should call the function on each letter object
    // (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.displayWord = function(){

        //pushing every result from the Letter contructor of selected word 
        for(var i=0; i<selectedWord.length; i++){
            var eachLetter = new Letter (selectedWord[i]);
            lettersOfSelectedWord.push(eachLetter);            
        }

        var wordToLog  = lettersOfSelectedWord.join(" ");

        return " " + wordToLog
    }
}

// A function that takes a character as an argument and calls the guess function on each letter object (
//     the second function defined in Letter.js)
    this.guess = function(guessTaken) {
    for (var i = 0; i < this.lettersOfSelectedWord.length; i++) {
      this.lettersOfSelectedWord[i].guessedCorrectly(guessTaken);
    }
  };


var questions = [
    {
      type: 'input',
      name: 'word',
      message: 'Guess a Letter!',
      default: "",
    }, ]

inquirer
  .prompt(questions)
  .then(answers => {
    // Use user feedback for... whatever!!


    var resultGuessed = new Word("carros").displayWord();
  


    console.log(resultGuessed + "");
  });
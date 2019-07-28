var inquirer = require('inquirer');

// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an 
//underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 
//That means the constructor should define:

var Letter = function(letterToGuess){   

// A string value to store the underlying character for the letter
this.letterToGuess = letterToGuess;

// A boolean value that stores whether that letter has been guessed yet
this.guessedBefore = false;

// A function that returns the underlying character if the letter has been guessed, 
//or a placeholder (like an underscore) if the letter has not been guessed

  // HINT: If you name your letter's display function toString, JavaScript will call that function automatically 
  // whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)

this.redeemResults = function() {
  if(this.letterToGuess=== " "){
    this.guessedBefore === true;
    return " "
  }

  else if(this.guessedBefore===false){
    return "_";
  }
  else{
     return this.letterToGuess }
};

// A function that takes a character as an argument and checks it against the underlying character, 
//updating the stored boolean value to true if it was guessed correctly 
this.guessedCorrectly = function(caracterGuessed){
  if(characterGuessed === this.letterToGuess){
    this.guessedBefore = true; 
  }
};

}
  


// Letter.prototype.toString = function() {
//   var toDisplay = "Letter Guessed is: " + this.guessedLetter;
//   console.log(toDisplay);

//   if(this.guessedCorrectly) {
//     return "You Guessed Correctly! " +  this.guessedLetter.toUpperCase();
//   }
  
//   return "You did not guessed correctly";
// }



// Letter.js should not require any other files.
// HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js




var questions = [
    {
      type: 'input',
      name: 'letter',
      message: 'Guess a Letter!',
      default: "",
    }, ]

inquirer
  .prompt(questions)
  .then(answers => {
    // Use user feedback for... whatever!!


    var resultGuessed = new Letter(answers.letter);
  


    console.log(resultGuessed + "");
  });

  // Exporting our Letter constructor. We will require it in word.js
module.exports = Letter;
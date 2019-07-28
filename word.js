// Word.js should only require Letter.js

var Letter = require("./letter");

// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting to guess. 
// That means the constructor should define:

var word = function(){
    // An array of new Letter objects representing the letters of the underlying word
    var arrayOfLettersGuessed = []; 

    this.arrayOfLettersGuessed.push(new Letter(gender, name, role))
    // A function that returns a string representing the word. This should call the function on each letter object
    // (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

    var puzzleWord = function(){

    }


}




// A function that takes a character as an argument and calls the guess function on each letter object (
//     the second function defined in Letter.js)
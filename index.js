// index.js: The file containing the logic for the course of the game, which depends on Word.js and:


var inquirer = require("inquirer");
var Word = require("./word");
// Randomly selects a word and uses the Word constructor to store it

var songs= ["despacito", "calma", "sin ti" ]

var randomSongIndex = Math.floor(Math.random()*songs.length);

//getting random song 
var randomSong = songs[randomSongIndex];
// Prompts the user for each guess and keeps track of the user's remaining guesses


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
    // Use user feedback for... whatever!!\754
    var resultGuessed = new Word(randomSong).displayWord();
  


    console.log(resultGuessed);
  });





// index.js: The file containing the logic for the course of the game, which depends on Word.js and:


var inquirer = require("inquirer");
var Word = require("./word");
// Randomly selects a word and uses the Word constructor to store it

var songs= ["despacito", "calma", "sin ti" ]

var randomSongIndex = Math.floor(Math.random()*songs.length);

//getting random song 
var randomSong = songs[randomSongIndex];

var guessesremaining = songs.length + 5; 

//get the guess from user and pass it to the word object 

var randomSongString = new Word(randomSong);

// functionality


    //start the game...
    function startGame(){
        //pass the response and run word to displayWord function it will return the underscors for the selected song: 
        return console.log(randomSongString.displayWord());
    }
//function going to reset the game if remaining guesses is 0 


    //function to check if letter is correct or not 

    function verifyLetter(){
        //check if letter is correct
        

        //console.log the word with underscores and letter that have been guessed so far
    }

    
    //function to verify if the user won

// if number of guessesremaining >0  it will keep prompting and giving chance to guess a letter of the same word

if (guessesremaining > 0){
 
//start with prompting
    var questions = [
        {
            type: 'input',
            name: 'word',
            message: 'Guess a Letter!',
            default: "",
        },]

    inquirer
    .prompt(questions)
    .then(answers => {

        //take response from prompting and do this: 
        var toLog = answers.word

        if(guessesremaining = songs.length + 5){
            startGame();
        }  

            // stablish if letter is correct or not...



    console.log(toLog);
  });   



    
    






}


else{}

// Prompts the user for each guess and keeps track of the user's remaining guesses







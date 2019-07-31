// index.js: The file containing the logic for the course of the game, which depends on Word.js and:
var inquirer = require("inquirer");
var Word = require("./word");
// Randomly selects a word and uses the Word constructor to store it

var songs= ["despacito", "calma", "sin ti" ]

var randomSongIndex = Math.floor(Math.random()*songs.length);

//getting random song 
var randomSong = songs[randomSongIndex];

var guessesRemaining= 10; 

//get the guess from user and pass it to the word object 

var randomSongString = new Word(randomSong);

var choseNewWord = false;

var playAgain = false;


// functionality

//algorithm function to choose a new word if it is needed, this same function runs the other 3 functions (StartGame, verifyLetter and WinOrLose)
//those functions will run if the answers parameter is defined.
    function algorithm(answers){

        if (choseNewWord){

            outcomeArray= [];
            randomSongArray = [];
            randomSongIndex = Math.floor(Math.random()*songs.length);
        
            //getting random song 
             randomSong = songs[randomSongIndex];
            
            guessesRemaining= 10; 

            //getting constructor function again;
        
            randomSongString = new Word(randomSong);

            choseNewWord=false;
            startGame(randomSongString);
        
         } 

         if(answers!==undefined){

         //take response from prompting and do this: 
         var toLog = answers.word

         verifyLetter(toLog,randomSongString);
         
         console.log("Guesses Remaining: " + guessesRemaining + "\n\n");

         winOrLose(randomSong,randomSongString);

         }        
        }


    //start the game  - to display the underscores of the word, meant to be used when there is a new word.
    function startGame(randomSongString){
        
        //pass the response and run word to displayWord function it will return the underscors for the selected song: 
        return console.log(randomSongString.displayWord());
    }



    //function to check if letter is correct or not - the word constructor is being passed in this function.

    function verifyLetter(toLog,randomSongString){

        //determine if user guessed sucessfully or no
        var preGuess = randomSongString.displayWord();
        //check if letter is correct
        randomSongString.guess(toLog);

        //after running te guess function...

        var postGuess = randomSongString.displayWord();


        //conditional to reduce remaining Guesses or not: 

        if (preGuess===postGuess){
            console.log("incorrect Guess");
            guessesRemaining--;
        }

        else{
            console.log("Correct Guess!");
        }

        //console.log the word with underscores and letter that have been guessed so far
        return console.log(postGuess);
    
    }

//store guesses from the player, and then prompt responses with the answers stored.
var play = function(){

    if(guessesRemaining > 0){

        if(choseNewWord && playAgain === false){
                console.log("You got it! Next Word!");
                algorithm();
        }

        if(choseNewWord && playAgain){
                algorithm();
        }
 
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
            
                algorithm(answers);

                play(); 

               
              });   

        }

    else {
        //function going to reset the game if remaining guesses is 0 
        console.log("game is over!");

        var questions = [
            {
                type: 'list',
                name: 'settings',
                message: 'Choose an option',
                choices: ["EXIT", "PLAY"],
            },]
    
        inquirer
        .prompt(questions)
        .then(answers => {

        
    
            if (answers.settings === "EXIT"){
                console.log("You Selected "+answers.settings + " Bye Bye!");
                
            } 

            else{
                console.log("\n \n---------------------\n \n Let's Play Again!");
                choseNewWord = true;
                playAgain = true;
                guessesRemaining=10;
                play();
                
            }
      });   

    }

}

play();
startGame(randomSongString);


var outcomeArray= [];

var randomSongArray = [];



//function to verify if the player won or not...

function winOrLose(randomSong,randomSongString){


    outcomeArray = [];

    randomSongArray = [];



    var shotOutcome = randomSongString.displayWord().split('');
    
    for (var i=0;i<shotOutcome.length;i++){

    if (shotOutcome[i]!==" "){
      outcomeArray.push(shotOutcome[i])
        }
    };

   
    var randomSongOutCome = randomSong.split("");

    for (var i=0;i<randomSongOutCome.length;i++){

        if (randomSongOutCome[i]!==" "){
          randomSongArray.push(randomSongOutCome[i])
            }
        };

    //decide if the player won, changing booleans
    if (outcomeArray.length > 0 && outcomeArray.join("") === randomSongArray.join("")){
    
        choseNewWord=true;
        playAgain = false;
    }

}







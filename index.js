const Word = require("./word.js");
var inquirer = require("inquirer");

let playTime = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard",
    "Squirtle", "Wartortle", "Blastois",
    "Pidgey", "Pidgeotto", "Pidgeot",
    "Pikachu", "Raichu",
    "Jigglypuff", "Wigglytuff",
]

var remainingGuesses = 10;
var lettersGuessed = [];
var alreadyUsed = [];
var startGame = true;


function iChooseYou() {
    let randomPoke = new Word(playTime[Math.floor(Math.random() * playTime.length)])

    askUser(randomPoke);

}

iChooseYou();

function askUser(pokemon) {
    if (remainingGuesses > 0 && pokemon.showWord().indexOf("_") !== - 1) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Who's that Pokemon?",
                    name: "pokeplayer"
                },
            ])
            .then(function (answer) {
                if (pokemon.initialWord.includes(answer.pokeplayer)) {
                    console.log("correct");
                    pokemon.guess(answer.pokeplayer);
                    // pokemon.showWord();
                    askUser(pokemon);
                }
                else {
                    console.log("Sorry, try again trainer!");
                    remainingGuesses--;
                    pokemon.guess(answer.userInput);
                    // pokemon.showWord();
                    console.log('You have ' + remainingGuesses + ' Pokeballs left. ');
                    askUser(pokemon)
                }
            })
    }

    function playAgain() {
        inquirer.prompt([
            {
                type: "confirm",
                name: "confirm",
                message: "Would you like to play again?",
                default: true
            }
        ])
            .then(function (user) {
                if (user.confirm) {
                    startGame = true;
                    lettersGuessed = [];
                    remainingGuesses = 10;
                    iChooseYou();
                    askUser();
                    startGame();
                    if (alreadyUsed.length === playTime.length) {
                        alreadyUsed = [];
                    }
                }
            })

       
    }



}
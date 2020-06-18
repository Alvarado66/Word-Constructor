const Word = require("./word.js");
var inquirer = require("inquirer");

let playTime = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard",
    "Squirtle", "Wartortle", 
    "Blastois", "Pidgey", "Pidgeotto", "Pidgeot",
    "Pikachu", "Raichu", "Jigglypuff", "Wigglytuff",
]

function iChooseYou() {
    let randomPoke = new Word(playTime[Math.ceil(Math.random() * playTime.length -1 )])
} 
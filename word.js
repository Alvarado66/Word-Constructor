// gets the exported file called [letter]
const Letter = require("./letter")
// This is the constructor for the word(s)
const Word = function (initialWord) {
    this.letterArr = []
    // Changes the word into an array
    this.initialWord = initialWord
    for (let i = 0; i < initialWord.length; i++) {
        const character = initialWord[i];
        let newLetter = new Letter(character)
        this.letterArr.push(newLetter);
    }
    
    // Displays this word
    this.showWord = function () {
        let word = [];

        for (let i = 0; i < this.letterArr.length; i++) {
            if (this.letterArr[i] !== " ") {
                let letterStr = this.letterArr[i].guessed();
                word.push(letterStr);
            }
            else {
                word.push(" ");
            }
        }
        // Displays as a string
        console.log (word.join(" "));
        return word.join(" ");
    }

    this.guess = function(userInput) {
        for (let i = 0; i < this.letterArr.length; i++)
            this.letterArr[i].input(userInput)

    }
}

module.exports = Word;
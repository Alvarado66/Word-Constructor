const Letter = require("./letter")

const Word = function (initialWord) {
    this.letterArr = []

    for (let i = 0; i < initialWord.length; i++) {
        const character = initialWord[i];
        let newLetter = new Letter(character)
        this.letterArr.push(newLetter);
    }
    console.log(this.letterArr)

    this.showWord = function() {
        let word = [];
    
        for(let i = 0; i < this.letterArr.length; i++) {
            if(this.letterArr[i] !== " "){
                let letterStr = this.letterArr[i].guessed();
                word.push(letterStr);
            } 
            else{
                word.push(" ");
            }
        }
        console.log(word.join(" "));
    }

}

module.exports = Word;
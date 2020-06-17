const Letter = require("./letter")

const Word = function (initialWord) {
    this.letterArr = []

    for (let i = 0; i < initialWord.length; i++) {

        const character = initialWord[i];

        let newLetter = new Letter(character)
        this.letterArr.push(newLetter);
    }

    /* initialWord.split("").forEach(character => {
         let newLetter = new Letter(character)
         this.letterArr.push(newLetter)
     });*/

    console.log(this.letterArr)
}

this.showWord = function() {
    let word = [];

    for(let i = 0; i < this.letterArr.length; i++) {
        if(this.letterArr[i] !== " "){
            let letterStr = this.letterArr[i].showWord();
            word.push(letterStr);
        } 
        else{
            word.push(" ");
        }
    }

}
const myWord = new Word("cat")
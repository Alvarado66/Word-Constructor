const Letter = function(char) {
    this.char = char;
    this.used = false;
    this.guessed = function() {
        if (this.used){
            return char
        }
        else {
            return "_";
        }
    }

   this.input = function(userInput) {
       if (userInput === char){
           this.used = true;
       }
   }
}

module.exports = Letter;

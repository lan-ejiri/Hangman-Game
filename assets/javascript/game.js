//define default variables
var wordBank = ["pizza", "hamburger", "hotdog","soda", "tacos"];
var wins = 0;
var losses = 0;
var guessesleft = 5;
var computerWord;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arr3 = "_";


//function: computer chooses a random letter
function chooseWord() {
    computerWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    //print to log just in case
    console.log(computerWord);
    return computerWord;
};

//sets up the blanks
function blanksarray(word) {
    var blanksArray = [];
    for (var i = 0; i < word.length; i++) {
        blanksArray.push("_");
    };
    return blanksArray;
};

// This function is run whenever a key is pressed
document.onkeyup = function(event) {

    // Determines which key was pressed.
    keyPress = event.key.toLowerCase();

    //if press is space, pick a new word
    if(keyPress == " "){
        chosenWord = chooseWord();
        arrayForWord = blanksarray(chosenWord);
        var arr1 = arrayForWord.join(' ');
        document.getElementById("guesses").innerHTML = " ";
        document.getElementById("blanks").innerHTML = arr1 ;
    }

    //if press is a valid letter
    else if (alphabet.includes(keyPress)) {

        
        //if letter is in the word:
        if (chosenWord.includes(keyPress)){  

            //turns the chosen word into an array
            var chosenWordAsArray = chosenWord.split("");
            var arr2 = chosenWordAsArray.join(' ');
            console.log("chosen word as array: " + arr2);
        
            // gets all the indexes of the letter
            var indexes = [], i;
            for(i = 0; i < chosenWordAsArray.length; i++) {
                if (chosenWordAsArray[i] === keyPress) {
                    indexes.push(i);    
                }
            }

            //just to see if the index thing is workin
            console.log("indexes: " +   indexes);

            for ( i = 0; i < indexes.length; i++){
                arrayForWord[indexes[i]]= keyPress;
            }
            arr3 = arrayForWord.join(' ');
            console.log("updated blanks array " + arr3);
            document.getElementById("blanks").innerHTML = arr3 ;
        }

        //if valid letter is not in the word
        else {
            alert("sorry that letter is not in this word"); document.getElementById("guesses").innerHTML+= keyPress + " " ;
            guessesleft = guessesleft - 1;
            document.getElementById("guessesleft").innerHTML = guessesleft;
        }

        if (arr3.includes("_")) {
    
        }
        
        else {
            alert("You win! Press space to generate a new word.");
            wins++;
            document.getElementById("wins").innerHTML = wins;
            guessesleft = 5;
            arr3 = "_";
            chosenWord = "";
        }

        if (guessesleft <= 0) {
        alert("Sorry you ran out of guesses, you lose! Press Space to play again!");
        losses++;
        chosenWord = "";
        document.getElementById("losses").innerHTML = losses;
        }

    }

    else {
        alert("That is not a valid letter. Please pick a valid letter");
    }
}

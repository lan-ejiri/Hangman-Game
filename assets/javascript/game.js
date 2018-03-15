//define default variables
var wordBank = ["pizzas", "spaghetti", "water"];
var wins = 0;
var losses = 0;
var guessesleft = 5;
var computerWord;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//function: computer chooses a random letter
function chooseWord() {

    computerWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    //print to log just in case
    console.log(computerWord);
    console.log(computerWord.length);

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
    console.log(keyPress);

    //if press is space
    if(keyPress == " "){
        chosenWord = chooseWord();
        arrayForWord = blanksarray(chosenWord);
        console.log(arrayForWord);
        document.getElementById("guesses").innerHTML = " ";
        document.getElementById("blanks").innerHTML = arrayForWord ;
    }


    //if press is letter
    else if (alphabet.includes(keyPress)) {

        if (chosenWord.includes(keyPress)){ 
            alert("correct");  

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

            console.log("indexes: " +   indexes);

            for ( i = 0; i < indexes.length; i++){
                arrayForWord[indexes[i]]= keyPress;
            }
            var arr3 = arrayForWord.join(' ');
            console.log("updated blanks array " + arr3);
            document.getElementById("blanks").innerHTML = arr3 ;

    
        }

        else {
            alert("sorry that letter is not in this word"); document.getElementById("guesses").innerHTML+= keyPress + " " ;
        }
    }

    else {
        alert("That is not a valid letter. Please pick a valid letter");
        
    }
}       



var dataset = [2,2,4,2,6,4,7,8];
var results = [];
for ( i=0; i < dataset.length; i++ ){
    if ( dataset[i] == 2 ){
        results.push( i );
    }
}

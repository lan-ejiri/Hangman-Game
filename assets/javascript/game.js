//define default variables
var wordBank = ["pizzas", "spaghetti", "water"];
var wins = 0;
var losses = 0;
var guessesleft = 5;

//function: computer chooses a random letter
function chooseWord() {

    var computerWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    //print to log just in case
    console.log(computerWord);
    console.log(computerWord.length);
};


//sets up the blanks
function blanksarray(word) {

    var blanksArray = [];

    for (var i = 0; i < word.length; i++) {
        blanksArray[i] = "_";
    };

    return blanksArray;
};

//space to pick a word
// document.body.onkeyup = function spaceToBegin(e){
//     if(e.keyCode == 32){
//         chooseWord();
//     }
// }





// // This function is run whenever a key is pressed
// document.onkeyup = function(event) {

//  // Determines which key was pressed.
//     keyPress = event.key;

//     if(keyPress.keyCode == 32){
//         chooseWord();
//     }



//     else if (computerWord.includes(keyPress)) {
//         alert("correct");   
//     }

//     else {
//         alert("no!");
//         document.getElementById("guesses").innerHTML+= keyPress + " " ;
//     }
// }       
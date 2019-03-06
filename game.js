//computer choices
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m"
,"n","o","p","q","r","s","t","u","v","w","x","y","z"];

//variable lists and store info for wins 
var wins = 0;
var losses = 0;
var guesses = 9;


document.onkeyup = function() {

    var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();
    console.log(userGuess);

 //fill in line here  kat

 //computer guesses
 var computerGuess = letters[Math.floor(Math.random()*letters.length)]; 


 console.log(computerGuess);

 if(userGuess == computerGuess){
    wins++;
    
}else{
    guesses--;
}

if(guesses == 0){
    losses++
    guesses =9;
}

document.getElementById('wins').innerHTML = " " + wins;
document.getElementById('losses').innerHTML = "" + losses;
document.getElementById('guesses').innerHTML = "" + guesses;
document.getElementById('userGuess').innerHTML = "" + userGuess;


}
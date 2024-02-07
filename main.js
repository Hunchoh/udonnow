var randomNumber = Math.floor(Math.random() * 6) + 1;
 
var randomDice = "dice" + randomNumber + ".png";

var randomDiceSource = "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDicee = "dice" + randomNumber2 + ".png";

var randomDiceSource2 = "images/" + randomDicee;

document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2)

if (randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}else if(randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = "player 2 wins";
}else{
    document.querySelector("h1").innerHTML ="Draw";
}
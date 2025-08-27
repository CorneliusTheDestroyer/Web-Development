var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var img1 = document.getElementsByClassName("img1");
var img2 = document.getElementsByClassName("img2");
var heading = document.querySelector("h1");  

img1[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
img2[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");

heading.textContent = "New Heading!";

if (randomNumber1 > randomNumber2) {
    heading.textContent = "Player One Wins!";
}    
if (randomNumber1 < randomNumber2) {
    heading.textContent = "Player Two Wins!";
} 
if (randomNumber1 === randomNumber2) {
    heading.textContent = "Draw!";
} 
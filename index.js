//Player1
var randomNumber1 = Math.floor(Math.random()*6) +1; //nje numer rasti nga 1-6
var random_src1 = "images/dice"+ randomNumber1 +".png"; //zari ri
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", random_src1);

//Player2
var randomNumber2 = Math.floor(Math.random()*6) +1; //nje numer rasti nga 1-6
var random_src2 = "images/dice"+ randomNumber2 +".png"; //zari ri
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", random_src2);

//Who won the game?
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins!🚩"
}
else {
  document.querySelector("h1").innerHTML = "Draw!"
}

var n1 = Math.random();
var n2 = Math.random();
n1 = n1*6;
n2 = n2*6;
var player1 = Math.floor(n1);
var player2 = Math.floor(n2);
var array = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
document.querySelector(".img1").setAttribute("src", array[player1]);
document.querySelector(".img2").setAttribute("src", array[player2]);
if(player1 > player2)
{
  document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if(player2 > player1)
{
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
else if(player1 === player2){
  document.querySelector("h1").textContent = "Draw!";
}

setTimeout(rolldice,1800);

function rolldice(){
var randomnumber1 = Math.floor(Math.random()*6)+1;
if(randomnumber1===1){
  document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice1.png");
}
if(randomnumber1===2){
  document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice2.png");
}
if(randomnumber1===3){
  document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice3.png");
}
if(randomnumber1===4){
  document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice4.png");
}
if(randomnumber1===5){
  document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice5.png");
}
if(randomnumber1===6){
  document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice6.png");
}
var randomnumber2 = Math.random();
randomnumber2*=6;
randomnumber2++;
randomnumber2 = Math.floor(randomnumber2);
if(randomnumber2===1){
  document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice1.png");
}
if(randomnumber2===2){
  document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice2.png");
}
if(randomnumber2===3){
  document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice3.png");
}
if(randomnumber2===4){
  document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice4.png");
}
if(randomnumber2===5){
  document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice5.png");
}
if(randomnumber2===6){
  document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice6.png");
}
if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML = "🎌 Player 1 Wins";
}
if(randomnumber2>randomnumber1){
  document.querySelector("h1").innerHTML = "🎌Player 2 Wins";
}
if(randomnumber1===randomnumber2){
  document.querySelector("h1").innerHTML = "Draw 🏳️";
}
}
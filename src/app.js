/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const SPADE = "&spades;";
const CLUB = "&clubs;";
const HEART = "&hearts;";
const DIAMOND = "&diams;";
const REDCOLOR = "red";
const BLACKCOLOR = "black";

const A = "A";
const J = "J";
const Q = "Q";
const K = "K";

let suitCardArray = [SPADE, CLUB, HEART, DIAMOND];

let numbersArray = [A, "2", "3", "4", "5", "6", "7", "8", "9", "10", J, Q, K];
let cardColor = REDCOLOR;

window.onload = function loadPage() {
  cardGenerate();
};

function cardGenerate() {
  let numberCard1 = document.getElementById("suitCard1");
  let numberCard2 = document.getElementById("suitCard2");
  let numberCardMain = document.getElementById("numberCardMain");

  let randomNumberCard = getRandomSuitCard();

  numberCard1.innerHTML = randomNumberCard;
  numberCard2.innerHTML = randomNumberCard;

  // Se ajusta el color de la carta y el palo, dependiendo el palo obtenido.
  if (randomNumberCard === HEART || randomNumberCard === DIAMOND) {
    cardColor = REDCOLOR;
  } else {
    cardColor = BLACKCOLOR;
  }

  numberCardMain.innerHTML = getRandomNumberCard();

  numberCard1.style.color = cardColor;
  numberCard2.style.color = cardColor;
  numberCardMain.style.color = cardColor;
}

function getRandomSuitCard() {
  return suitCardArray[Math.floor(Math.random() * suitCardArray.length)];
}

function getRandomNumberCard() {
  return numbersArray[Math.floor(Math.random() * numbersArray.length)];
}

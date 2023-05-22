/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let suits = [
    '<i style="color: red">♥</i>',
    "<i>♠</i>",
    "<i>♣</i>",
    '<i style="color: red">♦</i>'
  ];

  let suitResult = suits[Math.floor(Math.random() * suits.length)];
  document.querySelectorAll(".topSuit")[0].innerHTML = suitResult;
  document.querySelectorAll(".topSuit")[1].innerHTML = suitResult;

  let cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];

  let cardResult = cardValue[Math.floor(Math.random() * cardValue.length)];
  document.getElementById("valueCard").innerHTML = cardResult;
};

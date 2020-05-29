var randomNumber1 = Math.floor(6 * Math.random()) + 1;

var imagename1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", imagename1);

var randomNumber2 = Math.floor(6 * Math.random()) + 1;

var imagename2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", imagename2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
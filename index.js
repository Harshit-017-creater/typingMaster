window.addEventListener("load", init);

let wordInput = document.getElementById("word-input");
// console.log(wordInput);
let currentWord = document.getElementById("current-word");
// console.log(currentWord);
let scoreDisplay = document.getElementById("score");
// console.log(scoreDisplay)
let timeDisplay = document.getElementById("time");
// console.log(timeDisplay)
let message = document.getElementById("message");
// console.log(message);

let levels = {
	easy: 5,
	medium: 3,
	hard: 1,
};

let currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isplaying;
// boolean variable

const words = [
	"hat",
	"river",
	"lucky",
	"statue",
	"stubborn",
	"cocktail",
	"runaway",
	"joke",
	"developer",
	"establishment",
	"hero",
	"javascript",
	"nutrition",
	"revolver",
	"echo",
	"siblings",
	"investigate",
	"horrendous",
	"symptom",
	"laughter",
	"magic",
	"master",
	"space",
	"defintion",
];

function init() {
	showWord(words);
	// second.innerHTML = currentLevel;
	wordInput.addEventListener("input", startMatch);
	setInterval(countdown, 1000);
	setInterval(checkStatus, 50);
}

function checkStatus() {
	if (!isplaying && time === 0) message.innerHTML = "Game Over!!!";
}

function countdown() {
	if (time > 0) {
		time--;
	} else if (time == 0) {
		time = 0;
		isplaying = false;
	}
	timeDisplay.innerHTML = time;
}

function showWord(element) {
	let randomNumber = Math.floor(Math.random() * words.length);
	currentWord.innerHTML = element[randomNumber];
}

function startMatch() {
	if (matchWord()) {
		wordInput.value = "";
		time = currentLevel + 1;
		showWord(words);
		isplaying = true;
		score++;
	}
	scoreDisplay.innerHTML = score;
}

function matchWord() {
	if (wordInput.value === currentWord.innerHTML) {
		message.innerHTML = "correct !!!";
		return true;
	} else {
		message.innerHTML = "Incorrect !!!";
		return false;
	}
}

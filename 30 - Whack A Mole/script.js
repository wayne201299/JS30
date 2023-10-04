const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const time = 10000;
let lastHole;
let timeUp = false;
let score = 0;
moles.forEach((mole) => mole.addEventListener("click", bonk));

function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];

	// 避免同一個洞出現兩次
	if (hole === lastHole) {
		return randomHole(holes);
	}
	lastHole = hole;
	return hole;
}

function peep() {
	const time = randomTime(200, 1000);
	const hole = randomHole(holes);
	hole.classList.add("up");
	setTimeout(() => {
		hole.classList.remove("up");
		if (!timeUp) peep();
	}, time);
}

function startGame() {
	scoreBoard.textContent = 0;
	timeUp = false;
	score = 0;
	peep();
	setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
	console.log(this);
	// 如果有人嘗試改屬性，則不會觸發
	if (!e.isTrusted) return;
	score++;
	scoreBoard.textContent = score;
	this.parentElement.classList.remove("up");
}

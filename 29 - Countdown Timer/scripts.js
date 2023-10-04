const chooseTimer = document.querySelectorAll(".timer__button");
const inputMinutes = document.querySelector("[name=minutes]");
const timeLeft = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");

// inputMinutes.addEventListener("input", (e) => {
// 	timer(e.target.value * 60);
// });

chooseTimer.forEach((button) => {
	button.addEventListener("click", (e) => {
		timer(e.target.dataset.time);
	});
});

document.customForm.addEventListener("submit", function (e) {
	e.preventDefault();
	timer(this.minutes.value * 60);
	this.reset();
});

let countdown;
function timer(seconds) {
	clearInterval(countdown);
	const now = Date.now();
	const then = now + seconds * 1000;

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		// check if we should stop it
		if (secondsLeft < 0) {
			clearInterval(countdown);
			return;
		}
		displayTimeLeft(secondsLeft);
		displayEndTime(then);
	}, 1000);
}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes}:${
		remainderSeconds < 10 ? "0" : ""
	}${remainderSeconds}`;
	timeLeft.textContent = display;
}

function displayEndTime(timeStamp) {
	const end = new Date(timeStamp);
	const hours = end.getHours();
	const minutes = end.getMinutes();
	const seconds = end.getSeconds();
	const display = `Be back at ${hours > 12 ? hours - 12 : hours}:${
		minutes < 10 ? "0" : ""
	}${minutes}:${seconds < 10 ? "0" : ""}${seconds} ${
		hours > 12 ? "PM" : "AM"
	}`;
	endTime.textContent = display;
}

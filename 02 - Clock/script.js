const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
	const now = new Date();

	const second = now.getSeconds();
	const secondsDegrees = (second / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const min = now.getMinutes();
	const minsDegrees = min * 6 + 90;
	minHand.style.transform = `rotate(${minsDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = (hours * 360) / 12 + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);

const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
	(position) => {
		speed.textContent = position.coords.speed;
		arrow.style.transform = `rotate(${position.coords.heading}deg)`;
	},
	(err) => {
		console.log(err);
		alert("Geolocation is not supported by this browser.");
	}
);

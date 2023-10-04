const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

speed.addEventListener("mousemove", mousemove);

function mousemove(e) {
	const y = e.pageY - this.offsetTop;
	const percent = y / this.offsetHeight;
	const min = 0.4;
	const max = 4;
	const height = Math.round(percent * 100) + "%";
	bar.style.height = height;

	const playbackRate = percent * (max - min) + min;
	video.playbackRate = playbackRate;
	bar.textContent = playbackRate.toFixed(2) + "x";
	video.playbackRate = playbackRate;
}

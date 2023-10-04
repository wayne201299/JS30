const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft; // 左滑距離

slider.addEventListener("mousedown", (e) => {
	isDown = true;
	slider.classList.add("active");
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
	e.preventDefault();
});

slider.addEventListener("mouseup", (e) => {
	isDown = false;
	slider.classList.remove("active");
});

slider.addEventListener("mouseleave", (e) => {
	isDown = false;
	slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 3;
	slider.scrollLeft = scrollLeft - walk;
});

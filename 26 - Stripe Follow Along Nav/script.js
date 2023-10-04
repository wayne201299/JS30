const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector("nav");

function handleEnter() {
	this.classList.add("trigger-enter");
	setTimeout(
		() =>
			this.classList.contains("trigger-enter") &&
			this.classList.add("trigger-enter-active"),
		150
	);
	background.classList.add("open");

	const dropdown = this.querySelector(".dropdown");
	const dropdownCoords = dropdown.getBoundingClientRect();
	const navCoords = nav.getBoundingClientRect();

	const coord = {
		width: dropdownCoords.width,
		height: dropdownCoords.height,
		top: dropdownCoords.top - navCoords.top,
		left: dropdownCoords.left - navCoords.left,
	};
	background.style.setProperty("width", `${coord.width}px`);
	background.style.setProperty("height", `${coord.height}px`);
	background.style.setProperty(
		"transform",
		`translate(${coord.left}px, ${coord.top}px)`
	);
}

function handleLeave() {
	this.classList.remove("trigger-enter", "trigger-enter-active");
	background.classList.remove("open");
}

triggers.forEach((trigger) => {
	trigger.addEventListener("mouseenter", handleEnter);
	trigger.addEventListener("mouseleave", handleLeave);
});

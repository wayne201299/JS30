const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

function populateVoices() {
	voices = this.getVoices();

	voicesDropdown.innerHTML = voices
		.filter((voice) => voice.lang.includes("en"))
		.map((voice) => {
			return `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`;
		})
		.join("");
}

function setVoice(e) {
	// 找到對應語言的聲音
	msg.voice = voices.find((voice) => voice.name === e.target.value);
}

function toggle(startOver = true) {
	speechSynthesis.cancel();
	if (startOver) {
		speechSynthesis.speak(msg);
	}
}

function setOption() {
	msg[this.name] = this.value;
	toggle();
}

msg.text = document.querySelector('[name="text"]').value;

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);

options.forEach((option) => {
	option.addEventListener("change", setOption);
});

speakButton.addEventListener("click", toggle);

stopButton.addEventListener("click", toggle.bind(null, false));

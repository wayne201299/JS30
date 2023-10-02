const bands = [
	"The Plot in You",
	"The Devil Wears Prada",
	"Pierce the Veil",
	"Norma Jean",
	"The Bled",
	"Say Anything",
	"The Midway State",
	"We Came as Romans",
	"Counterparts",
	"Oh, Sleeper",
	"A Skylit Drive",
	"Anywhere But Here",
	"An Old Dog",
];

const stripBrands = bands.map((bandName) => stripArticles(bandName));

function stripArticles(bandName) {
	return bandName.replace(/^(a |the |an )/i, "").trim();
}

const sortedBands = stripBrands.sort((a, b) =>
	stripArticles(a) > stripArticles(b) ? 1 : -1
);

document.querySelector("#bands").innerHTML = sortedBands
	.map((band) => `<li>${band}</li>`)
	.join("");

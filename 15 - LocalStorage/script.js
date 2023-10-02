const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];
function addItem(e) {
	e.preventDefault();
	const text = this.querySelector("[name=item]").value;
	const item = {
		text,
		done: false,
	};
	items.push(item);
	populateList(items, itemsList);
	localStorage.setItem("items", JSON.stringify(items));
	this.reset(); // form API
}

/** 產生一段HTML */
function populateList(plates = [], plateList) {
	plateList.innerHTML = plates
		.map((item, i) => {
			return `
            <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${
				item.done ? "checked" : ""
			} />
            <label for="item${i}">${item.text}</label>
            </li>
            `;
		})
		.join("");
}

function toggleDone(e) {
	console.log(e.target);
	if (!e.target.matches("input")) return;
	const el = e.target;
	const index = el.dataset.index;
	items[index].done = !items[index].done;
	localStorage.setItem("items", JSON.stringify(items));
	populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList);

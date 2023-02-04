/** @format */

const realtors = document.getElementById("result");
const filter = document.getElementById("filter");
const list = [];

getData();

async function getData() {
	const realtorRes = await fetch("https://randomuser.me/api?results=50");
	const { results } = await realtorRes.json();

	realtors.innerHTML = "";
	results.forEach((realtor) => {
		const li = document.createElement("li");

		li.innerHTML = `<img src="${realtor.picture.large}" alt="${realtor.name.first}"
        <div class="realtor-info">
		<h4>${realtor.name.first} ${realtor.name.last}</h4>
		<p>${realtor.email}, ${realtor.cell}</p>
        `;
		list.push(li);
		realtors.appendChild(li);
	});
}
function filterData(searchTerm) {
	list.forEach((item) => {
		if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
			item.classList.remove(".hide");
		} else {
			item.classList.add("hide");
		}
	});
}

filter.addEventListener("input", (e) => filterData(e.target.value));

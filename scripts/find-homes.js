/** @format */
const addressContainer = document.querySelector("addresses--container");
const addressTitle = document.querySelector(".address__title");
const propertyImage = document.querySelector(".img");
const propertyPrice = document.querySelector(".price");
const propertyDetails = document.querySelector("p");
const addressEl = document.querySelector(".address");

// Markers
let L = window.L;
const sales = [
	["11417 Horcrux Rd", "$600", 29.76744, -95.49049],
	["5015 Tolkien Ln", "$10,000", 29.83461, -95.28086],
	["42 Wallaby Way", "$20", 29.80177, -95.41023],
	["4611 Harfoots Rd", "$159", 29.71346, -95.28182],
	["787 Gerald Rd", "WE'LL PAY YOU TO MOVE HERE", 29.67465, -95.42532],
	["3007 Enchanted Way", "$8001", 29.73401, -95.36041],
	["992 Unicorn Rd", "$13,999", 29.74964, -95.39641],
];

const propertyArr = [
	{
		address: "11417 Horcrux Rd",
		image: "/images/homes/homepage/home-sm0.jpg",
		price: "$600",
		description:
			"When all you need is a small weekend getaway to be close to the lake… look no further! This country home features the perfect split floor plan to provide privacy to all occupants. The primary suite has dedicated en-suite bath, while the secondary bedroom has a large bathroom directly adjacent.  The abundance of windows allow in lots of natural light.  The mostly cleared lot has just enough trees to keep the house shaded, without taking up the entire yard. ",
	},

	{
		address: "5015 Tolkien Ln",
		image: "/images/homes/homepage/home-sm1.jpg",
		price: "$10,000",
		description:
			"Murder house! (AS IS, WHERE IS), three bedrooms, one bath, hardwood floors, original windows, large backyard, chain link fencing, concrete front driveway, and covered parking accessed through the alley. Home is being sold (AS IS, WHERE IS). Dead homeowners still live there.",
	},
	{
		address: "42 Wallaby Way",
		image: "/images/homes/homepage/home-sm2.jpg",
		price: "$20",
		description:
			"If you are looking for a great home as a first-time witcher, retirement home, or horcrux-producing rental property, here it is! This updated home will check all the boxes. This 3,1 home has been tastefully remodeled and well-maintained.",
	},

	{
		address: "4611 Harfoots Rd",
		image: "/images/homes/homepage/home-sm3.jpg",
		price: "$159",
		description:
			"Check out this 3/1 cottage on 3 lots off the main highway in the Maydelle community. Shed out back has electric and insulation. This opportunity has lots of potential and is priced to sell!",
	},
	{
		address: "787 Gerald Rd",
		image: "/images/homes/homepage/home-sm4.jpg",
		price: "WE'LL PAY YOU TO MOVE HERE.",
		description:
			"This country home features the perfect split floor plan to provide privacy to all occupants. The primary suite has dedicated en-suite potion cauldron, while the secondary bedroom has a large bathroom directly adjacent. The abundance of windows allow in lots of natural light. The mostly cleared lot has just enough trees to keep the house shaded, without taking up the entire yard.",
	},
	{
		address: "3007 Enchanted Way",
		image: "/images/homes/homepage/home-sm5.jpg",
		price: "$8001",
		description:
			"This cozy ghost cabin is a diamond in the rough hidden in the woods. Surrounded by supernatural beings; after spending the whole day out you'll return to your little cabin. Be welcomed by the large demon on the porch and rest on the built on bench. Freely walk through the very open floor plan, and still feel claustrophobic. No sunlight beaming through the windows. Add a ladder inside and climb up to a small elevated space with a window. Perfect for anxiety and gazing up at the stars.",
	},
	{
		address: "992 Unicorn Rd",
		image: "/images/homes/homepage/home-sm6.jpg",
		price: "$13,999",
		description:
			"This property needs some interior TLC and is being sold as-is. No repairs will be done. New siding, and new roof on the main house. This property has a garage apartment with 2 bedrooms and 1 bath, that you could rent out while leaving in the main house. This is a good way to own a house for FREE. The main house has 3 bedrooms and 1 bath. The property is close to major highways. 5 minutes away from I-45 and 15 minutes from downtown.",
	},
];

const mainCoords = [29.7604, -95.3698];

const map = L.map("map", {
	minZoom: 11,
	maxZoom: 15,
}).setView(mainCoords, 11);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

for (let i in sales) {
	const updateProperty = function () {
		propertyArr.map((i) => sales[i]);
		const { address, image, price, description } = propertyArr[i];
		propertyDetails.innerHTML = description;
		propertyImage.src = image;
		addressTitle.innerHTML = address;
		propertyPrice.innerHTML = price;

		if (i > propertyArr.length - 1) {
			i = 0;
			addressEl.classList.remove("active");
			addressEl.style.opacity = "0";
		} else {
			addressEl.classList.add("active");
			addressEl.style.opacity = "1";
		}
	};
	marker = new L.marker([sales[i][2], sales[i][3]])
		.bindPopup(sales[i][0])
		.addTo(map)
		.on("click", updateProperty);
}

// End Markers

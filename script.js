/** @format */

// Global variables
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const revSquare = document.querySelectorAll(".rev-square");
const reviews = document.querySelectorAll(".review");
const rev1 = document.getElementById("1");
const rev2 = document.getElementById("2");
const rev3 = document.getElementById("3");

//Reviews

let currentActive = 1;

const update = function () {
	revSquare.forEach((square, i) => {
		if (i < currentActive) {
			square.classList.add("active");
		} else {
			square.classList.remove("active");
		}
	});

	reviews.forEach((_, i) => {
		if (i < currentActive) {
			rev1.classList.remove("hidden");
			rev2.classList.add("hidden");
			rev3.classList.add("hidden");
		} else if (i === currentActive) {
			rev1.classList.add("hidden");
			rev2.classList.remove("hidden");
			rev3.classList.add("hidden");
		} else {
			rev1.classList.add("hidden");
			rev2.classList.add("hidden");
			rev3.classList.remove("hidden");
		}
	});

	if (currentActive === 1) {
		prev.disabled = true;
	} else if (currentActive === reviews.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
};

next.addEventListener("click", () => {
	currentActive++;

	if (currentActive > reviews.length) {
		currentActive = reviews.length;
	}

	update();
});
prev.addEventListener("click", () => {
	currentActive--;

	if (currentActive < 1) {
		currentActive = 1;
	}

	update();
});

//End Reviews

// // Navbar
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

openBtn.addEventListener("click", () => {
	nav.forEach((navEl) => navEl.classList.add("visible"));
});
closeBtn.addEventListener("click", () => {
	nav.forEach((navEl) => navEl.classList.remove("visible"));
});

// //End Navbar

const imgFeed = document.querySelector(".img-feed-container");
let imgAll = document.querySelectorAll(".feed");
let haveIt = [];
//randomNum creates a random number that doesn't reapeat.
let randomNum = function () {
	let random = Math.floor(Math.random() * 12);

	if (!haveIt.includes(random)) {
		haveIt.push(random);
		return random;
	} else {
		if (haveIt.length < 12) {
			//Recursively generate number
			return randomNum(12);
		}
	}
};

//Announcements
const announcementArr = [
	{
		announcement: "Prices starting at $10.",
	},
	{
		announcement: "Free exorcisms for first-time homebuyers.",
	},
	{
		announcement: "Our homes come with ghost-certificates.",
	},
];

let idx = 1;
const annContainer = document.querySelector(".announcements-container");
const announcementV = document.querySelector("h4");
const updateAnn = function () {
	annContainer.appendChild(announcementV);
	const { announcement } = announcementArr[idx];
	announcementV.innerHTML = announcement;
	idx++;

	if (idx > announcementArr.length - 1) {
		idx = 0;
	}
};
setInterval(updateAnn, 3000);

//End announcements
//Immage feed
const imgArr = [
	{ link: `/images/homes/homepage/home-sm${randomNum()}.jpg` },
	{ link: `/images/homes/homepage/home-sm${randomNum()}.jpg` },
	{ link: `/images/homes/homepage/home-sm${randomNum()}.jpg` },
	{ link: `/images/homes/homepage/home-sm${randomNum()}.jpg` },
	{ link: `/images/homes/homepage/home-sm${randomNum()}.jpg` },
	{ link: `/images/homes/homepage/home-sm${randomNum()}.jpg` },
	{ link: `/images/homes/homepage/home-sm${randomNum()}.jpg` },
	{ link: `/images/homes/homepage/home-sm${randomNum()}.jpg` },
	{ link: `/images/homes/homepage/home-sm${randomNum()}.jpg` },
	{ link: `/images/homes/homepage/home-sm${randomNum()}.jpg` },
	{ link: `/images/homes/homepage/home-sm${randomNum()}.jpg` },
];

for (let i in imgArr) {
	const img = document.querySelector("img");
	imgFeed.appendChild(img);
	const updateImg = function () {
		const { link } = imgArr[i];
		img.src = link;
		i++;

		if (i > imgArr.length - 1) {
			i = 0;
			img.classList.remove("active");
			img.style.opacity = "0";
		} else {
			img.classList.add("active");
			img.style.opacity = "1";
		}
	};
	updateImg();
	setInterval(updateImg, 4000);
}

//End Image Feed.

//Search bar
const search = document.querySelector(".search");
const srchBtn = document.querySelector(".srch--btn");
const input = document.querySelector(".input");

srchBtn.addEventListener("click", () => {
	search.classList.toggle("active");
	input.focus();
});
//End Search bar

// Calculator
const modal = document.getElementById("myModal");
const countYourLoot = document.getElementById("modal-btn");
const span = document.getElementsByClassName("close")[0];
//Modal
countYourLoot.onclick = function () {
	modal.style.display = "block";
};
span.onclick = function () {
	modal.style.display = "none";
};
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
//End Modal

//Operators
class Calculator {
	constructor(previousOperandTextElement, currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement;
		this.currentOperandTextElement = currentOperandTextElement;
		this.clear();
	}

	clear() {
		this.currentOperand = "";
		this.previousOperand = "";
		this.operation = undefined;
	}

	delete() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1);
	}

	appendNumber(number) {
		if (number === "." && this.currentOperand.includes(".")) return;
		this.currentOperand = this.currentOperand.toString() + number.toString();
	}

	chooseOperation(operation) {
		if (this.currentOperand === "") return;
		if (this.previousOperand !== "") {
			this.compute();
		}
		this.operation = operation;
		this.previousOperand = this.currentOperand;
		this.currentOperand = "";
	}

	compute() {
		let computation;
		const prev = parseFloat(this.previousOperand);
		const current = parseFloat(this.currentOperand);
		if (isNaN(prev) || isNaN(current)) return;
		switch (this.operation) {
			case "+":
				computation = prev + current;
				break;
			case "-":
				computation = prev - current;
				break;
			case "*":
				computation = prev * current;
				break;
			case "÷":
				computation = prev / current;
				break;
			default:
				return;
		}
		this.currentOperand = computation;
		this.operation = undefined;
		this.previousOperand = "";
	}

	getDisplayNumber(number) {
		const stringNumber = number.toString();
		const integerDigits = parseFloat(stringNumber.split(".")[0]);
		const decimalDigits = stringNumber.split(".")[1];
		let integerDisplay;
		if (isNaN(integerDigits)) {
			integerDisplay = "";
		} else {
			integerDisplay = integerDigits.toLocaleString("en", {
				maximumFractionDigits: 0,
			});
		}
		if (decimalDigits != null) {
			return `${integerDisplay}.${decimalDigits}`;
		} else {
			return integerDisplay;
		}
	}

	updateDisplay() {
		this.currentOperandTextElement.innerText = this.getDisplayNumber(
			this.currentOperand
		);
		if (this.operation != null) {
			this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
				this.previousOperand
			)} ${this.operation}`;
		} else {
			this.previousOperandTextElement.innerText = "";
		}
	}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
	"[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
	"[data-current-operand]"
);

const calculator = new Calculator(
	previousOperandTextElement,
	currentOperandTextElement
);

numberButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	});
});

operationButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.chooseOperation(button.innerText);
		calculator.updateDisplay();
	});
});

equalsButton.addEventListener("click", (button) => {
	calculator.compute();
	calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
	calculator.clear();
	calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
	calculator.delete();
	calculator.updateDisplay();
});
//End Operators
//End Calculator

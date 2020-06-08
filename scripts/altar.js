// Buttons to kill off animals
const killSheep = document.querySelector("#killSheep");
const killCows = document.querySelector("#killCows");
const killChickens = document.querySelector("#killChickens");
const killGoats = document.querySelector("#killGoats");
// spans to give counts of parts
const eyeSpot = document.querySelector('#eyesSpot')
const hoovSpot = document.querySelector('#hoovSpot')
const fleeceSpot = document.querySelector('#fleeceSpot')
//Amount of animals sacrificed
let sacAmount = 1;

//========================================================
// Materials
//========================================================
// Universal
let bloodCount = 0; // Amount gained dependant on animal
// Sheep
let squaredEyes = 0; // Always get at least one, maybe 2
let sheepHooves = 0; // 20% chance to get
let pristineWool = 0; // 5% chance to get
// Cow
let cowFlank = 0; // Always
let cowStomach = 0; // 20%
let methane = 0; // 5%
// Chicken
let feathers = 0; // Always, various amounts
let wings = 0; // Always one or two
let wattles = 0; // 5% chance
let chickenFingers = 0; // THEY DO EXIST??!?! 1 in 100 chance
// Goat
let goatHorns = 0;
let thirdEye = 0;
let devilContract = 0;
// Goose

// Duck

// Other?

//========================================================
//Generate sheep material
//========================================================

killSheep.addEventListener("click", function () {
	// Known bug, for some reason the price for sheep isn't resetting after the first sheep, but works after that.
	if (sheepCount > sacAmount) {
		sheepCount -= sacAmount;
		let toThePowerOf = Math.pow(1.15, sheepCount - 1);
		sheepPrice = Math.trunc(22 * toThePowerOf);
		document.getElementById("sheepCounty").innerHTML = commaIncluded(sheepCount);
		document.getElementById("sheeppricy").innerHTML =
			commaIncluded(sheepPrice) + " Wool";

		for (let i = 0; i < sacAmount; i += 1) {
			let eyeChance = Math.floor(Math.random() * 100) + 1;
			let hoovChance = Math.floor(Math.random() * 10) + 1;
			let woolChance = Math.floor(Math.random() * 20) + 1;
			bloodCount += 1;
			if (eyeChance > 70) {
				squaredEyes += 2;
			} else {
				squaredEyes += 1;
			}
			if (hoovChance >= 8) {
				sheepHooves += 1;
			}
			if (woolChance == 20) {
				pristineWool += 1;
			}
			eyeSpot.innerHTML = squaredEyes;
			hoovSpot.innerHTML = sheepHooves;
			fleeceSpot.innerHTML = pristineWool
		}
	}
});

//========================================================
//Generate cow material
//========================================================
killCows.addEventListener("click", function () {
	if (cowCount > sacAmount) {
		cowCount -= sacAmount;
		let toThePowerOf = Math.pow(1.1, cowCount - 1);
		cowPrice = Math.trunc(12 * toThePowerOf);
		document.getElementById("cowNumber").innerHTML = commaIncluded(cowCount);
		document.getElementById("cowy").innerHTML =
			"<button onclick='buyCows()'>" +
			commaIncluded(cowPrice) +
			" wool" +
			"</button>";

		for (let i = 0; i < sacAmount; i += 1) {
			let flankChance = Math.floor(Math.random() * 100) + 1;
			let stomachChance = Math.floor(Math.random() * 10) + 1;
			let methaneChance = Math.floor(Math.random() * 20) + 1;
			bloodCount += 2;
			if (flankChance > 70) {
				cowFlank += 2;
			} else {
				cowFlank += 1;
			}
			if (stomachChance >= 8) {
				cowStomach += 1;
			}
			if (methaneChance === 20) {
				methane += 1;
			}
		}
	}
});

//========================================================
//Generate chicken material
//========================================================
killChickens.addEventListener("click", function () {
	if (chickenCount > sacAmount) {
		chickenCount -= sacAmount;
		let toThePowerOf = Math.pow(1.1, chickenCount - 1);
		chickenPrice = Math.trunc(12 * toThePowerOf);
		document.getElementById("chickenNumber").innerHTML = commaIncluded(
			chickenCount
		);
		document.getElementById("chickeny").innerHTML =
			"<button onclick='buyChickens()'>" +
			commaIncluded(chickenPrice) +
			" milk" +
			"</button>";
		for (let i = 0; i < sacAmount; i += 1) {
			let featherChance = Math.floor(Math.random() * 100) + 1;
			let wingChance = Math.floor(Math.random() * 10) + 1;
			let wattleChance = Math.floor(Math.random() * 20) + 1;
			let fingerChance = Math.floor(Math.random() * 100) + 1;
			bloodCount += 0.5;
			if (featherChance > 50) {
				feathers += 5;
			} else if (featherChance > 80) {
				feathers += 6;
			} else {
				feathers += 3;
			}
			if (wingChance > 5) {
				wings += 2;
			} else {
				wings += 1;
			}
			if (wattleChance >= 18) {
				wattles += 1;
			}
			if (fingerChance === 100) {
				chickenFingers += 1;
			}
		}
	}
});

//========================================================
//Generate goat material
//========================================================
killGoats.addEventListener("click", function () {
	if (goatCount > sacAmount) {
		goatCount -= sacAmount;
		let toThePowerOf = Math.pow(1.1, goatCount - 1);
		goatPrice = Math.trunc(1200 * toThePowerOf);
		document.getElementById("goatNumber").innerHTML = commaIncluded(goatCount);
		document.getElementById("goaty").innerHTML =
			"<button onclick='buyGoats()'>" +
			commaIncluded(goatPrice) +
			" eggs" +
			"</button>";

		// Add the good stuff here
		for (let i = 0; i < sacAmount; i += 1) {
			let hornChance = Math.floor(Math.random() * 100) + 1;
			let thirdEyeChance = Math.floor(Math.random() * 20) + 1;
			let contractChance = Math.floor(Math.random() * 20) + 1;
			bloodCount += 1;
			if (hornChance > 70) {
				goatHorns += 2;
			} else {
				goatHorns += 1;
			}
			if (thirdEyeChance > 16) {
				thirdEye += 1;
			}
			if (contractChance === 20) {
				devilContract += 1;
			}
		}
	}
});

//========================================================
//Generate Goose material
//========================================================


//========================================================
//Generate Duck material
//========================================================

//========================================================
//Generate Pig material
//========================================================

//========================================================
//Generate Bees material
//========================================================
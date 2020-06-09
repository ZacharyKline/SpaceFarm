// Buttons to kill off animals
const killSheep = document.querySelector("#killSheep");
const killCows = document.querySelector("#killCows");
const killChickens = document.querySelector("#killChickens");
const killGoats = document.querySelector("#killGoats");
const killGeese = document.querySelector("#killGeese");
const killDucks = document.querySelector("#killDucks");
const killPigs = document.querySelector("#killPigs");
const killBees = document.querySelector("#killBees");
// spans to give counts of parts
const eyeSpot = document.querySelector("#eyesSpot");
const hoovSpot = document.querySelector("#hoovSpot");
const fleeceSpot = document.querySelector("#fleeceSpot");
const flankSpot = document.querySelector("#flankSpot");
const stomachSpot = document.querySelector("#stomachSpot");
const methaneSpot = document.querySelector("#methaneSpot");
const featherSpot = document.querySelector("#featherSpot");
const wingSpot = document.querySelector("#wingSpot");
const wattleSpot = document.querySelector("#wattleSpot");
const fingerSpot = document.querySelector("#fingerSpot");
const goatHornSpot = document.querySelector("#goatHornSpot");
const thirdEyeSpot = document.querySelector("#thirdEyeSpot");
const devilSpot = document.querySelector("#devilSpot");
const tongueSpot = document.querySelector("#tongueSpot");
const gooseTeethSpot = document.querySelector("#gooseTeethSpot");
const ChaosEyeSpot = document.querySelector("#ChaosEyeSpot");
const webbedFeetSpot = document.querySelector("#webbedFeetSpot");
const billSpot = document.querySelector("#billSpot");
const duckFeatherSpot = document.querySelector("#duckFeatherSpot");
const baconSpot = document.querySelector("#baconSpot");
const snoutSpot = document.querySelector("#snoutSpot");
const curlyTailSpot = document.querySelector("#curlyTailSpot");
const CommunismSpot = document.querySelector("#communismSpot");
const stingerSpot = document.querySelector("#stingerSpot");
const honeyCombSpot = document.querySelector("#honeyCombSpot");
const royalJellySpot = document.querySelector("#royalJellySpot");
const beeMovieSpot = document.querySelector("#beeMovieSpot");
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
let tongue = 0;
let gooseTeeth = 0;
let eyeofChaos = 0;
// Duck
let webbedFeet = 0;
let duckBill = 0;
let beautifulFeather = 0;
// Pigs
let bacon = 0;
let snouts = 0;
let curlyTails = 0;
let communism = 0;
// Bees
let stingers = 0;
let honeycomb = 0;
let royalJelly = 0;
let beeMovie = 0;

//========================================================
//Generate sheep material
//========================================================

killSheep.addEventListener("click", function () {
	// Known bug, for some reason the price for sheep isn't resetting after the first sheep, but works after that.
	if (sheepCount > sacAmount) {
		sheepCount -= sacAmount;
		let toThePowerOf = Math.pow(1.15, sheepCount - 1);
		sheepPrice = Math.trunc(22 * toThePowerOf);
		document.getElementById("sheepCounty").innerHTML = commaIncluded(
			sheepCount
		);
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
			fleeceSpot.innerHTML = pristineWool;
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
			flankSpot.innerHTML = cowFlank;
			stomachSpot.innerHTML = cowStomach;
			methaneSpot.innerHTML = methane;
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
			featherSpot.innerHTML = feathers;
			wingSpot.innerHTML = wings;
			wattleSpot.innerHTML = wattles;
			fingerSpot.innerHTML = chickenFingers;
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
			goatHornSpot.innerHTML = goatHorns;
			thirdEyeSpot.innerHTML = thirdEye;
			devilSpot.innerHTML = devilContract;
		}
	}
});

//========================================================
//Generate Goose material
//========================================================
killGeese.addEventListener("click", function () {
	if (gooseCount > sacAmount) {
		gooseCount -= sacAmount;
		let toThePowerOf = Math.pow(1.1, gooseCount);
		goosePrice = Math.trunc(110 * toThePowerOf);
		document.getElementById("gooseNumber").innerHTML = commaIncluded(
			gooseCount
		);
		document.getElementById("goosey").innerHTML =
			"<button onclick='buyGeese()'>" +
			commaIncluded(goosePrice) +
			" g-milk" +
			"</button>";
		for (let i = 0; i < sacAmount; i += 1) {
			let tongueChance = Math.floor(Math.random() * 100) + 1;
			let toothChance = Math.floor(Math.random() * 20) + 1;
			let chaosEyeChance = Math.floor(Math.random() * 20) + 1;
			bloodCount += 1;
			if (tongueChance > 70) {
				tongue += 2;
			}
			if (toothChance > 16) {
				gooseTeeth += 1;
			}
			if (chaosEyeChance === 20) {
				eyeofChaos += 1;
			}
			tongueSpot.innerHTML = tongue;
			gooseTeethSpot.innerHTML = gooseTeeth;
			ChaosEyeSpot.innerHTML = eyeofChaos;
		}
	}
});

//========================================================
//Generate Duck material
//========================================================
killDucks.addEventListener("click", function () {
	if (duckCount > sacAmount) {
		duckCount -= sacAmount;
		let toThePowerOf = Math.pow(1.1, duckCount);
		duckPrice = Math.trunc(110 * toThePowerOf);
		document.getElementById("duckNumber").innerHTML = commaIncluded(duckCount);
		document.getElementById("duckey").innerHTML =
			"<button onclick='buyDucks()'>" +
			commaIncluded(duckPrice) +
			" chaos" +
			"</button>";
		for (let i = 0; i < sacAmount; i += 1) {
			let webbedFeetChance = Math.floor(Math.random() * 100) + 1;
			let duckBillChance = Math.floor(Math.random() * 20) + 1;
			let beautifulChance = Math.floor(Math.random() * 20) + 1;
			if (webbedFeetChance >= 70) {
				webbedFeet += 1;
			}
			if (duckBillChance >= 17) {
				duckBill += 1;
			}
			if (beautifulChance === 20) {
				beautifulFeather += 1;
			}
			webbedFeetSpot.innerHTML = webbedFeet;
			billSpot.innerHTML = duckBill;
			duckFeatherSpot.innerHTML = beautifulFeather;
		}
	}
});

//========================================================
//Generate Pig material
//========================================================
killPigs.addEventListener("click", function () {
	if (pigCount >= sacAmount) {
		pigCount -= sacAmount;
		let toThePowerOf = Math.pow(1.1, pigCount);
		pigPrice = Math.trunc(40 * toThePowerOf);
		document.getElementById("pigNumber").innerHTML = commaIncluded(pigCount);
		document.getElementById("pigy").innerHTML =
			"<button onclick='buyPigs()'>" +
			commaIncluded(pigPrice) +
			" piglet" +
			"</button>";
		for (let i = 0; i < sacAmount; i += 1) {
			let baconChance = Math.floor(Math.random() * 100) + 1;
			let snoutChance = Math.floor(Math.random() * 20) + 1;
			let curlyTailChance = Math.floor(Math.random() * 20) + 1;
			let communismChance = Math.floor(Math.random() * 100) + 1;
			if (baconChance >= 50) {
				bacon += 2;
			} else {
				bacon += 1;
			}
			if (snoutChance >= 15) {
				snouts += 1;
			}
			if (curlyTailChance === 20) {
				curlyTails += 1;
			}
			if (communismChance >= 98) {
				communism += 1;
			}
			baconSpot.innerHTML = bacon;
			snoutSpot.innerHTML = snouts;
			curlyTailSpot.innerHTML = curlyTails;
			CommunismSpot.innerHTML = communism;
		}
	}
});
//========================================================
//Generate Bees material
//========================================================
killBees.addEventListener("click", function () {
	if (beeCount > sacAmount) {
		beeCount -= sacAmount;
		let toThePowerOf = Math.pow(1.1, beeCount);
		beePrice = Math.trunc(10 * toThePowerOf);
		document.getElementById("beeNumber").innerHTML = commaIncluded(beeCount);
		document.getElementById("beey").innerHTML =
			"<button onclick='buyBees()'>" +
			commaIncluded(beePrice) +
			" Honey" +
			"</button>";
		for (let i = 0; i < sacAmount; i += 1) {
			let stingerChance = Math.floor(Math.random() * 100) + 1;
			let honeyCombChance = Math.floor(Math.random() * 20) + 1;
			let royalJellyChance = Math.floor(Math.random() * 20) + 1;
			let beeMovieChance = Math.floor(Math.random() * 100) + 1;
			if (stingerChance >= 40) {
				stingers += 1
			}
			if (honeyCombChance >= 10) {
				honeycomb += 1
			}
			if (royalJellyChance >= 19) {
				royalJelly += 1
			}
			if (beeMovieChance === 100) {
				beeMovie += 1
			}
			stingerSpot.innerHTML = stingers;
			honeyCombSpot.innerHTML = honeycomb;
			royalJellySpot.innerHTML = royalJelly;
			beeMovieSpot.innerHTML = beeMovie
		}
	}
});

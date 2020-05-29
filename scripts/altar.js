const killSheep = document.querySelector("#killSheep");
const killCows = document.querySelector("#killCows");
const killChickens = document.querySelector("#killChickens");
const killGoats = document.querySelector("#killGoats");
let sacAmount = 1;

//========================================================
//Materials
//========================================================
//Universal
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
let feathers = 0;
let wings = 0;
let wattles = 0;
let chickenFingers = 0; // THEY DO EXIST??!?!
// Goat

//========================================================
//Generate sheep material
//========================================================

killSheep.addEventListener("click", function () {
	// Known bug, for some reason the price for sheep isn't resetting after the first sheep, but works after that.
	if (sheepCount > sacAmount) {
		sheepCount -= sacAmount;
		let toThePowerOf = Math.pow(1.1, sheepCount - sacAmount);
		sheepPrice = Math.trunc(22 * toThePowerOf);
		document.getElementById("sheepy").innerHTML = commaIncluded(sheepCount);
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

			console.log(`squared eyes ${squaredEyes}`);
			console.log(`hooves ${sheepHooves}`);
			console.log(`prisine wool ${pristineWool}`);
		}
	}
});

//========================================================
//Generate cow material
//========================================================
killCows.addEventListener("click", function () {
	if (cowCount > sacAmount) {
		// remove a cow and reset price based on new cowCount

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
			console.log(`Flanks ${cowFlank}`);
			console.log(`Stomach ${cowStomach}`);
			console.log(`Methane ${methane}`);
		}
	}
});

//========================================================
//Generate chicken material
//========================================================
killChickens.addEventListener("click", function () {
    if (chickenCount > sacAmount) {
        bloodCount += 0.5
		for (let i = 0; i < sacAmount; i += 1) {
			let featherChance = Math.floor(Math.random() * 100) + 1;
			let wingChance = Math.floor(Math.random() * 10) + 1;
            let wattleChance = Math.floor(Math.random() * 20) + 1;
            let fingerChance = Math.floor(Math.random() * 100) + 1;
            if (featherChance > 50) {
                feathers += 5
            } else if (featherChance > 80) {
                feathers += 6
            } else {
                feathers += 3
            }
            if (wingChance > 5) {
                wings += 2
            } else {
                wings += 1
            }
            if (wattleChance >= 18) {
                wattles += 1
            }
            if (fingerChance === 100) {
                chickenFingers += 1 
            }
		}
	}
});

//========================================================
//Generate goat material
//========================================================

const killSheep = document.querySelector("#killSheep");
let sacAmount = 1;

//========================================================
//Materials
//========================================================
//Universal
let bloodCount = 0;
// Sheep
let squaredEyes = 0; // Always get at least one, maybe 2
let sheepHooves = 0; // 20% chance to get
let pristineWool = 0; // 5% chance to get
// Cow

//========================================================
//Generate sheep material
//========================================================

killSheep.addEventListener("click", function () {
    // Known bug, for some reason the price for sheep isn't resetting after the first sheep, but works after that.
	if (sheepCount > sacAmount) {
        sheepCount -= sacAmount;
        let toThePowerOf = Math.pow(1.1, (sheepCount - sacAmount));
		sheepPrice = Math.trunc(22 * toThePowerOf);
		document.getElementById("sheepy").innerHTML = commaIncluded(sheepCount);
        document.getElementById("sheeppricy").innerHTML = commaIncluded(sheepPrice) + " Wool";
        for (let i = 0; i < sacAmount; i += 1) {
            let eyeChance = Math.floor(Math.random() * 100) + 1;
            let hoovChance = Math.floor(Math.random() * 10) + 1;
            let woolChance = Math.floor(Math.random() * 20) + 1;
            bloodCount += 1
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

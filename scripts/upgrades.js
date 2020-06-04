// buttons
const sheepUp1 = document.querySelector("#sheepUp1");
const sheepUp2 = document.querySelector("#sheepUp2");
const sheepUp3 = document.querySelector("#sheepUp3");
const sheepUp4 = document.querySelector("#sheepUp4");
const sheepUp5 = document.querySelector("#sheepUp5");
const sheepUp6 = document.querySelector("#sheepUp6");
const sheepUp7 = document.querySelector("#sheepUp7");
const sheepUp8 = document.querySelector("#sheepUp8");


//========================================================
//Animal Upgrades
//========================================================
// Sheep
sheepUp1.addEventListener("click", function upgrade1() { // Unlock at 10 sheep owned
	if (woolCount >= 40) {
		woolCount -= 40;
		sheepUpgrade1 = 2;
		sheepUp1.classList.add("used");
		sheepUp1.removeEventListener("click", upgrade1);
	}
});

sheepUp2.addEventListener("click", function sheepy2() { // unlock at 20 sheep owned
	if (woolCount >= 400 && squaredEyes >= 5) {
        woolCount -= 400;
        squaredEyes -= 5
		sheepUpgrade2 = 2;
		sheepUp2.classList.add("used");
        sheepUp2.removeEventListener("click", sheepy2);
        eyeSpot.innerHTML = squaredEyes
	}
});

sheepUp3.addEventListener('click', function sheepy3(){
    if (woolCount >= 1000 && squaredEyes >= 20 && sheepHooves >= 5) {
        woolCount -= 1000
        squaredEyes -= 20
        sheepHooves -= 5
        sheepUpgrade3 = 2
        sheepUp2.classList.add("used");
        sheepUp2.removeEventListener("click", sheepy3);


    }
})

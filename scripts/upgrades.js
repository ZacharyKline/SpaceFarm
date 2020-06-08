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
sheepUp1.addEventListener("click", function upgrade1() {
	// Unlock at 10 sheep owned
	if (woolCount >= 40) {
		woolCount -= 40;
		sheepUpgrade1 = 2;
		sheepUp1.classList.add("used");
		sheepUp1.removeEventListener("click", upgrade1);
	}
});

sheepUp2.addEventListener("click", function sheepy2() {
	// unlock at 20 sheep owned
	if (woolCount >= 400 && squaredEyes >= 5) {
		woolCount -= 400;
		squaredEyes -= 5;
		sheepUpgrade2 = 3;
		sheepUp2.classList.add("used");
		sheepUp2.removeEventListener("click", sheepy2);
		eyeSpot.innerHTML = squaredEyes;
	}
});

sheepUp3.addEventListener("click", function sheepy3() {
	if (woolCount >= 1000 && squaredEyes >= 20 && sheepHooves >= 5) {
		woolCount -= 1000;
		squaredEyes -= 20;
		sheepHooves -= 5;
		sheepUpgrade3 = 2;
		sheepUp3.classList.add("used");
		sheepUp3.removeEventListener("click", sheepy3);

		eyeSpot.innerHTML = squaredEyes;
		hoovSpot.innerHTML = sheepHooves;
	}
});

sheepUp4.addEventListener("click", function sheepy4() {
	if (woolCount >= 2500 && squaredEyes >= 50 && sheepHooves >= 25) {
		woolCount -= 2500;
		squaredEyes -= 50;
		sheepHooves -= 25;
		sheepUpgrade4 = 3;
		sheepUp4.classList.add("used");
		sheepUp4.removeEventListener("click", sheepy4);
		eyeSpot.innerHTML = squaredEyes;
		hoovSpot.innerHTML = sheepHooves;
	}
});

sheepUp5.addEventListener("click", function sheepy5() {
	if (woolCount >= 5000 && pristineWool >= 5) {
		woolCount -= 5000;
		pristineWool -= 5;
		sheepUpgrade5 = 3;
		sheepUp5.classList.add("used");
		sheepUp5.removeEventListener("click", sheepy5);
		fleeceSpot.innerHTML = pristineWool;
	}
});

sheepUp6.addEventListener("click", function sheepy6() {
	if (woolCount >= 5000) {
		woolCount -= 5000;
		sheepUpgrade6 = 2;
		sheepUp6.classList.add("used");
		sheepUp6.removeEventListener("click", sheepy6);
	}
});

sheepUp7.addEventListener("click", function sheepy7() {
	if (woolCount >= 12000) {
		woolCount -= 12000;
		sheepUpgrade7 = 2;
		sheepUp7.classList.add("used");
		sheepUp7.removeEventListener("click", sheepy7);
	}
});

sheepUp8.addEventListener("click", function sheepy8() {
	if (woolCount >= 20000) {
		woolCount -= 20000;
		sheepUpgrade8 = 2;
		sheepUp8.classList.add("used");
		sheepUp8.removeEventListener("click", sheepy8);
	}
});

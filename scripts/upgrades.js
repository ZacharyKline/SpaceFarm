//========================================================
// Button Variables
//========================================================
// Click upgrades
const clickUp1 = document.querySelector('#clickUp1')
const clickUp2 = document.querySelector("#clickUp2");
const clickUp3 = document.querySelector("#clickUp3");
const clickUp4 = document.querySelector("#clickUp4");
const clickUp5 = document.querySelector("#clickUp5");
const clickUp6 = document.querySelector("#clickUp6");
const clickUp7 = document.querySelector("#clickUp7");
const clickUp8 = document.querySelector("#clickUp8");
// animal parts upgrades
const sacUp1 = document.querySelector('#sacUp1')
const sacUp2 = document.querySelector("#sacUp2");
const sacUp3 = document.querySelector("#sacUp3");
const sacUp4 = document.querySelector("#sacUp4");

// buttons for sheep
const sheepUp1 = document.querySelector("#sheepUp1");
const sheepUp2 = document.querySelector("#sheepUp2");
const sheepUp3 = document.querySelector("#sheepUp3");
const sheepUp4 = document.querySelector("#sheepUp4");
const sheepUp5 = document.querySelector("#sheepUp5");
const sheepUp6 = document.querySelector("#sheepUp6");
const sheepUp7 = document.querySelector("#sheepUp7");
const sheepUp8 = document.querySelector("#sheepUp8");
// buttons for cow
const cowUp1 = document.querySelector('#cowUp1')
const cowUp2 = document.querySelector("#cowUp2");
const cowUp3 = document.querySelector("#cowUp3");
const cowUp4 = document.querySelector("#cowUp4");
const cowUp5 = document.querySelector("#cowUp5");
const cowUp6 = document.querySelector("#cowUp6");
const cowUp7 = document.querySelector("#cowUp7");
const cowUp8 = document.querySelector("#cowUp8 ");
// buttons for chicken
const chickenUp1 = document.querySelector('chickenUp1')
const chickenUp2 = document.querySelector("chickenUp2");
const chickenUp3 = document.querySelector("chickenUp3");
const chickenUp4 = document.querySelector("chickenUp4");
const chickenUp5 = document.querySelector("chickenUp5");
const chickenUp6 = document.querySelector("chickenUp6");
const chickenUp7 = document.querySelector("chickenUp7");
const chickenUp8 = document.querySelector("chickenUp8");
// buttons for goats
const goatUp1 = document.querySelector('goatUp1')
const goatUp2 = document.querySelector("goatUp2");
const goatUp3 = document.querySelector("goatUp3");
const goatUp4 = document.querySelector("goatUp4");
const goatUp5 = document.querySelector("goatUp5");
const goatUp6 = document.querySelector("goatUp6");
const goatUp7 = document.querySelector("goatUp7");
const goatUp8 = document.querySelector("goatUp8");
// buttons for geese
const gooseUp1 = document.querySelector('#gooseUp1')
const gooseUp2 = document.querySelector("#gooseUp2");
const gooseUp3 = document.querySelector("#gooseUp3");
const gooseUp4 = document.querySelector("#gooseUp4");
const gooseUp5 = document.querySelector("#gooseUp5");
const gooseUp6 = document.querySelector("#gooseUp6");
const gooseUp7 = document.querySelector("#gooseUp7");
const gooseUp8 = document.querySelector("#gooseUp8");
 // buttons for ducks
const duckUp1 = document.querySelector('#duckUp1')
const duckUp2 = document.querySelector("#duckUp2");
const duckUp3 = document.querySelector("#duckUp3");
const duckUp4 = document.querySelector("#duckUp4");
const duckUp5 = document.querySelector("#duckUp5");
const duckUp6 = document.querySelector("#duckUp6");
const duckUp7 = document.querySelector("#duckUp7");
const duckUp8 = document.querySelector("#duckUp8");
// buttons for pigs
const pigUp1 = document.querySelector('#pigUp1')
const pigUp2 = document.querySelector("#pigUp2");
const pigUp3 = document.querySelector("#pigUp3");
const pigUp4 = document.querySelector("#pigUp4");
const pigUp5 = document.querySelector("#pigUp5");
const pigUp6 = document.querySelector("#pigUp6");
const pigUp7 = document.querySelector("#pigUp7");
const pigUp8 = document.querySelector("#pigUp8");
// buttons for bees
const beeUp1 = document.querySelector('#beeUp1')
const beeUp2 = document.querySelector("#beeUp2");
const beeUp3 = document.querySelector("#beeUp3");
const beeUp4 = document.querySelector("#beeUp4");
const beeUp5 = document.querySelector("#beeUp5");
const beeUp6 = document.querySelector("#beeUp6");
const beeUp7 = document.querySelector("#beeUp7");
const beeUp8 = document.querySelector("#beeUp8");

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

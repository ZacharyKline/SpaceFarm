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
const chickenUp1 = document.querySelector('#chickenUp1')
const chickenUp2 = document.querySelector("#chickenUp2");
const chickenUp3 = document.querySelector("#chickenUp3");
const chickenUp4 = document.querySelector("#chickenUp4");
const chickenUp5 = document.querySelector("#chickenUp5");
const chickenUp6 = document.querySelector("#chickenUp6");
const chickenUp7 = document.querySelector("#chickenUp7");
const chickenUp8 = document.querySelector("#chickenUp8");
// buttons for goats
const goatUp1 = document.querySelector('#goatUp1')
const goatUp2 = document.querySelector("#goatUp2");
const goatUp3 = document.querySelector("#goatUp3");
const goatUp4 = document.querySelector("#goatUp4");
const goatUp5 = document.querySelector("#goatUp5");
const goatUp6 = document.querySelector("#goatUp6");
const goatUp7 = document.querySelector("#goatUp7");
const goatUp8 = document.querySelector("#goatUp8");
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

// Cow
cowUp1.addEventListener('click', function cowy1() {
    if (milkCount >= 200) {
        milkCount -= 200
        cowUpgrade1 = 2
        cowUp1.classList.add("used");
        cowUp1.removeEventListener('click', cowy1)

    }
})

cowUp2.addEventListener("click", function cowy2() {
    if (milkCount >= 2000) {
        milkCount -= 2000
        cowUpgrade2 = 2
        cowUp2.classList.add("used");
        cowUp2.removeEventListener("click", cowy2);

    }
 });

cowUp3.addEventListener("click", function cowy3() { 
    if (milkCount >= 10000) {
			milkCount -= 10000;
			cowUpgrade3 = 2;
			cowUp3.classList.add("used");
			cowUp3.removeEventListener("click", cowy3);
		}
});

cowUp4.addEventListener("click", function cowy4() { 
    if (milkCount >= 25000) {
			milkCount -= 25000;
			cowUpgrade4 = 2;
			cowUp4.classList.add("used");
			cowUp4.removeEventListener("click", cowy4);
		}
});

cowUp5.addEventListener("click", function cowy5() { 
    if (milkCount >= 100000) {
			milkCount -= 100000;
			cowUpgrade5 = 2;
			cowUp5.classList.add("used");
			cowUp5.removeEventListener("click", cowy5);
		}
});

cowUp6.addEventListener("click", function cowy6() { 
    if (milkCount >= 250000) {
			milkCount -= 250000;
			cowUpgrade6 = 2;
			cowUp6.classList.add("used");
			cowUp6.removeEventListener("click", cowy6);
		}
});

cowUp7.addEventListener("click", function cowy7() { 
    if (milkCount >= 750000) {
			milkCount -= 750000;
			cowUpgrade7 = 2;
			cowUp7.classList.add("used");
			cowUp7.removeEventListener("click", cowy7);
		}
});

cowUp8.addEventListener("click", function cowy8() {
    if (milkCount >= 1000000) {
			milkCount -= 1000000;
			cowUpgrade8 = 2;
			cowUp8.classList.add("used");
			cowUp8.removeEventListener("click", cowy8);
		}
});
// Chicken
chickenUp1.addEventListener('click', function chicken1(){
        if (eggCount >= 10000) {
			eggCount -= 10000;
			chickenUpgrade1 = 2;
			chickenUp1.classList.add("used");
			chickenUp1.removeEventListener("click", chicken1);
		}
})
chickenUp2.addEventListener('click', function chicken2(){
        if (eggCount >= 10000) {
			eggCount -= 10000;
			chickenUpgrade2 = 2;
			chickenUp2.classList.add("used");
			chickenUp2.removeEventListener("click", chicken2);
		}
})
chickenUp3.addEventListener('click', function chicken3(){
        if (eggCount >= 10000) {
			eggCount -= 10000;
			chickenUpgrade3 = 2;
			chickenUp3.classList.add("used");
			chickenUp3.removeEventListener("click", chicken3);
		}
})
chickenUp4.addEventListener("click", function chicken4() {
	if (eggCount >= 10000) {
		eggCount -= 10000;
		chickenUpgrade4 = 2;
		chickenUp4.classList.add("used");
		chickenUp4.removeEventListener("click", chicken4);
	}
});
chickenUp5.addEventListener("click", function chicken5() {
	if (eggCount >= 10000) {
		eggCount -= 10000;
		chickenUpgrade5 = 2;
		chickenUp5.classList.add("used");
		chickenUp5.removeEventListener("click", chicken5);
	}
});
chickenUp6.addEventListener("click", function chicken6() {
	if (eggCount >= 10000) {
		eggCount -= 10000;
		chickenUpgrade6 = 2;
		chickenUp6.classList.add("used");
		chickenUp6.removeEventListener("click", chicken6);
	}
});
chickenUp7.addEventListener("click", function chicken7() {
	if (eggCount >= 10000) {
		eggCount -= 10000;
		chickenUpgrade7 = 2;
		chickenUp7.classList.add("used");
		chickenUp7.removeEventListener("click", chicken7);
	}
});
chickenUp8.addEventListener("click", function chicken8() {
	if (eggCount >= 10000) {
		eggCount -= 10000;
		chickenUpgrade8 = 2;
		chickenUp8.classList.add("used");
		chickenUp8.removeEventListener("click", chicken8);
	}
});
// Goats
goatUp1.addEventListener('click', function goat1() {
    if (gmilkCount >= 400) {
        gmilkCount -= 400;
        goatUpgrade1 = 2;
        goatUp1.classList.add("used");
        goatUp1.removeEventListener("click", goat1);
    }
})
goatUp2.addEventListener("click", function goat2() {
	if (gmilkCount >= 400) {
		gmilkCount -= 400;
		goatUpgrade2 = 2;
		goatUp2.classList.add("used");
		goatUp2.removeEventListener("click", goat2);
	}
});
goatUp3.addEventListener("click", function goat3() {
	if (gmilkCount >= 400) {
		gmilkCount -= 400;
		goatUpgrade3 = 2;
		goatUp3.classList.add("used");
		goatUp3.removeEventListener("click", goat3);
	}
});
goatUp4.addEventListener("click", function goat4() {
	if (gmilkCount >= 400) {
		gmilkCount -= 400;
		goatUpgrade4 = 2;
		goatUp4.classList.add("used");
		goatUp4.removeEventListener("click", goat4);
	}
});
goatUp5.addEventListener("click", function goat5() {
	if (gmilkCount >= 400) {
		gmilkCount -= 400;
		goatUpgrade5 = 2;
		goatUp5.classList.add("used");
		goatUp5.removeEventListener("click", goat5);
	}
});
goatUp6.addEventListener("click", function goat6() {
	if (gmilkCount >= 400) {
		gmilkCount -= 400;
		goatUpgrade6 = 2;
		goatUp6.classList.add("used");
		goatUp6.removeEventListener("click", goat6);
	}
});
goatUp7.addEventListener("click", function goat7() {
	if (gmilkCount >= 400) {
		gmilkCount -= 400;
		goatUpgrade7 = 2;
		goatUp7.classList.add("used");
		goatUp7.removeEventListener("click", goat7);
	}
});
goatUp8.addEventListener("click", function goat8() {
	if (gmilkCount >= 400) {
		gmilkCount -= 400;
		goatUpgrade8 = 2;
		goatUp8.classList.add("used");
		goatUp8.removeEventListener("click", goat8);
	}
});
// Geese
gooseUp1.addEventListener('click', function goose1() {
    if (chaosCount >= 300) {
        chaosCount -= 300;
        geeseUpgrade1 = 2;
        gooseUp1.classList.add("used");
        gooseUp1.removeEventListener('click', goose1)
    }
})
gooseUp2.addEventListener("click", function goose2() {
	if (chaosCount >= 300) {
		chaosCount -= 300;
		geeseUpgrade2 = 2;
		gooseUp2.classList.add("used");
		gooseUp2.removeEventListener("click", goose2);
	}
});
gooseUp3.addEventListener("click", function goose3() {
	if (chaosCount >= 300) {
		chaosCount -= 300;
		geeseUpgrade3 = 2;
		gooseUp3.classList.add("used");
		gooseUp3.removeEventListener("click", goose3);
	}
});
gooseUp4.addEventListener("click", function goose4() {
	if (chaosCount >= 300) {
		chaosCount -= 300;
		geeseUpgrade4 = 2;
		gooseUp4.classList.add("used");
		gooseUp4.removeEventListener("click", goose4);
	}
});
gooseUp5.addEventListener("click", function goose5() {
	if (chaosCount >= 300) {
		chaosCount -= 300;
		geeseUpgrade5 = 2;
		gooseUp5.classList.add("used");
		gooseUp5.removeEventListener("click", goose5);
	}
});
gooseUp6.addEventListener("click", function goose6() {
	if (chaosCount >= 300) {
		chaosCount -= 300;
		geeseUpgrade6 = 2;
		gooseUp6.classList.add("used");
		gooseUp6.removeEventListener("click", goose6);
	}
});
gooseUp7.addEventListener("click", function goose7() {
	if (chaosCount >= 300) {
		chaosCount -= 300;
		geeseUpgrade7 = 2;
		gooseUp7.classList.add("used");
		gooseUp7.removeEventListener("click", goose7);
	}
});
gooseUp8.addEventListener("click", function goose8() {
	if (chaosCount >= 300) {
		chaosCount -= 300;
		geeseUpgrade8 = 2;
		gooseUp8.classList.add("used");
		gooseUp8.removeEventListener("click", goose8);
	}
});
// Ducks
duckUp1.addEventListener('click', function duck1(){
    if (dEggCount >= 500) {
        dEggCount -= 500;
        duckUpgrade1 = 2;
        duckUp1.classList.add("used");
        duckUp1.removeEventListener("click", duck1);
    }
})
duckUp2.addEventListener("click", function duck2() {
	if (dEggCount >= 500) {
		dEggCount -= 500;
		duckUpgrade2 = 2;
		duckUp2.classList.add("used");
		duckUp2.removeEventListener("click", duck2);
	}
});
duckUp3.addEventListener("click", function duck3() {
	if (dEggCount >= 500) {
		dEggCount -= 500;
		duckUpgrade3 = 2;
		duckUp3.classList.add("used");
		duckUp3.removeEventListener("click", duck3);
	}
});
duckUp4.addEventListener("click", function duck4() {
	if (dEggCount >= 500) {
		dEggCount -= 500;
		duckUpgrade4 = 2;
		duckUp4.classList.add("used");
		duckUp4.removeEventListener("click", duck4);
	}
});
duckUp5.addEventListener("click", function duck5() {
	if (dEggCount >= 500) {
		dEggCount -= 500;
		duckUpgrade5 = 2;
		duckUp5.classList.add("used");
		duckUp5.removeEventListener("click", duck5);
	}
});
duckUp6.addEventListener("click", function duck6() {
	if (dEggCount >= 500) {
		dEggCount -= 500;
		duckUpgrade6 = 2;
		duckUp6.classList.add("used");
		duckUp6.removeEventListener("click", duck6);
	}
});
duckUp7.addEventListener("click", function duck7() {
	if (dEggCount >= 500) {
		dEggCount -= 500;
		duckUpgrade7 = 2;
		duckUp7.classList.add("used");
		duckUp7.removeEventListener("click", duck7);
	}
});
duckUp8.addEventListener("click", function duck8() {
	if (dEggCount >= 500) {
		dEggCount -= 500;
		duckUpgrade8 = 2;
		duckUp8.classList.add("used");
		duckUp8.removeEventListener("click", duck8);
	}
});
// Pigs
pigUp1.addEventListener('click', function pig1() {
	if (pigletCount >= 400) {
		pigletCount -= 400
		pigUpgrade1 = 2
		pigUp1.classList.add("used");
		pigUp1.removeEventListener('click', pig1)
	}
})
pigUp2.addEventListener("click", function pig2() {
	if (pigletCount >= 400) {
		pigletCount -= 400;
		pigUpgrade2 = 2;
		pigUp2.classList.add("used");
		pigUp2.removeEventListener("click", pig2);
	}
});
pigUp3.addEventListener("click", function pig3() {
	if (pigletCount >= 400) {
		pigletCount -= 400;
		pigUpgrade3 = 2;
		pigUp3.classList.add("used");
		pigUp3.removeEventListener("click", pig3);
	}
});
pigUp4.addEventListener("click", function pig4() {
	if (pigletCount >= 400) {
		pigletCount -= 400;
		pigUpgrade4 = 2;
		pigUp4.classList.add("used");
		pigUp4.removeEventListener("click", pig4);
	}
});
pigUp5.addEventListener("click", function pig5() {
	if (pigletCount >= 400) {
		pigletCount -= 400;
		pigUpgrade5 = 2;
		pigUp5.classList.add("used");
		pigUp5.removeEventListener("click", pig5);
	}
});
pigUp6.addEventListener("click", function pig6() {
	if (pigletCount >= 400) {
		pigletCount -= 400;
		pigUpgrade6 = 2;
		pigUp6.classList.add("used");
		pigUp6.removeEventListener("click", pig6);
	}
});
pigUp7.addEventListener("click", function pig7() {
	if (pigletCount >= 400) {
		pigletCount -= 400;
		pigUpgrade7 = 2;
		pigUp7.classList.add("used");
		pigUp7.removeEventListener("click", pig7);
	}
});
pigUp8.addEventListener("click", function pig8() {
	if (pigletCount >= 400) {
		pigletCount -= 400;
		pigUpgrade8 = 2;
		pigUp8.classList.add("used");
		pigUp8.removeEventListener("click", pig8);
	}
});
// Bees
beeUp1.addEventListener('click', function bee1() {
	if (honeyCount >= 500) {
		honeyCount -= 500
		beeUpgrade1 = 2
		beeUp1.classList.add("used");
		beeUp1.removeEventListener('click', bee1)
	}
})
beeUp2.addEventListener("click", function bee2() {
	if (honeyCount >= 500) {
		honeyCount -= 500;
		beeUpgrade2 = 2;
		beeUp2.classList.add("used");
		beeUp2.removeEventListener("click", bee2);
	}
});
beeUp3.addEventListener("click", function bee3() {
	if (honeyCount >= 500) {
		honeyCount -= 500;
		beeUpgrade3 = 2;
		beeUp3.classList.add("used");
		beeUp3.removeEventListener("click", bee3);
	}
});

beeUp4.addEventListener('click', function bee4() {
	if (honeyCount >= 500) {
		honeyCount -= 500
		beeUpgrade4 = 2
		beeUp4.classList.add("used");
		beeUp4.removeEventListener('click', bee4)
	}
})
beeUp5.addEventListener('click', function bee5() {
	if (honeyCount >= 500) {
		honeyCount -= 500
		beeUpgrade5 = 2
		beeUp5.classList.add("used");
		beeUp5.removeEventListener('click', bee5)
	}
})
beeUp6.addEventListener('click', function bee6() {
	if (honeyCount >= 500) {
		honeyCount -= 500
		beeUpgrade6 = 2
		beeUp6.classList.add("used");
		beeUp6.removeEventListener('click', bee6)
	}
})
beeUp7.addEventListener('click', function bee7() {
	if (honeyCount >= 500) {
		honeyCount -= 500
		beeUpgrade7 = 2
		beeUp7.classList.add("used");
		beeUp7.removeEventListener('click', bee7)
	}
})
beeUp8.addEventListener('click', function bee8() {
	if (honeyCount >= 500) {
		honeyCount -= 500
		beeUpgrade8 = 2
		beeUp8.classList.add("used");
		beeUp8.removeEventListener('click', bee8)
	}
})

// Sacrifice

// Clicker
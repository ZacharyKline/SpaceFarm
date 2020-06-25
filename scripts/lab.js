//Imports for the various abominations you can make
let stardust = 0;  // Placeholder for the reset resource
let specialAnimalAmount = 1;
const unicornName = document.querySelector('#unicornName')
const unicornImage = document.querySelector('#unicornImage');
const unicornButt = document.querySelector('#unicornButt');
const shiggName = document.querySelector('#shiggName');
const shiggImage = document.querySelector('#shiggImage');
const shiggButt = document.querySelector('#shiggButt')
const sheatName = document.querySelector("#sheatName");
const sheatImage = document.querySelector("#sheatImage");
const sheatButt = document.querySelector("#sheatButt");
const flyingPigName = document.querySelector("#flyingPigName");
const flyingPigImage = document.querySelector("#flyingPigImage");
const flyingPigButt = document.querySelector("#flyingPigButt");
const goowName = document.querySelector("#goowName");
const goowImage = document.querySelector("#goowImage");
const goowButt = document.querySelector("#goowButt");
const turduckenName = document.querySelector("#turduckenName");
const turduckenImage = document.querySelector("#turduckenImage");
const turduckenButt = document.querySelector("#turduckenButt");



// Buying the abominations


//Unlock intervals

const unlockSpecialInterval = setInterval(function () {
    //Add in unicorn related unlocks here
    if (bloodCount > 1) {
        unicornName.innerHTML = '<h3> Unicorn </h3>'
		unicornImage.innerHTML ='<img src="./img/unicorn.jpeg" class="animals" height=100 width=100/>';
        unicornButt.innerHTML = '<button onclick="buyUnicorn()">Make a Unicorn</button>';
        sheatName.innerHTML = "<h1>Sheat</h1>";
        sheatImage.innerHTML = '<img src="./img/unicorn.jpeg" class="animals" height=100 width=100/>';
        sheatButt.innerHTML = '<button onclick="buySheat()">Make a Sheat</button>';
        shiggName.innerHTML = "<h1>Shigg</h1>";
        shiggImage.innerHTML = '<img src="./img/unicorn.jpeg" class="animals" height=100 width=100/>';
        shiggButt.innerHTML = '<button onclick="buyShigg()">Make a Shigg</button>';
        flyingPigName.innerHTML = "<h1>Flying Pig</h1>";
        flyingPigImage.innerHTML = '<img src="./img/unicorn.jpeg" class="animals" height=100 width=100/>';
        flyingPigButt.innerHTML = '<button onclick="buyFlyingPig()">Make a FlyingPig</button>';
        goowName.innerHTML = "<h1>Goow</h1>";
        goowImage.innerHTML = '<img src="./img/unicorn.jpeg" class="animals" height=100 width=100/>';
        goowButt.innerHTML = '<button onclick="buyGoow()">Make a Goow</button>';
        turduckenName.innerHTML = '<h1>Turducken</h1>'
        turduckenImage.innerHTML = '<img src="./img/unicorn.jpeg" class="animals" height=100 width=100/>';
        turduckenButt.innerHTML = '<button onclick="buyTurducken()">Make a Turducken</button>';
		stop(unlockSpecialInterval);
	}
}, 5000);
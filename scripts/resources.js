// This is the javascript file to mess around with resources, and animals, etc.

//Global variables:
let clickButton = document.getElementById('clickMe');
const sheepAudio = new Audio('./audio/lamb.wav')
//Resources per second
let woolCount = 0   //Wool per second
let milkCount = 0  //Milk per second
let eggCount = 0  //Eggs per second
let gmilkCount = 0  //Goats Milk per second?
let chaosCount = 0
let dEggCount = 0
let squaredEyes = 0  //Special rare sheep currency
let timeValue = 3

// Broken for now.
// function incomeCalc(animalname, animalcost, animalcount, resourcecount, resourcename) {
//         resourcecount -= animalcost;
//         let toThePowerOf = Math.pow(1.1, animalcount);
//         animalcost = Math.trunc(22 * toThePowerOf);
//         animalcount += 1
//         console.log(animalcount)
//         document.getElementById(animalname + "y").innerHTML = animalcount
//         document.getElementById(resourcename + 'y').innerHTML = resourcecount
//         document.getElementById(animalname+ "pricy").innerHTML = animalcost + " " + resourcename;
// }

//The first and most basic currency in the space farm game will be wool, and their producer will be space sheep.
function shearButton(number) {
    randomNum = Math.floor(Math.random() * 100)
    woolCount = woolCount + number
    document.getElementById('wooly').innerHTML = woolCount;

}

//========================================================
//Animals/Hire Sheep
//========================================================
let sheepPrice = 20
let sheepCount = 0
let startingInt = sheepCount + 1

function generateWool(number) {
	woolCount = woolCount + number;
	document.getElementById("wooly").innerHTML = woolCount;
    timeValue = timeValue / sheepCount
}

function buySheep() {
    // if (woolCount >= sheepPrice) {
    //     incomeCalc("sheep", sheepPrice, sheepCount, woolCount, 'wool')
    // }
    if (woolCount >= sheepPrice) {
        woolCount -= sheepPrice;
        let toThePowerOf = Math.pow(1.1, sheepCount);
        sheepPrice = Math.trunc(22 * toThePowerOf);
        sheepCount += 1
        document.getElementById('sheepy').innerHTML = sheepCount
        document.getElementById('wooly').innerHTML = woolCount
        document.getElementById('sheeppricy').innerHTML = sheepPrice + ' Wool'
    //     // very annoying
    //     // sheepAudio.play(); 

    }

}

window.setInterval(function () {
    generateWool(sheepCount);

}, timeValue)


//========================================================
//Animals/Hire Cow
//========================================================
let cowPrice = 10
let cowCount = 0

function generateMilk(number) {
    milkCount = milkCount + number
    document.getElementById('milky').innerHTML = milkCount;
}

function buyCows() {

    if (woolCount >= cowPrice) {
        woolCount -= cowPrice
        let toThePowerOf = Math.pow(1.1, cowCount);
        cowPrice = Math.trunc(12 * toThePowerOf);
        cowCount += 1
        document.getElementById('wooly').innerHTML = woolCount
        document.getElementById('cowNumber').innerHTML = cowCount
        document.getElementById('milky').innerHTML = milkCount
        document.getElementById('cowy').innerHTML = "<button onclick='buyCows()'>" + cowPrice + " wool" + "</button>"
    }
}

window.setInterval(function () {
    generateMilk(cowCount)

}, timeValue)

//========================================================
//Animals/Hire Chicken
//========================================================
let chickenPrice = 10
let chickenCount = 0

function generateEggs(number) {
    eggCount = eggCount + number
    document.getElementById('eggy').innerHTML = eggCount;
}

function buyChickens() {
    if (milkCount >= chickenPrice) {
        milkCount -= chickenPrice
        let toThePowerOf = Math.pow(1.1, chickenCount);
        chickenPrice = Math.trunc(12 * toThePowerOf);
        chickenCount += 1
        document.getElementById('milky').innerHTML = milkCount
        document.getElementById('chickenNumber').innerHTML = chickenCount
        document.getElementById('eggy').innerHTML = eggCount
        document.getElementById('chickeny').innerHTML = "<button onclick='buyChickens()'>" + chickenPrice + " milk" + "</button>"
    }
}

window.setInterval(function () {
    generateEggs(chickenCount)
}, timeValue)

//========================================================
//Animals/Hire Goats
//========================================================
let goatPrice = 2000
let goatCount = 0

function generateGMilk(number) {
    gmilkCount = gmilkCount + number
    document.getElementById('gmilky').innerHTML = gmilkCount;
}

function buyGoats() {
    if (eggCount >= goatPrice) {
        eggCount -= goatPrice
        let toThePowerOf = Math.pow(1.1, goatCount);
        goatPrice = Math.trunc(2200 * toThePowerOf);
        goatCount += 1
        document.getElementById('eggy').innerHTML = eggCount
        document.getElementById('goatNumber').innerHTML = goatCount
        document.getElementById('gmilky').innerHTML = gmilkCount
        document.getElementById('goaty').innerHTML = "<button onclick='buyGoats()'>" + goatPrice + " eggs" + "</button>"
    }
}

window.setInterval(function () {
    generateGMilk(goatCount)
}, timeValue)

//========================================================
//Animals/Hire Geese
//========================================================
let goosePrice = 100
let gooseCount = 0

function generateChaos(number) {
    chaosCount = chaosCount + number
    document.getElementById('chaosy').innerHTML = chaosCount
}

function buyGeese() {
    if (gmilkCount >= goosePrice) {
        gmilkCount -= goosePrice
        let toThePowerOf = Math.pow(1.1, gooseCount);
        goosePrice = Math.trunc(110 * toThePowerOf);
        gooseCount += 1
        document.getElementById('gmilky').innerHTML = gmilkCount
        document.getElementById('gooseNumber').innerHTML = gooseCount
        document.getElementById('chaosy').innerHTML = chaosCount
        document.getElementById('goosey').innerHTML = "<button onclick='buyGeese()'>" + goosePrice + " g-milk" + "</button>"
    }
}

window.setInterval(function () {
    generateChaos(gooseCount)
}, timeValue)
//========================================================
//Animals/Hire Ducks
//========================================================
let duckPrice = 100;
let duckCount = 0;

function generateDuckEggs(number) {
	dEggCount = dEggCount + number;
	document.getElementById("deggy").innerHTML = dEggCount;
}

function buyDucks() {
    console.log('click')
	if (chaosCount >= duckPrice) {
		chaosCount -= duckPrice;
		let toThePowerOf = Math.pow(1.1, duckCount);
		duckPrice = Math.trunc(110 * toThePowerOf);
		duckCount += 1;
		document.getElementById("chaosy").innerHTML = chaosCount;
		document.getElementById("duckNumber").innerHTML = duckCount;
		document.getElementById("deggy").innerHTML = dEggCount;
		document.getElementById("duckey").innerHTML = "<button onclick='buyDucks()'>" + duckPrice + " chaos" + "</button>";
	}
}

window.setInterval(function () {
	generateDuckEggs(duckCount);
}, timeValue);

//========================================================
//Animals/Hire Pigs
//========================================================



//========================================================
//Set interval to check if things are unlocked
//========================================================
const sheepInterval = setInterval(function () {
    //Add in the sheep related unlocks here
    if (sheepCount > 10) {
        document.getElementById('cowy').innerHTML = '<button onclick="buyCows()">10 wool</button>'
        document.getElementById('cowCounty').innerHTML = "Cows: <p id='cowNumber'>0</p>"
        // document.getElementById('milkSpot').innerHTML = "Milk: <p id='milky'>0</p>"
        clearInterval(sheepInterval)
    }
}, 5000)

// TODO: Known bug, this is currently not clearing interval after finishing the objective.
const cowInterval = setInterval(function () {
    //Add in cow related unlocks here
    if (cowCount > 5) {
        document.getElementById('chickeny').innerHTML = '<button onclick="buyChickens()">20 milk</button>'
        document.getElementById('chickenCounty').innerHTML = "Chickens: <p id='chickenNumber'>0</p>"
        // document.getElementById('eggSpot').innerHTML = "Egg: <p id='eggy'>0</p>"
        clearInterval(cowInterval)
    }
}, 5000)

const chickenInterval = setInterval(function () {
    //Add in chicken related unlocks here
    if (eggCount > 1000) {
        document.getElementById('goaty').innerHTML = '<button onclick="buyGoats()">2000 eggs</button>'
        document.getElementById('goatCounty').innerHTML = "Goats: <p id='goatNumber'>0</p>"
        // document.getElementById('gmilkSpot').innerHTML = "G-Milk: <p id='gmilky'>0</p>"
        clearInterval(chickenInterval)
    }
}, 5000)

const goatInterval = setInterval(function () {
    //Add in chicken related unlocks here
    if (gmilkCount > 500) {
        document.getElementById('goosey').innerHTML = '<button onclick="buyGeese()">100 gmilk</button>'
        document.getElementById('gooseCounty').innerHTML = "Goose: <p id='gooseNumber'>0</p>"
        // document.getElementById('chaosSpot').innerHTML = "CHAOS: <p id='chaosy'>0</p>"
        clearInterval(goatInterval)
    }
}, 5000)

const gooseInterval = setInterval(function () {
    if (chaosCount > 1000) {
        document.getElementById('duckey').innerHTML = '<button onclick="buyDucks()">100 chaos</button>'
        document.getElementById('duckCounty').innerHTML = "Duck: <p id='duckNumber'>0</p>"
        clearInterval(gooseInterval)
    }
})
// This is the javascript file to mess around with resources, and animals, etc.

//Global variables:
const clickButton = document.querySelector('#clickMe');
const sheepUp1 = document.querySelector('#sheepUp1')
const sheepUp2 = document.querySelector('#sheepUp2')
const sheepAudio = new Audio('./audio/lamb.wav')
//Resources per second
let woolCount = 440
0   //Wool per second
let woolGenerator = 1
let milkCount = 0  //Milk per second
let eggCount = 0  //Eggs per second
let gmilkCount = 0  //Goats Milk per second?
let chaosCount = 0
let dEggCount = 0
let timeValue = 1000
let sheepUpgrade1 = 1
let sheepUpgrade2 = 1
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
let commaIncluded = value => value.toString().split('').reverse().map((element, index)=>index%3===0?element+=',':element).reverse().join('').slice(0,-1)

//========================================================
//Animals/Hire Sheep
//========================================================
let sheepPrice = 20
let sheepCount = 0

function generateWool(number) {
//    woolGenerator += number
    woolCount = woolCount + number * sheepUpgrade1 * sheepUpgrade2
    let stringed = commaIncluded(woolCount)
	document.getElementById("wooly").innerHTML = stringed;
}

function buySheep() {
    // if (woolCount >= sheepPrice) {
    //     incomeCalc("sheep", sheepPrice, sheepCount, woolCount, 'wool')
    // }
    if (woolCount >= sheepPrice) {
        woolCount -= sheepPrice;
        let toThePowerOf = Math.pow(1.05, sheepCount);
        sheepPrice = Math.trunc(22 * toThePowerOf);
        sheepCount += 1
        document.getElementById('sheepy').innerHTML = commaIncluded(sheepCount)
        document.getElementById('wooly').innerHTML = commaIncluded(woolCount)
        document.getElementById('sheeppricy').innerHTML = commaIncluded(sheepPrice) + ' Wool'
    //     // very annoying
    //     // sheepAudio.play(); 

    }

}

// inspired by https://teamtreehouse.com/community/how-to-run-setinterval-with-dynamic-delay-value

function sheepAccumulator(){
    // recursive function to dynamically alter time based off of sheep count
    setTimeout(() =>{
        // only 0 or 1 wool per increment of time based on sheep count
        generateWool(sheepCount >= 1 ? 1 : sheepCount);
        // recurse!
        sheepAccumulator()
    }, (timeValue-sheepCount)/(sheepCount))
    // formula acquired from logistics function 
}
sheepAccumulator()


//========================================================
//Animals/Hire Cow
//========================================================
let cowPrice = 10
let cowCount = 0

function generateMilk(number) {
    milkCount = milkCount + number
    document.getElementById('milky').innerHTML = commaIncluded(milkCount);
}

function buyCows() {

    if (woolCount >= cowPrice) {
        woolCount -= cowPrice
        let toThePowerOf = Math.pow(1.1, cowCount);
        cowPrice = Math.trunc(12 * toThePowerOf);
        cowCount += 1
        document.getElementById('wooly').innerHTML = commaIncluded(woolCount)
        document.getElementById('cowNumber').innerHTML = commaIncluded(cowCount)
        document.getElementById('milky').innerHTML = commaIncluded(milkCount)
        document.getElementById('cowy').innerHTML = "<button onclick='buyCows()'>" + commaIncluded(cowPrice) + " wool" + "</button>"
    }
}

function cowAccumulator(){
    setTimeout(() =>{
        generateMilk(cowCount >= 1 ? 1 : cowCount);
        cowAccumulator()
    }, (timeValue-cowCount)/(cowCount))
    // formula acquired from logistics function 
}
cowAccumulator()

//========================================================
//Animals/Hire Chicken
//========================================================
let chickenPrice = 10
let chickenCount = 0

function generateEggs(number) {
    eggCount = eggCount + number
    document.getElementById('eggy').innerHTML = commaIncluded(eggCount);
}

function buyChickens() {
    if (milkCount >= chickenPrice) {
        milkCount -= chickenPrice
        let toThePowerOf = Math.pow(1.1, chickenCount);
        chickenPrice = Math.trunc(12 * toThePowerOf);
        chickenCount += 1
        document.getElementById('milky').innerHTML = commaIncluded(milkCount)
        document.getElementById('chickenNumber').innerHTML = commaIncluded(chickenCount)
        document.getElementById('eggy').innerHTML = commaIncluded(eggCount)
        document.getElementById('chickeny').innerHTML = "<button onclick='buyChickens()'>" + commaIncluded(chickenPrice) + " milk" + "</button>"
    }
}

function chickenAccumulator(){
    setTimeout(() =>{
        generateEggs(chickenCount >= 1 ? 1 : chickenCount);
        chickenAccumulator()
    }, (timeValue-chickenCount)/(chickenCount))
    // formula acquired from logistics function 
}
chickenAccumulator()
//========================================================
//Animals/Hire Goats
//========================================================
let goatPrice = 2000
let goatCount = 0

function generateGMilk(number) {
    gmilkCount = gmilkCount + number
    document.getElementById('gmilky').innerHTML = commaIncluded(gmilkCount);
}

function buyGoats() {
    if (eggCount >= goatPrice) {
        eggCount -= goatPrice
        let toThePowerOf = Math.pow(1.1, goatCount);
        goatPrice = Math.trunc(2200 * toThePowerOf);
        goatCount += 1
        document.getElementById('eggy').innerHTML = commaIncluded(eggCount)
        document.getElementById('goatNumber').innerHTML = commaIncluded(goatCount)
        document.getElementById('gmilky').innerHTML = commaIncluded(gmilkCount)
        document.getElementById('goaty').innerHTML = "<button onclick='buyGoats()'>" + commaIncluded(goatPrice) + " eggs" + "</button>"
    }
}
function goatAccumulator(){
    setTimeout(() =>{
        generateGMilk(goatCount >= 1 ? 1 : goatCount);
        goatAccumulator()
    }, (timeValue-goatCount)/(goatCount))
    // formula acquired from logistics function 
}
goatAccumulator()
//========================================================
//Animals/Hire Geese
//========================================================
let goosePrice = 100
let gooseCount = 0

function generateChaos(number) {
    chaosCount = chaosCount + number
    document.getElementById('chaosy').innerHTML = commaIncluded(chaosCount)
}

function buyGeese() {
    if (gmilkCount >= goosePrice) {
        gmilkCount -= goosePrice
        let toThePowerOf = Math.pow(1.1, gooseCount);
        goosePrice = Math.trunc(110 * toThePowerOf);
        gooseCount += 1
        document.getElementById('gmilky').innerHTML = commaIncluded(gmilkCount)
        document.getElementById('gooseNumber').innerHTML = commaIncluded(gooseCount)
        document.getElementById('chaosy').innerHTML = commaIncluded(chaosCount)
        document.getElementById('goosey').innerHTML = "<button onclick='buyGeese()'>" + commaIncluded(goosePrice) + " g-milk" + "</button>"
    }
}

function gooseAccumulator(){
    setTimeout(() =>{
        generateChaos(gooseCount >= 1 ? 1 : gooseCount);
        gooseAccumulator()
    }, (timeValue-gooseCount)/(gooseCount))
    // formula acquired from logistics function 
}
gooseAccumulator()
//========================================================
//Animals/Hire Ducks
//========================================================
let duckPrice = 100;
let duckCount = 0;

function generateDuckEggs(number) {
	dEggCount = dEggCount + number;
	document.getElementById("deggy").innerHTML = commaIncluded(dEggCount);
}

function buyDucks() {
    console.log('click')
	if (chaosCount >= duckPrice) {
		chaosCount -= duckPrice;
		let toThePowerOf = Math.pow(1.1, duckCount);
		duckPrice = Math.trunc(110 * toThePowerOf);
		duckCount += 1;
		document.getElementById("chaosy").innerHTML = commaIncluded(chaosCount);
		document.getElementById("duckNumber").innerHTML = commaIncluded(duckCount);
		document.getElementById("deggy").innerHTML = commaIncluded(dEggCount);
		document.getElementById("duckey").innerHTML = "<button onclick='buyDucks()'>" + commaIncluded(duckPrice) + " chaos" + "</button>";
	}
}

function duckAccumulator(){
    setTimeout(() =>{
        generateDuckEggs(duckCount >= 1 ? 1 : duckCount);
        duckAccumulator()
    }, (timeValue-duckCount)/(duckCount))
}
duckAccumulator()
//========================================================
//Animals/Hire Pigs
//========================================================



//========================================================
//Set interval to check if things are unlocked
//========================================================

const stop = (interval) => clearInterval(interval)

const sheepInterval = setInterval(function () {
    //Add in the sheep related unlocks here
    if (sheepCount > 10) {
        document.getElementById('cowy').innerHTML = '<button onclick="buyCows()">10 wool</button>'
        document.getElementById('cowCounty').innerHTML = "Cows: <p id='cowNumber'>0</p>"
        // document.getElementById('milkSpot').innerHTML = "Milk: <p id='milky'>0</p>"
        stop(sheepInterval)
    }
}, 5000)





const cowInterval = setInterval(function () {
    //Add in cow related unlocks here

    if (cowCount > 5) {
        document.getElementById('chickeny').innerHTML = '<button onclick="buyChickens()">20 milk</button>'
        document.getElementById('chickenCounty').innerHTML = "Chickens: <p id='chickenNumber'>0</p>"
        // document.getElementById('eggSpot').innerHTML = "Egg: <p id='eggy'>0</p>"
        stop(cowInterval)
    }
}, 5000)

const chickenInterval = setInterval(function () {
    //Add in chicken related unlocks here
    if (eggCount > 1000) {
        document.getElementById('goaty').innerHTML = '<button onclick="buyGoats()">2000 eggs</button>'
        document.getElementById('goatCounty').innerHTML = "Goats: <p id='goatNumber'>0</p>"
        stop(chickenInterval)
        // document.getElementById('gmilkSpot').innerHTML = "G-Milk: <p id='gmilky'>0</p>"
    }
}, 5000)

const goatInterval = setInterval(function () {
    //Add in chicken related unlocks here
    if (gmilkCount > 500) {
        document.getElementById('goosey').innerHTML = '<button onclick="buyGeese()">100 gmilk</button>'
        document.getElementById('gooseCounty').innerHTML = "Goose: <p id='gooseNumber'>0</p>"
        // document.getElementById('chaosSpot').innerHTML = "CHAOS: <p id='chaosy'>0</p>"
        stop(goatInterval)
    }
}, 5000)

const gooseInterval = setInterval(function () {
    if (chaosCount > 1000) {
        document.getElementById('duckey').innerHTML = '<button onclick="buyDucks()">100 chaos</button>'
        document.getElementById('duckCounty').innerHTML = "Duck: <p id='duckNumber'>0</p>"
        stop(gooseInterval)
    }
})


//========================================================
//Animal Upgrades
//========================================================

sheepUp1.addEventListener('click', function upgrade1() {
    if (woolCount >= 40) {
        woolCount -= 40
        sheepUpgrade1 = 2
        sheepUp1.classList.add('used')
        sheepUp1.removeEventListener('click', upgrade1)
    }
})

sheepUp2.addEventListener('click', function sheepy2() {
    if (woolCount >= 400) {
        woolCount -= 400
        sheepUpgrade2 = 2
        sheepUp2.classList.add("used");
        sheepUp2.removeEventListener('click', sheepy2)

    }
})
// This is the javascript file to mess around with resources, and animals, etc.

//Global variables:
const clickButton = document.querySelector('#clickMe');

const sheepAudio = new Audio('./audio/lamb.wav')
//Resources per second
let woolCount = 440
let woolGenerator = 1
let milkCount = 4000  //Milk per second
let eggCount = 4000  //Eggs per second
let gmilkCount = 4000  //Goats Milk per second?
let chaosCount = 4000
let dEggCount = 4000
let timeValue = 1000
let incrementTime = (Math.random()+.1)*10
// upgrade variables
let sheepUpgrade1 = 1;
let sheepUpgrade2 = 1;
let sheepUpgrade3 = 1;
let sheepUpgrade4 = 1;
let sheepUpgrade5 = 1;
let sheepUpgrade6 = 1;
let sheepUpgrade7 = 1;
let sheepUpgrade8 = 1;
let cowUpgrade1 = 1;
let cowUpgrade2 = 1;
let cowUpgrade3 = 1;
let cowUpgrade4 = 1;
let cowUpgrade5 = 1;
let cowUpgrade6 = 1;
let cowUpgrade7 = 1;
let cowUpgrade8 = 1;
let chickenUpgrade1 = 1;
let chickenUpgrade2 = 1;
let chickenUpgrade3 = 1;
let chickenUpgrade4 = 1;
let chickenUpgrade5 = 1;
let chickenUpgrade6 = 1;
let chickenUpgrade7 = 1;
let chickenUpgrade8 = 1;
let goatUpgrade1 = 1;
let goatUpgrade2 = 1;
let goatUpgrade3 = 1;
let goatUpgrade4 = 1;
let goatUpgrade5 = 1;
let goatUpgrade6 = 1;
let goatUpgrade7 = 1;
let goatUpgrade8 = 1;
let geeseUpgrade1 = 1;
let geeseUpgrade2 = 1;
let geeseUpgrade3 = 1;
let geeseUpgrade4 = 1;
let geeseUpgrade5 = 1;
let geeseUpgrade6 = 1;
let geeseUpgrade7 = 1;
let geeseUpgrade8 = 1;
let duckUpgrade1 = 1
let duckUpgrade2 = 1;
let duckUpgrade3 = 1;
let duckUpgrade4 = 1;
let duckUpgrade5 = 1;
let duckUpgrade6 = 1;
let duckUpgrade7 = 1
let duckUpgrade8 = 1;


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
    woolCount = woolCount + number * sheepUpgrade1 * sheepUpgrade2 * sheepUpgrade3 * sheepUpgrade4 * sheepUpgrade5 * sheepUpgrade6 * sheepUpgrade7 * sheepUpgrade8
    let stringed = commaIncluded(woolCount)
	document.getElementById("wooly").innerHTML = stringed;
}

function buySheep() {
    // if (woolCount >= sheepPrice) {
    //     incomeCalc("sheep", sheepPrice, sheepCount, woolCount, 'wool')
    // }
    if (woolCount >= sheepPrice) {
        woolCount -= sheepPrice;
        let toThePowerOf = Math.pow(1.15, sheepCount);
        sheepPrice = Math.trunc(22 * toThePowerOf);
        sheepCount += 1
        document.getElementById('sheepCounty').innerHTML = commaIncluded(sheepCount)
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
    milkCount = milkCount + number * cowUpgrade1 * cowUpgrade2 * cowUpgrade3 * cowUpgrade4 * cowUpgrade5 * cowUpgrade6 * cowUpgrade7 * cowUpgrade8
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
let goatPrice = 1200
let goatCount = 0

function generateGMilk(number) {
    gmilkCount = gmilkCount + number
    document.getElementById('gmilky').innerHTML = commaIncluded(gmilkCount);
}

function buyGoats() {
    if (eggCount >= goatPrice) {
        eggCount -= goatPrice
        let toThePowerOf = Math.pow(1.1, goatCount);
        goatPrice = Math.trunc(1200 * toThePowerOf);
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
        document.querySelector("#cowImage").innerHTML =
					'<img src="./img/cow.png" class="animals" height=100 width=100/>';
        document.querySelector('#cowy').innerHTML = '<button onclick="buyCows()">10 wool</button>'
        document.querySelector('#cowCounty').innerHTML = "Cows: <p id='cowNumber'>0</p>"
        stop(sheepInterval)
    }
}, 5000)


const cowInterval = setInterval(function () {
    //Add in cow related unlocks here

    if (cowCount > 5) {
        document.querySelector("#chickenImage").innerHTML =
					'<img src="./img/chicken.png" class="animals" height=100 width=100/>';
        document.getElementById('chickeny').innerHTML = '<button onclick="buyChickens()">20 milk</button>'
        document.getElementById('chickenCounty').innerHTML = "Chickens: <p id='chickenNumber'>0</p>"
        stop(cowInterval)
    }
}, 5000)

const chickenInterval = setInterval(function () {
    //Add in chicken related unlocks here
    if (eggCount > 1000) {
document.querySelector("#goatImage").innerHTML =
	'<img src="./img/goat.png" class="animals" height=100 width=100/>';
        document.getElementById('goaty').innerHTML = '<button onclick="buyGoats()">1200 eggs</button>'
        document.getElementById('goatCounty').innerHTML = "Goats: <p id='goatNumber'>0</p>"
        stop(chickenInterval)
    }
}, 5000)

const goatInterval = setInterval(function () {
    //Add in chicken related unlocks here
    if (gmilkCount > 500) {
        document.querySelector("#gooseImage").innerHTML =
					'<img src="./img/goose.png" class="animals" height=100 width=100/>';
        document.getElementById('goosey').innerHTML = '<button onclick="buyGeese()">100 gmilk</button>'
        document.getElementById('gooseCounty').innerHTML = "Goose: <p id='gooseNumber'>0</p>"
        stop(goatInterval)
    }
}, 5000)

const gooseInterval = setInterval(function () {
    if (chaosCount > 1000) {
        document.querySelector("#duckImage").innerHTML =
					'<img src="./img/duck.jpeg" class="animals" height=100 width=100/>';
        document.getElementById('duckey').innerHTML = '<button onclick="buyDucks()">100 chaos</button>'
        document.getElementById('duckCounty').innerHTML = "Duck: <p id='duckNumber'>0</p>"
        stop(gooseInterval)
    }
})



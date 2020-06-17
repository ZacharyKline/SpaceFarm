//Imports for the various abominations you can make
const unicornImage = document.querySelector('#unicornImage');
const unicornButt = document.querySelector('#unicornButt');



//Unlock intervals

const unicornInterval = setInterval(function () {
    //Add in unicorn related unlocks here
	if (bloodCount > 400) {
		unicornImage.innerHTML ='<img src="./img/unicorn.jpeg" class="animals" height=100 width=100/>';
		unicornButt.innerHTML ='<button onclick="buyUnicorn()">Make a Unicorn</button>';
		stop(unicornInterval);
	}
}, 5000);
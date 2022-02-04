//navigation menubar

var navBar = document.querySelector("#navigation ul");

var navNames = ["Home", "Discography", "About", "Author"];
var navLinks = ["index.html", "#discography", "#about_us", "#author" ];

for(var index in navNames){
	navBar.innerHTML += `<li><a href="${navLinks[index]}">  ${navNames[index]} </a></li>`;
}


//photo
var photo = document.createElement("img");
photo.setAttribute("src", "img/hammerfall.jpg");
photo.setAttribute("alt", "frontman of band");
console.log(photo);
var aboutImage = document.getElementById("aboutPhoto");
aboutImage.appendChild(photo);

var text1 = document.getElementById("aboutPhotoText");
var infos = document.createElement("span");

///
function slide(e) {
	//console.info(window.scrollY);
	const slideIn = (window.scrollY + window.innerHeight) - photo.height;

}
window.addEventListener('scroll', slide);
//////
let someText = document.getElementsByClassName("title");
let nekiBlok = document.getElementById("main");
window.addEventListener(scroll, function () {
	let moving = window.scrollY;
	someText.style.top = 50 + moving * -0.5 + '%';
	nekiBlok.style.top = moving * -0.12 + 'px';
})

//DISCOGRAPHY
var gallery = document.querySelector("#discography");
/* var albumImages = ["Glory", "LegacyOfKings", "Renegade", "CrimsonThunder", "ChapterV", "Threshold", "NoVictory", "infected", "rEvolution", "BuildToLast", "Dominion"];
var albumNames = ["Glory to the Brave", "Legacy of Kings", "Renegade", "Crimson Thunder", "Chapter V -Unbeat, Unbound, Unbroken", "Threshhold", "No sacrifice, No victory","Infected", "(r)Evolution", "Build To Last", "Dominion"];
*/

var discography = [
	{
		"id": 1,
		"name": "Glory to the Brave",
		"image": {
			"src": "Glory",
			"alt":"Glory to the Brave"
		},
		"songs": ["Heeding the Call", "Legacy of Kings", "Let the Hammer Fall"]
	},
	{
		"id": 2,
		"name": "Legacy of Kings",
		"image": {
			"src": "LegacyOfKings",
			"alt": "Legacy of Kings- album cover"
		},
		"songs": [ "Heeding the Call","Legacy of Kings", "Let the Hammer Fall"]
	},
	{
		"id": 3,
		"name": "Renegade",
		"image": {
			"src": "Renegade",
			"alt": "Renegade - album cover"
		},
		"songs": ["Heeding the Call", "Legacy of Kings", "Let the Hammer Fall"]
	},
	{
		"id": 4,
		"name": "Crimson Thunder",
		"image": {
			"src": "CrimsonThunder",
			"alt": "Crimson Thunder - album cover"
		},
		"songs": ["Heeding the Call", "Legacy of Kings", "Let the Hammer Fall"]
	},
	{
		"id": 5,
		"name": "Chapter V -Unbeat, Unbound, Unbroken",
		"image": {
			"src": "ChapterV",
			"alt": "Chapter V - album cover"
		},
		"songs": ["Heeding the Call", "Legacy of Kings", "Let the Hammer Fall"]
	},
	{
		"id": 6,
		"name": "Threshold",
		"image": {
			"src": "Threshold",
			"alt": "Threshold - album cover"
		},
		"songs": ["Heeding the Call", "Legacy of Kings", "Let the Hammer Fall"]
	},
	{
		"id": 7,
		"name": "No sacrifice, No victory",
		"image": {
			"src": "NoVictory",
			"alt": "NoVictory - album cover"
		},
		"songs": ["Heeding the Call", "Legacy of Kings", "Let the Hammer Fall"]
	},
	{
		"id": 8,
		"name": "Infected",
		"image": {
			"src": "infected",
			"alt": "Infected - album cover"
		},
		"songs": ["Heeding the Call", "Legacy of Kings", "Let the Hammer Fall"]
	},
	{
		"id": 9,
		"name": "(r)Evolution",
		"image": {
			"src": "rEvolution",
			"alt": "rEvolution - album cover"
		},
		"songs": ["Heeding the Call", "Legacy of Kings", "Let the Hammer Fall"]
	},
	{
		"id": 10,
		"name": "Build To Last",
		"image": {
			"src": "BuildToLast",
			"alt": "BuildToLast - album cover"
		},
		"songs": ["Heeding the Call", "Legacy of Kings", "Let the Hammer Fall"]
	},
	{
		"id": 11,
		"name": "Dominion",
		"image": {
			"src": "Dominion",
			"alt": "Dominion - album cover"
		},
		"songs": ["Heeding the Call", "Legacy of Kings", "Let the Hammer Fall"]
	}

	]
for (let index of discography) {
	gallery.innerHTML += `<div class ="albums">
	<img src="img/New folder/${index.image.src}.jpg" alt="${index.image.alt}">
	<div class="aboutAlbum">
		<h3>${index.name}</h3>
		<button>Read more</button>
		<div class="moreAbout"><p>${index.songs}<br/></p></div>
	</div></div>`;
}

/*for (let i = 0; i < albumNames.length; i++) {
	gallery.innerHTML+=`<div class="albums"><img src="img/New folder/${albumImages[i]}.jpg" alt="${albumNames[i]}"/><div class="aboutAlbum"><h3>${albumNames[i]}</h3><a href="discography.html">Read more</a></div></div>`
}*/

//BAND
/*let members = {
	"navigation": ["1", "2", "3", "4", "5"],
	"tabItems": [
		{
			"id": 1,
			"img": {
				"src": "img/ ham2.jpg",
				"alt":"member"
			},
			"text":
				"Born August 14th 1974, in Lindome just outside Gothenburg.<br/>I wanted to ROCK!!! Naturally, I picked up one of my fathers guitars and tried to learn the songs of my idols, like Accept, Metallica and Iron Maiden among others.< br /> I started playing with my friends and realized that most bands were looking for bass players.There were guitarist	and drummers everywhere, but no one really cared for the bass.< br /> Shortly thereafter Oscar asked if I wanted to join HammerFall, and you know the story: record deal, < i > Glory to the Brave</i> and I quit 10 years passed and I played with a couple of bands: None, DeathDestruction, Cans and Evergrey, but didnt play on any albums.When Joacim called me and asked if I was interested in rejoining HammerFall, I didnt hesitate.I never regretted that I left, but I would never forgive myself if I didnt take this chance."
        }
	]
};

function createMember() {
	let aboutUs = document.querySelector("#about_us");
	let aboutItems = ``;

	members.nav.map()
}
*/


//SLIDER
setInterval(slider, 4000);

var counter = 1;
function slider() {
	document.querySelector("#slider img").src = "img/slide" + counter + ".jpg";
	counter++;
	if (counter == 5) {
		counter = 1;
    }

}

//FORMS
function writeForm() {
	var tabs = ["Name", "Last_Name", "Email"];
	var forms = document.getElementById("forms");
	var writing = "<h4>Send a comment</h4>";
	for (let index of tabs) {
		writing += `<div class="text-tabs">
							<input type="text" class="validation" title="Write a message down bellow" id="${index}" placeholder="${index}">
							<h3 class="value">Value ${index} is not correct</h3>
					</div>`;
		console.log(index);
	}
	writing += `<div class="text-tabs">
					<textarea class="form-control" name="comment" rows="5" cols="40" id="comment" placeholder="Write a comment" maxlength="200">
					</textarea>
					<div id="counting">0/200</div>
				</div>
				<input type="submit" id="send" value="send" />`
	forms.innerHTML = writing;
	console.log(writing);
};
writeForm()

document.getElementById("comment").addEventListener("keyup", function () {
	document.querySelector("#counting").textContent = `${document.getElementById("comment").value.length}/200`;
});
//REGULAR EXPRESSION

document.querySelector("#send").addEventListener("click", function (e)
{
	e.preventDefault()
	findErrors()
})

function findErrors() {

	var wrong = [];
	let fistName, lastName, email, comments;
	firstName = document.querySelector("#Name");
	lastName = document.querySelector("#Last_Name");
	email = document.querySelector("#Email");
	coment = document.querySelector("#comment");
	console.log(firstName, lastName);

	let firstNameRegex = /^[A-ZĆČŽŠĐ][a-zčćžšđ]{2,14}$/;
	let lastNameRegex = /^[A-ZĆČŽŠĐ][a-zčćžšđ]{2,18}$/;   // ([A-ZĆČŽŠĐ][a-zčćžšđ] {2,18})
	let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	let commentRegex = /.{2,200}/;
	let firstNameDone = false;
	let lastNameDone = false;
	let emailDone = false;
	let commentDone = false;


	/*if (firstNameRegex.test(name)) {
		firstNameDone = true;
		if (document.querySelector("#Name").classList.contains("danger"))
			document.getElementById("Name").classList.remove("danger")
	}
	else
	{
		firstNameDone = false;
		if (!document.getElementById("Name").classList.contains("danger"))
			document.getElementById("Name").classList.add("danger")
		//Message.add('Name has been written in the wrong type. Name contains only letters', { type: 'error', life: 3000 });

	}*/

	function checkAll(itemValue, itemRegex, itemDone) {
		if (itemRegex.test(itemValue.value)) {
			itemDone = true;
			if (itemValue.classList.contains("danger"))
				itemValue.classList.remove("danger")
		}
		else
		{
			itemDone = false;
			if (!itemValue.classList.contains("danger"))
				itemValue.classList.add("danger")
        }
    }
	
	checkAll(firstName, firstNameRegex, firstNameDone)
	checkAll(lastName, lastNameRegex, lastNameDone)
	checkAll(email, emailRegex, emailDone)
	checkAll(coment, commentRegex, commentDone)
};
/*function validation() {
	let successed = true;
	let email = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
	let name = new RegExp(/^[A-ZŠĐČĆŽ][a-zšđčćž]{2, 13}+$/);
	let lastName = new RegExp(/^[A-ZŠĐČĆŽ][a-zšđčćž]{2, 17})+$/);

	function findError(item, message) {
		item.classList.add('error');
		item.nextElementSibling.innerText = message;
		item.nextElementSibling.style.display = "block";
    }
}/*/
function increase() {
    // Change the variable to modify the speed of the number increasing from 0 to (ms)
    let percentageGrow = 50;
    // Retrieve the percentage value
    let maxPercent = parseInt(document.getElementById("value1").innerHTML, 10);

    for(let i = 0; i <= maxPercent; i++) {
        setTimeout(function () {
            document.getElementById("value1").innerHTML = i + "%";
        }, percentageGrow * i);
    }
}
increase();

//FOOTER
var links = document.querySelector("#links ul");

const linked = ["https://twitter.com/hammerfall", "https://www.instagram.com/hammerfall_official/", "https://www.youtube.com/channel/UC3Yk2TmVkqi_Kmgct5yZaHA", "https://www.facebook.com/hammerfall", "documentation.pdf"];
const icons = ["fa fa-twitter", "fa fa-instagram", "fa fa-youtube", "fa fa-facebook", "fa fa-file"];

for (var index in linked) {
	links.innerHTML += `<li><a href="${linked[index]}"> <i class="${icons[index]}"></i></a>|</li>`;
}


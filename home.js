function generateTitle() {
	// Rebuild title as spans
	const title = document.querySelector('.title');
	let temp = '';
	for (let letter of title.innerText) {
		let newWidth = 50;
		if (Math.random() < .5) {
			newWidth = 100;
		}
		temp += `<span style="font-variation-settings: 'wdth' ${newWidth}, 'slnt' 0">${letter}</span>`;
	}
	title.innerHTML = temp;

	// Add event listeners to spans
	let spans = title.querySelectorAll('span');
	for (let span of spans) {
		span.addEventListener('mouseenter', () => {
			// Set random width
			let newWidth = 50;
			if (Math.random() < .5) {
				newWidth = 100;
			}
			span.style.fontVariationSettings = `"wdth" ${newWidth}, "slnt" 0`;
		})
	}
}
generateTitle();

const photoData = [
	{
		"filename": "michelle.jpg",
		"personName": "Michelle Belgrod",
		"imageName": "Graphic Desire",
		"link": "https://michellebelgrod.com/"
	},
	{
		"filename": "rebecca.jpg",
		"personName": "Rebecca Wilkinson",
		"imageName": "Perform - Produce",
		"link": "https://performproduce.com/"
	},
	{
		"filename": "lydia.jpg",
		"personName": "Lydia Chodosh",
		"imageName": "On the Impulse to Notate",
		"link": "https://lydiachodosh.com/"
	},
	{
		"filename": "emily.jpg",
		"personName": "Emily Bluedorn",
		"imageName": "Never Real Historians",
		"link": "https://emilybluedorn.com/"
	},
	{
		"filename": "clinton.jpg",
		"personName": "Clinton Van Arnam",
		"imageName": "Variations on Noise",
		"link": "https://variationsonnoise.com/"
	},
	{
		"filename": "shiyue.jpg",
		"personName": "Shiyue Wang",
		"imageName": "Here-there",
		"link": "https://shiyue.cargo.site/"
	},
	{
		"filename": "alec.jpg",
		"personName": "Alec Figuracion",
		"imageName": "Soft Procedures",
		"link": "https://alecfiguracion.com/"
	},
	{
		"filename": "soomin.jpg",
		"personName": "Soo Min Lee",
		"imageName": "Graphic Warmline",
		"link": "https://soominlee.net"
	},
	{
		"filename": "glikeriya.jpg",
		"personName": "Glikeriya Shotanova",
		"imageName": "Here—there",
		"link": "https://glikerii.com/"
	},
	{
		"filename": "berett.jpg",
		"personName": "Berett Wilber",
		"imageName": "surface tension",
		"link": "https://berettwilber.com"
	},
	{
		"filename": "gabriel.jpg",
		"personName": "Gabriel Drozdov",
		"imageName": "This is for you",
		"link": "https://thisisforyou.gabrieldrozdov.com"
	},
	{
		"filename": "kaela.jpg",
		"personName": "Kaela Kennedy",
		"imageName": "Infinite Form",
		"link": "https://kaelamkennedy.com"
	},
	{
		"filename": "husna.jpg",
		"personName": "Husna Abubakar",
		"imageName": "ASILI",
		"link": "https://www.instagram.com/byhusnaswaleh/"
	}
]  

const content = document.querySelector('.content');
content.addEventListener('click', generatePhoto);
let cropOptions = [
	["left", "right", "center"],
	["top", "bottom", "center"],
]
function generatePhoto(e) {
	const clear = document.querySelector('#clear');
	clear.style.display = "block";

	const photos = document.querySelector('.photos');
	for (let i=0; i<5; i++) {
		let newPhoto = document.createElement('a');
		newPhoto.classList.add('photo');
		newPhoto.target = "_blank";

		// Pick random data
		let newPhotoData = photoData[Math.floor(Math.random()*photoData.length)];
		newPhoto.href = newPhotoData["link"];

		// Position
		newPhoto.style.left = Math.round(Math.random()*15)*7 + "vmax";
		newPhoto.style.top = Math.round(Math.random()*15)*7 + "vmax";

		// Dimensions
		let size = Math.round(Math.random()*2);

		// Crop
		let cropX = cropOptions[0][Math.floor(Math.random()*3)];
		let cropY = cropOptions[0][Math.floor(Math.random()*3)];

		// Populate content
		newPhoto.innerHTML = `
			<div class="photo-image" data-size="${size}">
				<div class="photo-image-overlay"></div>
				<div class="photo-image-file" style="background-image: url('/assets/photos/${newPhotoData["filename"]}'); background-position: ${cropX} ${cropY};"></div>
			</div>
			<div class="photo-info">
				${newPhotoData["personName"]}<br>
				<em>${newPhotoData["imageName"]}</em>
			</div>
		`;

		setTimeout(() => {
			photos.appendChild(newPhoto);
		}, i*50)
	}
}

// Clear
function clearScreen() {
	const photos = document.querySelector('.photos');
	photos.innerHTML = "";
	const clear = document.querySelector('#clear');
	clear.style.display = "none";
}

// Mobile
let loopActive = false;
let mobileLoop;
function detectMobile() {
	if (window.innerWidth < 600 && !loopActive) {
		mobileLoop = setInterval(randomizeTitle, 100);
		loopActive = true;
	} else if (window.innerWidth >= 600) {
		loopActive = false;
		clearInterval(mobileLoop);
	}
}
window.addEventListener('resize', detectMobile);
detectMobile();

function randomizeTitle() {
	// Add event listeners to spans
	let spans = document.querySelector('.title').querySelectorAll('span');
	let newWidth = 50;
	if (Math.random() < .5) {
		newWidth = 100;
	}
	let randomSpan = spans[Math.floor(Math.random()*spans.length)];
	randomSpan.style.fontVariationSettings = `"wdth" ${newWidth}, "slnt" 0`;
}
randomizeTitle();

// // OLD CODE
// // Shuffle function credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// function shuffle(array) {
// 	let currentIndex = array.length;
// 	// While there remain elements to shuffle...
// 	while (currentIndex != 0) {
// 		// Pick a remaining element...
// 		let randomIndex = Math.floor(Math.random() * currentIndex);
// 		currentIndex--;
// 		// And swap it with the current element.
// 		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
// 	}
// }

// let letterWidths = [50, 50, 50, 50, 60, 60, 60, 80, 80, 80, 80, 110, 110, 110];
// let letterDeltas = [-20, 20];
// shuffle(letterWidths);
// function generateTitleOld() {
// 	// Rebuild title as spans
// 	const title = document.querySelector('.title');
// 	let temp = '';
// 	for (let letter of title.innerText) {
// 		let randomWidth = letterWidths[0];
// 		letterWidths.shift();
// 		temp += `<span style="font-variation-settings: 'wdth' ${randomWidth}, 'slnt' 0" data-width="${randomWidth}">${letter}</span>`;
// 	}
// 	title.innerHTML = temp;

// 	// Add event listeners to spans
// 	let spans = title.querySelectorAll('span');
// 	for (let span of spans) {
// 		span.addEventListener('mouseenter', () => {
// 			let currentWidth = parseInt(span.dataset.width);

// 			// Change width of current letter
// 			let newWidth;
// 			if (currentWidth == 50) {
// 				newWidth = 80;
// 			} else if (currentWidth == 60) {
// 				newWidth = 110;
// 			} else if (currentWidth == 80) {
// 				newWidth = 50;
// 			} else if (currentWidth == 110) {
// 				newWidth = 60;
// 			}

// 			// Select another random letter with opposite width
// 			let otherLetters = title.querySelectorAll(`[data-width="${newWidth}"]`);
// 			let randomLetter = otherLetters[Math.floor(Math.random()*otherLetters.length)];

// 			// Swap widths
// 			span.style.fontVariationSettings = `"wdth" ${newWidth}, "slnt" 0`;
// 			span.dataset.width = newWidth;
// 			randomLetter.style.fontVariationSettings = `"wdth" ${currentWidth}, "slnt" 0`;
// 			randomLetter.dataset.width = currentWidth;
// 		})
// 	}
// }
// generateTitleOld();
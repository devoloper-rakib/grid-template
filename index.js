// nav bar start
const icons = document.querySelector('.icons');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

icons.addEventListener('click', () => {
	//Links
	navLinks.classList.toggle('open');
	links.forEach((link) => {
		link.classList.toggle('fade');
	});

	//Animation
	icons.classList.toggle('toggle');
});

// js slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(event) {
	showSlides((slideIndex += event));
}

function currentSlide(event) {
	showSlides((slideIndex = event));
}

function showSlides(event) {
	let x;
	let slides = document.getElementsByClassName('mySlides');
	let dots = document.getElementsByClassName('dot');
	if (event > slides.length) {
		slideIndex = 1;
	}
	if (event < 1) {
		slideIndex = slides.length;
	}
	for (x = 0; x < slides.length; x++) {
		slides[x].style.display = 'none';
	}
	for (x = 0; x < dots.length; x++) {
		dots[x].className = dots[x].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
}

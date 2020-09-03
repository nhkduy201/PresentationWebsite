let slideUpButtons = document.getElementsByClassName('go-up');
let slideDownButtons = document.getElementsByClassName('go-down');

[ ...slideUpButtons ].forEach((button) => {
	button.addEventListener('click', slideUp);
});

[ ...slideDownButtons ].forEach((button) => {
	button.addEventListener('click', slideDown);
});

function slideUp() {
	let slides = document.querySelector('.slide-container');
	slides.style.transform = 'translateY(' + 100 * ++slides.dataset.pos + 'vh)';
}

function slideDown() {
	let slides = document.querySelector('.slide-container');
	slides.style.transform = 'translateY(' + 100 * --slides.dataset.pos + 'vh)';
}

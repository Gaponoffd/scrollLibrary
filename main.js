"use strict"


let srollActiveElements = document.querySelectorAll('[data-scroll]');


window.addEventListener('scroll', function() {
	for(let element of srollActiveElements){

		let elementСoord = element.getBoundingClientRect().top + pageYOffset;
		let scrollCoord = pageYOffset;

		let distanse = +element.getAttribute('data-scroll');

		if(distanse){
			elementСoord = elementСoord - distanse;
		}

		if(scrollCoord >= elementСoord){
			element.classList.add('scrolled')
		}
	}
});


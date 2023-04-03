
"use strict";


const searchBody = document.querySelector('.page__search');

document.addEventListener("click", search);
document.addEventListener("keyup", search);

function search(event) {
	if (event.target.closest('.page__button')) {
		searchBody.classList.toggle('_active');
	}
	if (!event.target.closest('.page__search')) {
		searchBody.classList.remove('_active');
	}
	if (event.code === 'Escape') {
		searchBody.classList.remove('_active');
	}
}

const txtItem = document.querySelector('.page__input');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.page__label span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter);
txtItem.addEventListener("keydown", function (event) {
	if (event.repeat) txtSetCounter();
});

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}
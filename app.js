"use strict";

const btns = document.querySelectorAll(".question-btn");

btns.forEach(btn => {
	btn.addEventListener("click", (e) => {
		console.log(e.currentTarget.parentElement);
	});
});
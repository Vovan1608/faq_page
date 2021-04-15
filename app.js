"use strict";

const btns = document.querySelectorAll(".question-btn");

btns.forEach(btn => {
	btn.addEventListener("click", (e) => {
		// получаю родителя родителя элемента(дедушку)
		const question = e.currentTarget.parentElement.parentElement;
		question.classList.toggle("show-text");
	});
});
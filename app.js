"use strict";

// using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach((quest) => {
	const btn = quest.querySelectorAll(".question-btn");
});


// traversing the DOM
/* const btns = document.querySelectorAll(".question-btn");

btns.forEach(btn => {
	btn.addEventListener("click", (e) => {
		// получаю родителя родителя элемента(дедушку)
		const question = e.currentTarget.parentElement.parentElement;
		question.classList.toggle("show-text");
	});
}); */
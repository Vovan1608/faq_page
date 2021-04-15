"use strict";

// using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach((quest) => {
	const btn = quest.querySelector(".question-btn");
	btn.addEventListener("click", () => {
		// если один вопрос открыт, то при нажатии на другой вопрос, текущий закроется
		// для этого проходим циклом по всем вопросам
		questions.forEach(item => {
			if (item !== quest) {
				item.classList.remove("show-text");
			}
		});

		quest.classList.toggle("show-text");
	});
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
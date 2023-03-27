document.querySelector(".advice-card__dice").addEventListener("click", () => {
	fetch("https://api.adviceslip.com/advice")
		.then((resourse) => resourse.json())
		.then((data) => {
			const adviceData = data.slip;

			const adviceSection = document.querySelector(".advice-card");
			const adviceNo = adviceSection.querySelector("[id-number]");
			adviceNo.textContent = adviceData.id;

			// clean the previous advice then add the new one
			adviceSection.querySelector(".advice-content").remove();

			let pTag = document.createElement('p');
			pTag.classList.add('advice-content');
			pTag.textContent = adviceData.advice;
			let adviceSectionElem = document.querySelector('.adivce-card__advise-block');
			console.log(adviceSectionElem)
			adviceSectionElem.appendChild(pTag);
		});

});

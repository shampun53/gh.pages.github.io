//Header плашка
/*
const headerElem = document.querySelector(".header");

const callback = function (entries, observer) {
	if (entries[0].isInteresting) {
		headerElem.classList.remove('scroll')
	} else {
		headerElem.classList.add("scroll")
	}
};

const headerObserver = new IntersectionObserver(callback)
headerObserver.observe(headerElem)
*/

const links = document.querySelectorAll(".menu-header__link");

links.forEach((link) => {
	link.addEventListener("mouseover", function (e) {
		if (!e.target.classList.contains("tdu")) {
			e.target.classList.add("tdu")
		}
		link.addEventListener("mouseout", function (e) {
			if (!e.target.classList.contains("lock")) {
				e.target.classList.remove("tdu")
			}
		})
	})
})


//бургер
const burger = document.querySelector(".header__burger");

burger.addEventListener("click", function (e) {
	burger.classList.toggle("active")
	document.body.classList.toggle("scroll-lock")
	const headerMenu = document.querySelector(".header__menu");
	headerMenu.classList.toggle("active")
	const spans = document.querySelectorAll(".menu-header__phone span")
	if (spans.length < 2) {
		if (headerMenu.classList.contains("active")) {
			const otherPhone = document.querySelector(".menu-header__phone");
			otherPhone.insertAdjacentHTML(
				"beforeend",
				`<span>+7 (916) 780-22-59</span>`
			)

		}
	}
})
//Хедер


window.addEventListener("scroll", function (e) {
	const headerElem = document.querySelector(".header");
	const main_page = document.querySelector(".main-screen__image")
	let offSet = main_page.getBoundingClientRect().bottom;
	console.log(offSet);
	let heightWindow = window.innerHeight;
	console.log(heightWindow - offSet);
	if (window.pageYoffSet > (heightWindow - offSet) / 2) {
		headerElem.classList.add("scroll")
	} else {
		headerElem.classList.remove("scroll")
	}

})


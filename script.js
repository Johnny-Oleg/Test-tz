const $menuRight = document.querySelector('.menu-list__right');
const $menuLeft = document.querySelector('.menu-list__left');
const $textRight = document.querySelector('.inner-item__title--right');
const $textLeft = document.querySelector('.header__inner-item');
const $form = document.querySelector('.form');

function time() {
	setTimeout(() => {
		$menuRight.classList.add('visible');
		$menuLeft.classList.add('visible');
		$textRight.classList.add('visible');
		$textLeft.classList.add('visible');
	}, 2000);
}

window.addEventListener('load', time);

// document.addEventListener('scroll', () => {
// 	const $html = document.documentElement;
//     $html.dataset.scroll = window.scrollY;

// 	   $html.dataset.scroll >= 1000 ? $form.classList.add('slide'): '';
// })

const observer = new IntersectionObserver(function(elems, observer) {
	elems.forEach(elem => {
		if (!elem.isIntersecting) return;
		
		elem.target.classList.add('slide');
        console.log(elem.target);
		observer.unobserve(elem.target);
	})
}, {
	root: null,
	threshold: 0,
	rootMargin: ''
})

observer.observe($form);

$form.addEventListener('submit', e => {
	e.preventDefault();

	const $valid = document.querySelector('.valid');
	$valid.style.display = 'block';
})
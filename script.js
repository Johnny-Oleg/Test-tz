const $menuRight = document.querySelector('.menu-list__right');
const $menuLeft = document.querySelector('.menu-list__left');
const $textRight = document.querySelector('.inner-item__title--right');
const $textLeft = document.querySelector('.header__inner-item');

function time() {
	setTimeout(() => {
		$menuRight.classList.add('visible');
		$menuLeft.classList.add('visible');
		$textRight.classList.add('visible');
		$textLeft.classList.add('visible');
	}, 2000);
}

window.addEventListener('load', time);
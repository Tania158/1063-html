document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".header__burger-menu");
    const menu = document.querySelector(".header__menu");
	const menuItems = document.querySelectorAll(".header__menu-link");

    menuBtn.addEventListener("click", function () {
		menuBtn.classList.toggle("menu-open");
        menu.classList.toggle("menu-open");
		toggleScrollLock();
    });

	menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function () {
            menuBtn.classList.remove("menu-open");
			menu.classList.remove("menu-open");
			toggleScrollLock();
        });
    });

	function toggleScrollLock() {
        const body = document.body;
        body.classList.toggle("scroll-lock");
    }
});
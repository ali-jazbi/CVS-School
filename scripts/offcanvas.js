document.addEventListener("DOMContentLoaded", function () {
	const menuLinks = document.querySelectorAll(".custom-nav-link");
	const mainMenu = document.querySelector(".custom-main-menu");
	const subMenus = document.querySelectorAll(".custom-sub-menu");
	const backButtons = document.querySelectorAll(".custom-back-to-main");

	menuLinks.forEach((link) => {
		link.addEventListener("click", function (e) {
			const submenuId = this.getAttribute("data-submenu");
			if (submenuId) {
				e.preventDefault();
				const submenu = document.getElementById(submenuId);
				if (submenu) {
					mainMenu.style.display = "none";
					submenu.style.display = "block";
				}
			}
		});
	});

	backButtons.forEach((button) => {
		button.addEventListener("click", function () {
			subMenus.forEach((submenu) => {
				submenu.style.display = "none";
			});
			mainMenu.style.display = "block";
		});
	});
});
/**
 * Sets up the menu navigation functionality.
 * This function initializes event listeners for menu links and back buttons,
 * enabling the display of submenus and return to the main menu.
 *
 * @listens DOMContentLoaded
 * @returns {void}
 */
const tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
document.addEventListener("DOMContentLoaded", function () {
	const menuLinks = document.querySelectorAll(".custom-nav-link");
	const mainMenu = document.querySelector(".custom-main-menu");
	const subMenus = document.querySelectorAll(".custom-sub-menu");
	const backButtons = document.querySelectorAll(".custom-back-to-main");

	menuLinks.forEach((link) => {
		link.addEventListener("click", function (e) {
			const submenuId = this.getAttribute("data-submenu");
			if (submenuId) {
				e.preventDefault();
				const submenu = document.getElementById(submenuId);
				if (submenu) {
					mainMenu.style.display = "none";
					submenu.style.display = "block";
				}
			}
		});
	});

	backButtons.forEach((button) => {
		button.addEventListener("click", function () {
			subMenus.forEach((submenu) => {
				submenu.style.display = "none";
			});
			mainMenu.style.display = "block";
		});
	});
});

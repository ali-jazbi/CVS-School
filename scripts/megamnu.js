const initMegaMenu = () => {
	// Define images for each section
	const sectionImages = {
		web: "https://itspectrumsolutions.com/wp-content/uploads/2024/04/1_pE2fOVDikEUwiQJlh4ggzg.jpeg",
		apps: "https://cdn.nody.ir/files/2021/11/02/nody-%D8%B9%DA%A9%D8%B3-%D8%A7%D8%B2-%DA%A9%D9%84%D8%A7%D8%B3-%DA%A9%D9%86%DA%A9%D9%88%D8%B1-1635835098.jpg",
	};

	// Add hover events for services section
	document
		.querySelectorAll(".services-section .mega-menu-link")
		.forEach((link) => {
			link.addEventListener("mouseenter", () => {
				document.getElementById(
					"menuImage"
				).style.backgroundImage = `url('${sectionImages.services}')`;
			});
		});

	// Add hover events for web section
	document
		.querySelectorAll(".web-section .mega-menu-link")
		.forEach((link) => {
			link.addEventListener("mouseenter", () => {
				document.getElementById(
					"menuImage"
				).style.backgroundImage = `url('${sectionImages.web}')`;
			});
		});

	// Add hover events for apps section
	document
		.querySelectorAll(".apps-section .mega-menu-link")
		.forEach((link) => {
			link.addEventListener("mouseenter", () => {
				document.getElementById(
					"menuImage"
				).style.backgroundImage = `url('${sectionImages.apps}')`;
			});
		});
};
initMegaMenu();

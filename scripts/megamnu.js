const initMegaMenu = () => {
	// Define images for each section
	const sectionImages = {
		web: "https://itspectrumsolutions.com/wp-content/uploads/2024/04/1_pE2fOVDikEUwiQJlh4ggzg.jpeg",
		apps: "https://www.avanse.com/blogs/images/Website%20Blog%20Image%20(43).png",
		school: "https://img.pikbest.com/wp/202348/online-education-course-promo-illustration-of-3d-rendered-laptop-computer-showcasing-the-concept-e-learning-or-through-an_9782686.jpg!bw700"
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
	// Add hover events for apps section
	document
		.querySelectorAll(".school-section .mega-menu-link")
		.forEach((link) => {
			link.addEventListener("mouseenter", () => {
				document.getElementById(
					"menuImage"
				).style.backgroundImage = `url('${sectionImages.school}')`;
			});
		});
};
initMegaMenu();

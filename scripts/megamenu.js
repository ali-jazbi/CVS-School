// Define images for each section
const sectionImages = {
	web: "https://itspectrumsolutions.com/wp-content/uploads/2024/04/1_pE2fOVDikEUwiQJlh4ggzg.jpeg",
	apps: "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
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
document.querySelectorAll(".web-section .mega-menu-link").forEach((link) => {
	link.addEventListener("mouseenter", () => {
		document.getElementById(
			"menuImage"
		).style.backgroundImage = `url('${sectionImages.web}')`;
	});
});

// Add hover events for apps section
document.querySelectorAll(".apps-section .mega-menu-link").forEach((link) => {
	link.addEventListener("mouseenter", () => {
		document.getElementById(
			"menuImage"
		).style.backgroundImage = `url('${sectionImages.apps}')`;
	});
});

// Menu switching functionality
document.querySelectorAll(".menu-item").forEach((item) => {
	item.addEventListener("click", (e) => {
		e.preventDefault();

		// Update active state
		document
			.querySelectorAll(".menu-item")
			.forEach((i) => i.classList.remove("active"));
		item.classList.add("active");

		// Show relevant content
		const contentId = item.getAttribute("data-content");
		document
			.querySelectorAll(
				"#coursesContent, #walletContent, #certificatesContent"
			)
			.forEach((content) => {
				content.style.display = "none";
			});
		document.getElementById(contentId + "Content").style.display = "block";
	});
});

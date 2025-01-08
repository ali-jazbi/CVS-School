// Menu switching functionality
document.querySelectorAll(".menu-item").forEach((item) => {
	item.addEventListener("click", (e) => {
		e.preventDefault();

		// Update active state
		document
			.querySelectorAll(".menu-item")
			.forEach((i) => i.classList.remove("active"));
		item.classList.add("active");

		// Scroll to relevant content
		const contentId = item.getAttribute("data-content");
		const targetElement = document.getElementById(contentId + "Content");
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
		}
	});
});

// Make sure all content is visible initially
document
	.querySelectorAll("#coursesContent, #walletContent, #certificatesContent")
	.forEach((content) => {
		content.style.display = "block";
	});

document.addEventListener("DOMContentLoaded", function () {
	const amountButtons = document.querySelectorAll(".amount-btn");
	const customAmountInput = document.getElementById("customAmount");

	amountButtons.forEach((button) => {
		button.addEventListener("click", function () {
			const isActive = this.classList.contains("active");

			// Reset all buttons
			amountButtons.forEach((btn) => btn.classList.remove("active"));
			customAmountInput.disabled = false;
			customAmountInput.value = "";

			if (!isActive) {
				// Activate clicked button
				this.classList.add("active");
				customAmountInput.disabled = true;
				customAmountInput.value = this.dataset.amount;
			}
		});
	});

	customAmountInput.addEventListener("focus", function () {
		// Deactivate all buttons when custom input is focused
		amountButtons.forEach((btn) => btn.classList.remove("active"));
	});
});

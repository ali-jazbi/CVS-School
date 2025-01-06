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
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Make sure all content is visible initially
document.querySelectorAll(
    "#coursesContent, #walletContent, #certificatesContent"
).forEach((content) => {
    content.style.display = "block";
});


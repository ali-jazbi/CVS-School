const loadComponent = (url, targetId, callback) => {
	fetch(url)
		.then((response) => {
			if (!response.ok) throw new Error("خطا در بارگذاری فایل");
			return response.text();
		})
		.then((data) => {
			document.getElementById(targetId).innerHTML = data;
			if (callback) callback(); // اجرای کالبک پس از بارگذاری
		})
		.catch((error) => console.error("خطا:", error));
};

// بارگذاری هدر و اجرای اسکریپت مگا منو
loadComponent("../header.html", "header", () => {
	// اجرای اسکریپت مگا منو پس از بارگذاری هدر
	initMegaMenu(); // تابع مربوط به مگا منو
});

// بارگذاری فوتر
loadComponent("../footer.html", "footer");

// تابع مگا منو
const initMegaMenu = () => {
	const menuItems = document.querySelectorAll(".mega-menu-item");
	menuItems.forEach((item) => {
		item.addEventListener("mouseover", () => {
			item.querySelector(".mega-menu-content").style.display = "block";
		});
		item.addEventListener("mouseout", () => {
			item.querySelector(".mega-menu-content").style.display = "none";
		});
	});
};

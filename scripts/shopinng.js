class ShoppingCart {
	constructor() {
		console.log("ShoppingCart constructor called");
		this.items = [];
		this.total = 0;
		this.init();
	}

	init() {
		console.log("Initializing ShoppingCart");
		this.cartItems = document.getElementById("cartItems");
		this.totalPrice = document.getElementById("totalPrice");
		this.cartCounts = document.querySelectorAll(".cartCount");
		this.checkoutBtn = document.getElementById("checkoutBtn");

		if (
			!this.cartItems ||
			!this.totalPrice ||
			!this.cartCounts.length ||
			!this.checkoutBtn
		) {
			console.error("One or more required elements not found");
			return;
		}

		this.checkoutBtn.addEventListener("click", () => this.checkout());

		// اضافه کردن محصولات نمونه
		this.addItem({
			id: 1,
			title: "دوره جامع JavaScript",
			price: 50000,
			image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
		});
		this.addItem({
			id: 2,
			title: "دوره پیشرفته ++C",
			price: 25000,
			image: "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png",
		});
		this.addItem({
			id: 3,
			title: "دوره جامع Python",
			price: 25000,
			image: "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--programming-language-logos-icons-1720083.png?f=webp",
		});

		console.log("ShoppingCart initialized successfully");
	}

	addItem(item) {
		const existingItem = this.items.find((i) => i.id === item.id);

		if (existingItem) {
			existingItem.quantity += 1;
		} else {
			this.items.push({ ...item, quantity: 1 });
		}

		this.updateCart();
	}

	removeItem(id) {
		this.items = this.items.filter((item) => item.id !== id);
		this.updateCart();
	}

	updateQuantity(id, change) {
		const item = this.items.find((i) => i.id === id);
		if (item) {
			item.quantity += change;
			if (item.quantity <= 0) {
				this.removeItem(id);
			} else {
				this.updateCart();
			}
		}
	}

	updateCart() {
		console.log("Updating cart");
		// محاسبه تعداد کل آیتم‌ها
		const totalItems = this.items.reduce(
			(sum, item) => sum + item.quantity,
			0
		);

		// فقط به‌روزرسانی تعداد در عناصر .cartCount
		this.cartCounts.forEach((cartCount) => {
			if (cartCount.textContent !== totalItems.toString()) {
				cartCount.textContent = totalItems;
			}
		});

		// بازسازی لیست محصولات فقط در صورت تغییر
		if (this.cartItems.dataset.renderedItems !== totalItems.toString()) {
			const fragment = document.createDocumentFragment();
			this.items.forEach((item) => {
				const card = document.createElement("div");
				card.className = "cart-item";
				card.style.display = "flex";
				card.style.alignItems = "center";
				card.style.justifyContent = "space-between";
				card.style.padding = "15px";
				card.style.marginBottom = "10px";
				card.style.backgroundColor = "#ffffff";
				card.style.borderRadius = "5px";
				card.innerHTML = `
                 <div class="cart-item-details" style="display: flex; align-items: center;justify-content: space-between;">
				 <div class="cart-item-info" style="display: flex; align-items: center;">
				  <img src="${item.image}" alt="${
					item.title
				}" class="cart-item-icon" style="width: 30px; height: 30px; margin-right: 10px;">
                     <h3 class="cart-item-title" style="margin: 0; font-size: 14px;">${
							item.title
						}</h3>
				 </div>
                    
                     <p class="cart-item-price" style="margin: 0 0px 0 15px; font-size: 11px;">${item.price.toLocaleString()} تومان</p>
                 </div>
                 <button class="cart-item-remove" onclick="cart.removeItem(${
						item.id
					})" style="background: none; border: none; font-size: 18px; cursor: pointer;">×</button>
             `;
				fragment.appendChild(card);
			});
			this.cartItems.innerHTML = ""; // پاک کردن محتوای قبلی
			this.cartItems.appendChild(fragment);
			this.cartItems.dataset.renderedItems = totalItems.toString();
		}

		// به‌روزرسانی جمع کل فقط در صورت تغییر
		const newTotal = this.items.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0
		);
		if (this.total !== newTotal) {
			this.total = newTotal;
			this.totalPrice.textContent = `${this.total.toLocaleString()} تومان`;
		}
	}

	checkout() {
		if (this.items.length === 0) {
			alert("سبد خرید شما خالی است!");
			return;
		}
		alert("در حال انتقال به درگاه پرداخت...");
		// اینجا می‌توانید منطق پرداخت را اضافه کنید
	}
}

// اطمینان از اجرای کد پس از بارگذاری کامل DOM
document.addEventListener("DOMContentLoaded", () => {
	console.log("DOM fully loaded");
	window.cart = new ShoppingCart();
});

// اطمینان از اجرای کد حتی اگر DOMContentLoaded قبلاً رخ داده باشد
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", () => {
		console.log("DOM loaded (from readyState check)");
		if (!window.cart) {
			window.cart = new ShoppingCart();
		}
	});
} else {
	console.log("DOM already loaded (from readyState check)");
	if (!window.cart) {
		window.cart = new ShoppingCart();
	}
}

class ShoppingCart {
	constructor() {
		this.items = [];
		this.total = 0;
		this.init();
	}

	init() {
		this.cartItems = document.getElementById("cartItems");
		this.totalPrice = document.getElementById("totalPrice");
		this.cartCount = document.getElementById("cartCount");
		this.checkoutBtn = document.getElementById("checkoutBtn");

		this.checkoutBtn.addEventListener("click", () => this.checkout());

		// اضافه کردن محصولات نمونه
		this.addItem({
			id: 1,
			title: "دوره جامع JavaScript",
			price: 50000,
			image: "/placeholder.svg",
		});
		this.addItem({
			id: 2,
			title: "دوره پیشرفته ++C",
			price: 25000,
			image: "/placeholder.svg",
		});
		this.addItem({
			id: 3,
			title: "دوره جامع Python",
			price: 25000,
			image: "/placeholder.svg",
		});
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
		// بروزرسانی تعداد آیتم‌ها
		const totalItems = this.items.reduce(
			(sum, item) => sum + item.quantity,
			0
		);
		this.cartCount.textContent = totalItems;

		// بروزرسانی لیست محصولات
		this.cartItems.innerHTML = this.items
			.map(
				(item) => `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-4">
                    <img src="${
						item.image
					}" class="img-fluid rounded-start" alt="${item.title}">
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.price.toLocaleString()} تومان</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="cart.updateQuantity(${
									item.id
								}, -1)">-</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary" disabled>${
									item.quantity
								}</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="cart.updateQuantity(${
									item.id
								}, 1)">+</button>
                            </div>
                            <button type="button" class="btn btn-sm btn-danger" onclick="cart.removeItem(${
								item.id
							})">حذف</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
			)
			.join("");

		// بروزرسانی جمع کل
		this.total = this.items.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0
		);
		this.totalPrice.textContent = `${this.total.toLocaleString()} تومان`;
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

// ایجاد نمونه از کلاس سبد خرید
const cart = new ShoppingCart();

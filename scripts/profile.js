// Menu switching functionality
document.querySelectorAll('.menu-item').forEach((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();

		// Update active state
		document
			.querySelectorAll('.menu-item')
			.forEach((i) => i.classList.remove('active'));
		item.classList.add('active');

		// Scroll to relevant content
		const contentId = item.getAttribute('data-content');
		const targetElement = document.getElementById(contentId + 'Content');
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

// Make sure all content is visible initially
document
	.querySelectorAll('#coursesContent, #walletContent, #certificatesContent')
	.forEach((content) => {
		content.style.display = 'block';
	});

document.addEventListener('DOMContentLoaded', function () {
	const amountButtons = document.querySelectorAll('.amount-btn');
	const customAmountInput = document.getElementById('customAmount');
	const showLicenseButtons = document.querySelectorAll('.show-license');
	const licenseModal = new bootstrap.Modal(
		document.getElementById('licenseModal')
	);
	const licenseCodeInput = document.getElementById('licenseCode');
	const copyLicenseButton = document.getElementById('copyLicense');

	// تابع برای محاسبه و نمایش مجموع مقادیر دکمه‌های فعال
	function updateTotalAmount() {
		let total = 0;
		amountButtons.forEach((btn) => {
			if (btn.classList.contains('active')) {
				total += parseInt(btn.dataset.amount);
			}
		});
		customAmountInput.value = total;
	}

	// کد مربوط به دکمه‌های مبلغ
	amountButtons.forEach((button) => {
		button.addEventListener('click', function () {
			this.classList.toggle('active');
			updateTotalAmount();
		});
	});

	customAmountInput.addEventListener('focus', function () {
		// غیرفعال کردن همه دکمه‌ها وقتی روی ورودی سفارشی کلیک می‌شود
		amountButtons.forEach((btn) => btn.classList.remove('active'));
		this.value = ''; // پاک کردن مقدار ورودی
	});

	customAmountInput.addEventListener('input', function () {
		// اطمینان از اینکه ورودی فقط شامل اعداد است
		this.value = this.value.replace(/[^0-9]/g, '');
	});

	// کد جدید برای نمایش و کپی کردن لایسنس
	showLicenseButtons.forEach((button) => {
		button.addEventListener('click', function () {
			const license = this.getAttribute('data-license');
			licenseCodeInput.value = license;
			licenseModal.show();
		});
	});

	copyLicenseButton.addEventListener('click', function () {
		licenseCodeInput.select();
		document.execCommand('copy');
		alert('کد لایسنس کپی شد!');
	});
});

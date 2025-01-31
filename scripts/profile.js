// ------------------------ متغیرهای سراسری ------------------------
let acceptedRules = false; // وضعیت پذیرش قوانین
let pendingLicense = ''; // کد لایسنس دکمه کلیک شده

// ------------------------ اسکریپت مربوط به منو و مبلغ (باقی کدهای شما) ------------------------
document.querySelectorAll('.menu-item').forEach((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		document
			.querySelectorAll('.menu-item')
			.forEach((i) => i.classList.remove('active'));
		item.classList.add('active');
		const contentId = item.getAttribute('data-content');
		const targetElement = document.getElementById(contentId + 'Content');
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

document
	.querySelectorAll('#coursesContent, #walletContent, #certificatesContent')
	.forEach((content) => {
		content.style.display = 'block';
	});

document.addEventListener('DOMContentLoaded', function () {
	const amountButtons = document.querySelectorAll('.amount-btn');
	const customAmountInput = document.getElementById('customAmount');
	const showLicenseButtons = document.querySelectorAll('.show-license');
	const licenseModalEl = document.getElementById('licenseModal');
	const licenseModal = new bootstrap.Modal(licenseModalEl);
	const licenseCodeInput = document.getElementById('licenseCode');
	const copyLicenseButton = document.getElementById('copyLicense');

	// ------------------------ کد مربوط به دکمه‌های مبلغ ------------------------
	function updateTotalAmount() {
		let total = 0;
		amountButtons.forEach((btn) => {
			if (btn.classList.contains('active')) {
				total += parseInt(btn.dataset.amount);
			}
		});
		customAmountInput.value = total;
	}
	amountButtons.forEach((button) => {
		button.addEventListener('click', function () {
			this.classList.toggle('active');
			updateTotalAmount();
		});
	});
	customAmountInput.addEventListener('focus', function () {
		amountButtons.forEach((btn) => btn.classList.remove('active'));
		this.value = '';
	});
	customAmountInput.addEventListener('input', function () {
		this.value = this.value.replace(/[^0-9]/g, '');
	});

	// ------------------------ کد مربوط به کپی کردن لایسنس ------------------------
	copyLicenseButton.addEventListener('click', function () {
		licenseCodeInput.select();
		document.execCommand('copy');
		alert('کد لایسنس کپی شد!');
	});

	// ------------------------ مدیریت دکمه‌های «لایسنس» ------------------------
	showLicenseButtons.forEach((button) => {
		button.addEventListener('click', function () {
			// ذخیره کد لایسنس دکمه انتخاب شده
			pendingLicense = this.getAttribute('data-license');
			// اگر قوانین قبلاً پذیرفته شده‌اند، مستقیماً مدال لایسنس را نمایش می‌دهیم
			if (acceptedRules) {
				licenseCodeInput.value = pendingLicense;
				licenseModal.show();
			} else {
				// در غیر اینصورت، مدال قوانین را نمایش می‌دهیم
				const rulesModal = new bootstrap.Modal(
					document.getElementById('rulesModal')
				);
				rulesModal.show();
			}
		});
	});
});

// ------------------------ مدیریت مدال قوانین ------------------------
const acceptRulesCheckbox = document.getElementById('acceptRules');
const acceptBtn = document.getElementById('acceptBtn');

acceptRulesCheckbox.addEventListener('change', function () {
	acceptBtn.disabled = !this.checked;
});

acceptBtn.addEventListener('click', function () {
	// وقتی کاربر قوانین را می‌پذیرد:
	acceptedRules = true;
	// مخفی کردن مدال قوانین (در صورتی که به‌صورت دستی مخفی نشود)
	const rulesModalEl = document.getElementById('rulesModal');
	const rulesModal = bootstrap.Modal.getInstance(rulesModalEl);
	if (rulesModal) {
		rulesModal.hide();
	}
	// نمایش مدال لایسنس با استفاده از کد ذخیره‌شده
	const licenseModalEl = document.getElementById('licenseModal');
	const licenseModal = new bootstrap.Modal(licenseModalEl);
	document.getElementById('licenseCode').value = pendingLicense;
	licenseModal.show();
});

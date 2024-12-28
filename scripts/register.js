var overlay = document.getElementById("overlay");

// Buttons to 'switch' the page
var openSignUpButton = document.getElementById("slide-left-button");
var openSignInButton = document.getElementById("slide-right-button");

// The sidebars
var leftText = document.getElementById("sign-in");
var rightText = document.getElementById("sign-up");

// The forms
var accountForm = document.getElementById("sign-in-info");
var signinForm = document.getElementById("sign-up-info");

// Open the Sign Up page
openSignUp = () => {
	// Remove classes so that animations can restart on the next 'switch'
	leftText.classList.remove("overlay-text-left-animation-out");
	overlay.classList.remove("open-sign-in");
	rightText.classList.remove("overlay-text-right-animation");
	// Add classes for animations
	accountForm.className += " form-left-slide-out";
	rightText.className += " overlay-text-right-animation-out";
	overlay.className += " open-sign-up";
	leftText.className += " overlay-text-left-animation";
	// hide the sign up form once it is out of view
	setTimeout(function () {
		accountForm.classList.remove("form-left-slide-in");
		accountForm.style.display = "none";
		accountForm.classList.remove("form-left-slide-out");
	}, 700);
	// display the sign in form once the overlay begins moving right
	setTimeout(function () {
		signinForm.style.display = "flex";
		signinForm.classList += " form-right-slide-in";
	}, 200);
};

// Open the Sign In page
openSignIn = () => {
	// Remove classes so that animations can restart on the next 'switch'
	leftText.classList.remove("overlay-text-left-animation");
	overlay.classList.remove("open-sign-up");
	rightText.classList.remove("overlay-text-right-animation-out");
	// Add classes for animations
	signinForm.classList += " form-right-slide-out";
	leftText.className += " overlay-text-left-animation-out";
	overlay.className += " open-sign-in";
	rightText.className += " overlay-text-right-animation";
	// hide the sign in form once it is out of view
	setTimeout(function () {
		signinForm.classList.remove("form-right-slide-in");
		signinForm.style.display = "none";
		signinForm.classList.remove("form-right-slide-out");
	}, 700);
	// display the sign up form once the overlay begins moving left
	setTimeout(function () {
		accountForm.style.display = "flex";
		accountForm.classList += " form-left-slide-in";
	}, 200);
};

// When a 'switch' button is pressed, switch page
openSignUpButton.addEventListener("click", openSignUp, false);
openSignInButton.addEventListener("click", openSignIn, false);
// New password visibility toggle functionality
function setupPasswordToggle(inputId, toggleId) {
	const passwordInput = document.getElementById(inputId);
	const passwordToggle = document.getElementById(toggleId);

	// Initially hide the toggle
	passwordToggle.style.display = "none";

	passwordInput.addEventListener("input", function () {
		// Show/hide toggle based on input content
		passwordToggle.style.display = this.value.length > 0 ? "block" : "none";
	});

	passwordToggle.addEventListener("click", function () {
		if (passwordInput.type === "password") {
			passwordInput.type = "text";
			this.innerHTML = `
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
					<line x1="1" y1="1" x2="23" y2="23"></line>
				</svg>
			`;
		} else {
			passwordInput.type = "password";
			this.innerHTML = `
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
					<circle cx="12" cy="12" r="3"></circle>
				</svg>
			`;
		}
	});
}

setupPasswordToggle("sign-in-password", "sign-in-password-toggle");
setupPasswordToggle("sign-up-password", "sign-up-password-toggle");

$(function() {
	'use strict';
	
  $('.form-control').on('input', function() {
	  var $field = $(this).closest('.form-group');
	  if (this.value) {
	    $field.addClass('field--not-empty');
	  } else {
	    $field.removeClass('field--not-empty');
	  }
	});

});

document.querySelector("#icon-element").addEventListener("click", toggleIcon);
function toggleIcon() {
	// show password by click
	let passwordElement = document.querySelector("#password");
	if (passwordElement.type === "password") {
				  passwordElement.type = "text";
	} else {
				  passwordElement.type = "password";
	}
	// change icon by click
	let iconElement = document.querySelector("#icon-element");
	if (iconElement.classList.contains("bi-eye-slash-fill")) {
	  iconElement.classList.remove("bi-eye-slash-fill");
	  iconElement.classList.add("bi-eye-fill");
	} else {
	  iconElement.classList.remove("bi-eye-fill");
	  iconElement.classList.add("bi-eye-slash-fill");
	}
  }
// write function for re password input eye icon
document.querySelector("#icon-element2").addEventListener("click", toggleIcon2);
function toggleIcon2() {
	// show password by click
	let passwordElement = document.querySelector("#re-password");
	if (passwordElement.type === "password") {
				  passwordElement.type = "text";
	} else {
				  passwordElement.type = "password";
	}
	// change icon by click
	let iconElement2 = document.querySelector("#icon-element2");
	if (iconElement2.classList.contains("bi-eye-slash-fill")) {
		iconElement2.classList.remove("bi-eye-slash-fill");
		iconElement2.classList.add("bi-eye-fill");
	  } else {
		iconElement2.classList.remove("bi-eye-fill");
		iconElement2.classList.add("bi-eye-slash-fill");
	  }
  }

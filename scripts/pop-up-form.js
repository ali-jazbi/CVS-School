let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault();

let changeForm = (e) => {
  switchCtn.classList.add("is-gx");
  setTimeout(function () {
    switchCtn.classList.remove("is-gx");
  }, 1500);

  switchCtn.classList.toggle("is-txr");
  switchCircle[0].classList.toggle("is-txr");
  switchCircle[1].classList.toggle("is-txr");

  switchC1.classList.toggle("is-hidden");
  switchC2.classList.toggle("is-hidden");
  aContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-z200");
};

let mainF = (e) => {
  for (var i = 0; i < allButtons.length; i++)
    allButtons[i].addEventListener("click", getButtons);
  for (var i = 0; i < switchBtn.length; i++)
    switchBtn[i].addEventListener("click", changeForm);
};

window.addEventListener("load", mainF);

let togglePassword = document.querySelector("#toggle-password");
let passwordInput = document.querySelector("#password-input");

// نمایش آیکون هنگام تایپ
passwordInput.addEventListener("input", function () {
  if (this.value.length > 0) {
    togglePassword.style.display = "inline"; // نمایش آیکون
  } else {
    togglePassword.style.display = "none"; // مخفی کردن آیکون اگر فیلد خالی شد
  }
});

// مخفی کردن آیکون هنگام ترک فیلد اگر فیلد خالی باشد
passwordInput.addEventListener("blur", function () {
  if (this.value.length === 0) {
    togglePassword.style.display = "none"; // مخفی کردن آیکون
  }
});

// تغییر حالت نمایش رمز عبور و تغییر آیکون
togglePassword.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // تغییر کلاس آیکون
  if (type === "text") {
    this.classList.remove("bi-eye-fill"); // حذف آیکون چشم
    this.classList.add("bi-eye-slash-fill"); // اضافه کردن آیکون چشم خط خورده
  } else {
    this.classList.remove("bi-eye-slash-fill"); // حذف آیکون چشم خط خورده
    this.classList.add("bi-eye-fill"); // اضافه کردن آیکون چشم
  }
});

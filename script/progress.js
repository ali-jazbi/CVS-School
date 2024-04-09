function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
    progressBarScroll();
    fixSticky();
};
var sticky = document.querySelector('.hr-fixed');
var limit = document.querySelector('.section-cards').offsetTop - sticky.offsetHeight;
// JavaScript
const hrFixed = document.querySelector('.hr-fixed');
const sectionCards = document.querySelector('.section-cards');
function fixSticky() {
    if (window.pageYOffset >= sectionCards.offsetTop-500) {
        hrFixed.classList.add('hr-fixed-sticky');
    } else {
        hrFixed.classList.remove('hr-fixed-sticky');
    }
}
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.opacity = "0";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.addEventListener("scroll", function() {
    // Get the current scroll position
    var scrollPos = window.scrollY;
    
    // Perform actions based on the scroll position
    if (scrollPos > 100) {
      document.querySelector(".pc-navbar").style.backgroundColor = "rgba(255, 255, 255, 0.929)";
      document.querySelector(".pc-navbar").style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
      document.querySelector(".mobile-navbar").style.backgroundColor = "rgba(255, 255, 255, 0.929)";
      document.querySelector(".mobile-navbar").style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
    } else {
      document.querySelector(".pc-navbar").style.backgroundColor = "white";
      document.querySelector(".pc-navbar").style.boxShadow = "none";
      document.querySelector(".mobile-navbar").style.backgroundColor = "white";
      document.querySelector(".mobile-navbar").style.boxShadow = "none";
    }
  });  
  
  function hoverMENU(){
    // document.querySelector(".header-shape").style.visibility="hidden";
    // document.querySelector(".header-shape1").style.visibility="hidden";
    document.querySelector(".scroll-progress").style.visibility="hidden";
    document.querySelector(".scroll-progress").style.opacity="0";
    // document.querySelector(".header-shape").style.opacity="0";
    // document.querySelector(".header-shape1").style.opacity="0";
  }
  function unhoverMENU(){
    // document.querySelector(".header-shape").style.visibility="visible";
    // document.querySelector(".header-shape1").style.visibility="visible";
    document.querySelector(".scroll-progress").style.visibility="visible";
    document.querySelector(".scroll-progress").style.opacity="1";
    // document.querySelector(".header-shape").style.opacity="1";
    // document.querySelector(".header-shape1").style.opacity="1";
  }
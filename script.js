// Mobile navbar

var navBtn = document.getElementsByClassName("lines-icon")[0];
var mobNavbar = document.getElementById("mobile-nav");
var bright = document.getElementById("low-bright");

var isBlack = false;   

navBtn.addEventListener("click", (e) =>{ 
  e.target.className.baseVal = isBlack ? "lines-icon" : "lines-icon black"
  mobNavbar.className =  isBlack ? "mob-navbar slide-out" : "mob-navbar slide-in"
  bright.className =  isBlack ? "mob-navbar bright-off" : "mob-navbar bright-on"
  isBlack = !isBlack      
})

bright.addEventListener("click", (e) =>{ 
  navBtn.className.baseVal = isBlack ? "lines-icon" : "lines-icon black"
  
  mobNavbar.className =  isBlack ? "mob-navbar slide-out" : "mob-navbar slide-in"
  bright.className =  isBlack ? "mob-navbar bright-off" : "mob-navbar bright-on"
  isBlack = !isBlack     
})      
function myFunction(x) {
    x.classList.toggle("change");
  }

var menuToggle = document.querySelector("#icon");
var activeElements = document.querySelectorAll(".active-element");

var toggledMenu = menuToggle.addEventListener("click", function(){
        
  
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
     document.getElementsByClassName("main-contents").style.display = none;
         
})
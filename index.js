

            // Get the dropdown element

            var dropdown = document.querySelector(".dropdown");
        
            // Add an event listener for the mouseover event

            dropdown.addEventListener("mouseover", function() {

                // Show the dropdown menu
                
                var dropdownMenu = this.querySelector(".dropdown-menu");
                dropdownMenu.style.display = "block";
            });
        
        // Add an event listener for the mouseout event
        dropdown.addEventListener("mouseout", function() {
            // Hide the dropdown menu
            var dropdownMenu = this.querySelector(".dropdown-menu");
            dropdownMenu.style.display = "none";
        });

//.................. z-index section............
 
 function Card_change1(){
        document.getElementById("card1").style.backgroundColor="green";
        document.getElementById("card1").style.zIndex="50";
        document.getElementById("card1").style.margin="10px";
        document.getElementById("card1").style.transform="rotate(360deg)";
        document.getElementById("card1").style.transitionDuration="4s";
    }
     function Card_change2(){
        document.getElementById("card2").style.backgroundColor="pink";
        document.getElementById("card2").style.zIndex="50";
        document.getElementById("card2").style.margin="10px";
        document.getElementById("card2").style.transform="rotate(360deg)";
        document.getElementById("card2").style.transitionDuration="4s";
    }
     function Card_change3(){
        document.getElementById("card3").style.backgroundColor="blue";
        document.getElementById("card3").style.zIndex="50";
        document.getElementById("card3").style.margin="10px";
        document.getElementById("card3").style.transform="rotate(360deg)";
        document.getElementById("card3").style.transitionDuration="4s";
    }
    
//.................. z-index section 2 end............

// ............................. card carousal section end............................... 

  var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});


// ............................. card carousal section end...............................  
        

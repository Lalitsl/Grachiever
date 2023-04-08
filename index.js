

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
        document.getElementById("card_flip_img_change02").style.display="block";
        document.getElementById("card_flip_img_change01").style.display="none";
        document.getElementById("card1").style.zIndex="50";
        // document.getElementById("card1").style.margin="10px";
        document.getElementById("card1").style.transform="rotate(360deg)";
        document.getElementById("card1").style.transitionDuration="4s";
    }
     function Card_change2(){
        document.getElementById("card_flip_img_change04").style.display="block";
        document.getElementById("card_flip_img_change03").style.display="none";
        document.getElementById("card2").style.zIndex="50";
        document.getElementById("card2").style.margin="10px";
        document.getElementById("card2").style.transform="rotate(360deg)";
        document.getElementById("card2").style.transitionDuration="4s";
    }
     function Card_change3(){
        document.getElementById("card_flip_img_change06").style.display="block";
        document.getElementById("card_flip_img_change05").style.display="none";
        document.getElementById("card3").style.zIndex="50";
        document.getElementById("card3").style.margin="10px";
        document.getElementById("card3").style.transform="rotate(360deg)";
        document.getElementById("card3").style.transitionDuration="4s";
    }
    
//.................. z-index section 2 end............


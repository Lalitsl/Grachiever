

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


// ................... forgot password js is start here .......................
function submitotp(){
    document.getElementById("otpdiv").style.display="block";
}
// ................... forgot password js is end here .......................


// ..................... card section z -index start ..............

// document.getElementById('scard01').addEventListener("click",()=>{
//     var id1=this.id;
//     console.log("this is id");
// })

// document.getElementById('scard01').addEventListener("mouseover", myfunction);
// function myfunction()
//  {
//     document.getElementById('scard01').style.backgroundColor = "red";
// }




document.getElementById("scard01").addEventListener("click", ()=>{
    document.querySelector("#scard02").classList.remove("lift-up");
    document.querySelector("#scard03").classList.remove("lift-up");
    document.querySelector("#scard01").classList.add("shift-left");
    setTimeout(() => {
        document.querySelector("#scard01").classList.toggle("lift-up");
    }, 500);
    setTimeout(() => {
        document.querySelector("#scard01").classList.remove("shift-left");
    }, 700);
})
document.getElementById("scard02").addEventListener("click", ()=>{
    document.querySelector("#scard01").classList.remove("lift-up");
    document.querySelector("#scard03").classList.remove("lift-up");
    document.querySelector("#scard02").classList.add("shift-right");
    setTimeout(() => {
        document.querySelector("#scard02").classList.toggle("lift-up");
    }, 700);
    setTimeout(() => {
        document.querySelector("#scard02").classList.remove("shift-right");
    }, 5000);
})
document.getElementById("scard03").addEventListener("click", ()=>{
    document.querySelector("#scard02").classList.remove("lift-up");
    document.querySelector("#scard01").classList.remove("lift-up");
    document.querySelector("#scard03").classList.add("shift-right");
    setTimeout(() => {
        document.querySelector("#scard03").classList.toggle("lift-up");
    }, 500);
    setTimeout(() => {
        document.querySelector("#scard03").classList.remove("shift-right");
    }, 700);
})

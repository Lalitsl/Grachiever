
    // Navbar dropdown element

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



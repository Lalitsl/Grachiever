
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


// Login Form validation

const id01 = document.getElementById('id01');
const name = document.getElementById('name');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

id01.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const mobileValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if(nameValue === '') {
      setError(name, 'name is required');
  } else {
      setSuccess(name);
  }

  if(emailValue === '') {
      setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
  } else {
      setSuccess(email);
  }

  if(mobileValue === '') {
      setError(mobile, 'Mobile Number is required');
  } else {
      setSuccess(mobile);
  }

  if(passwordValue === '') {
      setError(password, 'Password is required');
  } else if (passwordValue.length < 8 ) {
      setError(password, 'Password must be at least 8 character.')
  } else {
      setSuccess(password);
  }

  if(password2Value === '') {
      setError(password2, 'Please confirm your password');
  } else if (password2Value !== passwordValue) {
      setError(password2, "Passwords doesn't match");
  } else {
      setSuccess(password2);
  }

};


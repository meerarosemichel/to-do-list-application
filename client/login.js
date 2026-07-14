// Select the login form
const loginForm = document.querySelector("form");

// When Login button is clicked
loginForm.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if(email === ""){
        alert("Please enter your email.");
        return;
    }

    if(password === ""){
        alert("Please enter your password.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Invalid Email Address.");
        return;
    }

    if(password.length < 6){
        alert("Password must contain at least 6 characters.");
        return;
    }

    alert("Login Successful!");

    window.location.href = "index.html";

});
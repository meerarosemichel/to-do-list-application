// Check if JavaScript is loaded
console.log("Contact JS Loaded");

// Get the form
const contactForm = document.getElementById("contactform");

// Form submit event
contactForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate Name
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate Subject
    if (subject === "") {
        alert("Please enter the subject.");
        return;
    }

    // Validate Message
    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    // Success
    alert("Message Sent Successfully!");

    // Clear the form
    contactForm.reset();

});
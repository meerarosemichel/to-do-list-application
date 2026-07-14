// Select Logout Button
const logoutBtn = document.getElementById("logoutBtn");

// Logout Button Click
logoutBtn.addEventListener("click", function () {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        alert("Logged out successfully!");

        // Redirect to Login Page
        window.location.href = "index.html";

    }

});
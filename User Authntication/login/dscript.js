document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerNow = document.getElementById("registerNow");
    const forgotPassword = document.getElementById("forgotPassword");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Add your login logic here
        alert("Login logic goes here!");
    });

    registerNow.addEventListener("click", function (event) {
        event.preventDefault();
        // Redirect to the register.html page
        window.location.href = "register.html";
    });

    forgotPassword.addEventListener("click", function (event) {
        event.preventDefault();
        // Redirect to the frgpass.html page
        window.location.href = "frgpass.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerNow = document.getElementById("registerNow");
    const forgotPassword = document.getElementById("forgotPassword");
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    let loginText = document.querySelector(".text");

    
    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Add your login logic here
        if (user.value == "admin" && pass.value == "admin") {
            loginText.classList.remove("hide");
            alert("Logged IN");
        } else {
            alert("Wrong password or username");
        }
        
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

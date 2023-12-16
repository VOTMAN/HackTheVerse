document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const registerContainer = document.querySelector(".register-container");
    const formGroups = document.querySelectorAll(".form-group");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const passwordError = document.getElementById("passwordError");
    const passwordToggle = document.getElementById("passwordToggle");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Reset all error messages
        emailError.textContent = "";
        passwordError.textContent = "";

        // Validate email format
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = "Please enter a valid email address.";
            return;
        }

        // Validate password match
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordError.textContent = "Passwords do not match. Please try again.";
            return;
        }

        // Add your registration logic here
        const fullName = document.getElementById("fullName").value;
        const email = emailInput.value;
        alert(`Registration successful!\n\nName: ${fullName}\nEmail: ${email}`);

        // Show form success message and reset form
        registerContainer.classList.add("show");
        formGroups.forEach(group => group.classList.add("show"));
        registerForm.reset();
    });

    // Toggle password visibility
    passwordToggle.addEventListener("click", togglePasswordVisibility);

    function togglePasswordVisibility() {
        const type = passwordInput.type === "password" ? "text" : "password";
        passwordInput.type = type;
        passwordToggle.classList.toggle("password-hidden", type === "text");
    }

    // Email validation function
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

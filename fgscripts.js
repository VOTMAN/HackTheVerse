var otpRequested = false;
var otpVerified = false;

function requestOTP() {
    if (!otpRequested) {
        var email = document.getElementById('email').value;

        // Assume there is a backend API to send OTP to the provided email
        // You need to implement this on your server
        // Example: sendOTPByEmail(email);

        // Display the OTP input boxes
        document.getElementById('otpContainer').style.display = 'block';

        // Dynamically generate OTP input boxes
        var otpForm = document.getElementById('otpForm');
        for (var i = 1; i <= 6; i++) {
            var input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.id = 'otp' + i;
            otpForm.appendChild(input);
        }

        otpRequested = true;
    }
}

function verifyOTP() {
    if (!otpVerified) {
        // Collect the OTP entered by the user
        var enteredOTP = '';
        for (var i = 1; i <= 6; i++) {
            enteredOTP += document.getElementById('otp' + i).value;
        }

        // Assume there is a backend API to verify the entered OTP
        // You need to implement this on your server
        // Example: verifyOTP(enteredOTP);

        // Display the new password input
        document.getElementById('newPasswordContainer').style.display = 'block';
        document.getElementById('otpContainer').style.display = 'none';

        otpVerified = true;
    }
}

function updatePassword() {
    // Collect the new password entered by the user
    var newPassword = document.getElementById('newPassword').value;

    // Assume there is a backend API to update the password
    // You need to implement this on your server
    // Example: updatePasswordByEmail(email, newPassword);

    // Display a success message or handle the password update result accordingly
    alert('Password Updated Successfully!');
}

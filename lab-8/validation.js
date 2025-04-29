function validateForm() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Check for empty fields
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return false;
    }

    // Validate email format
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}

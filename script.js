document.getElementById("visaForm").addEventListener("submit", function(event) {
    let valid = true;

    // Name Validation (Non-regex)
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        valid = false;
        document.getElementById("nameError").textContent = "Name cannot be empty.";
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Date of Birth Validation (Non-regex)
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();
    if (dob >= today) {
        valid = false;
        document.getElementById("dobError").textContent = "Date of Birth must be in the past.";
    } else {
        document.getElementById("dobError").textContent = "";
    }

    // Email Validation (Regex)
    const email = document.getElementById("email").value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        valid = false;
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Phone Number Validation (Regex)
    const phone = document.getElementById("phone").value;
    if (!/^\d{10}$/.test(phone)) {
        valid = false;
        document.getElementById("phoneError").textContent = "Phone number must be 10 digits.";
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    // Pincode Validation (Regex)
    const pincode = document.getElementById("pincode").value;
    if (!/^\d{6}$/.test(pincode)) {
        valid = false;
        document.getElementById("pincodeError").textContent = "Pincode must be 6 digits.";
    } else {
        document.getElementById("pincodeError").textContent = "";
    }

    // Address Validation (Non-regex)
    const address = document.getElementById("address").value;
    if (address.trim() === "") {
        valid = false;
        document.getElementById("addressError").textContent = "Address cannot be empty.";
    } else {
        document.getElementById("addressError").textContent = "";
    }

    // File Upload Validation (Non-regex)
    const passport = document.getElementById("passport").value;
    if (passport === "") {
        valid = false;
        document.getElementById("fileError").textContent = "Please upload a passport copy.";
    } else {
        document.getElementById("fileError").textContent = "";
    }

    if (!valid) {
        event.preventDefault();
    }
});
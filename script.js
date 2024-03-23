document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Check if any field is empty
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Show alert with the submitted data
    var alertMessage = "Thank you for your message!\n\n";
    alertMessage += "Name: " + name + "\n";
    alertMessage += "Email: " + email + "\n";
    alertMessage += "Message: " + message;
    alert(alertMessage);

    // Optionally, you can reset the form after submission
    document.getElementById("contact-form").reset();
});

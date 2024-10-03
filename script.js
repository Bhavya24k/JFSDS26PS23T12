// Simulate fetching user data after login
document.addEventListener("DOMContentLoaded", function() {
    // Simulating user data fetched from a server (this would typically come from an API)
    const userData = {
        name: "Bhavya",
        email: "bhavya@gmail.com",
        age: 20,
        bmi: 24.5,
        healthStatus: "Healthy",
        appointments: "Checkup on 12th Sept, Blood Test on 5th Oct"
    };

    // Update the profile details with the fetched user data
    document.getElementById("user-name").textContent = userData.name;
    document.getElementById("user-email").textContent = userData.email;
    document.getElementById("user-age").textContent = userData.age;
    document.getElementById("user-bmi").textContent = userData.bmi;
    document.getElementById("user-health").textContent = userData.healthStatus;
    document.getElementById("user-appointments").textContent = userData.appointments;

    // Handle password change form submission
    document.getElementById("change-password-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const newPassword = document.getElementById("new-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
        } else {
            alert("Password changed successfully!");
            // Here, you would typically make an API call to update the user's password
        }
    });
});

// Load current username from localStorage
window.onload = function () {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
        document.getElementById("profileUser").textContent = storedUser.username;
    }
};

// Function to save a new username
function saveNewUsername() {
    const newUsername = document.getElementById("newUsername").value;

    if (!newUsername) {
        alert("Please enter a new username.");
        return;
    }

    // Get current user from localStorage
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        user = {};
    }

    // Update username
    user.username = newUsername;

    // Save back to localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Update the displayed username
    document.getElementById("profileUser").textContent = newUsername;

    alert("Username updated successfully!");
}

function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please enter valid username and password.");
        return;
    }

    // Store user data in localStorage
    const userData = { username };
    localStorage.setItem("user", JSON.stringify(userData));

    // Update UI
    document.getElementById("userDisplay").textContent = username;

    // Hide modal
    document.getElementById("loginModal").style.display = "none";

    // Show success message
    alert("Login Successful!");
}

// Check if user is already logged in (when page loads)
window.onload = function() {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
        const userData = JSON.parse(storedUser);
        document.getElementById("userDisplay").textContent = userData.username;
    }
};

// Function to handle Profile Button Click
function handleEditProfile() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        // If user exists, open Edit Profile Modal
        document.getElementById('profileModal').style.display = 'block';
        document.getElementById('editUsername').value = user.username;
    } else {
        // If no user, show Login Modal
        document.getElementById('loginModal').style.display = 'block';
    }
}

// Function to Save Profile Changes
function handleSaveProfile() {
    const newUsername = document.getElementById('editUsername').value;

    if (newUsername.trim() !== '') {
        const user = { username: newUsername };
        localStorage.setItem('user', JSON.stringify(user));

        // Update UI
        document.getElementById('profileButton').innerText = `👤 ${newUsername}`;
        document.getElementById('logoutButton').style.display = 'block';

        alert('Profile Updated Successfully! ✅');
        closeModal('profileModal');
    } else {
        alert('Username cannot be empty!');
    }
}

// Function to Handle Logout
function handleLogout() {
    localStorage.removeItem('user');

    // Reset UI
    document.getElementById('profileButton').innerText = '👤 Guest';
    document.getElementById('logoutButton').style.display = 'none';

    alert('Logged out successfully! ✅');
}

// Function to Close Modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Event Listeners
document.getElementById('profileButton').addEventListener('click', handleEditProfile);
document.getElementById('logoutButton').addEventListener('click', handleLogout);


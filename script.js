const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=>{
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    logregBox.classList.remove('active');
});

// Function to validate login form and redirect to index.html
function validateLoginForm() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    
    // Password validation (you can add more rules here)
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    // Redirect to index.html
    window.location.href = "HomePage/home.html";
    return false; // Prevent default form submission
}

// Add event listener to login form
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    validateLoginForm(); // Call the validation function
});

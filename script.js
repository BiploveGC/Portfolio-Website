//Home Page
// Responsive Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});
//Projects//


//Skiils Page//



//Contact Page//
// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formFeedback");

    // Simple validation
    if (name === "" || email === "" || message === "") {
        feedback.textContent = "All fields are required!";
    } else if (!validateEmail(email)) {
        feedback.textContent = "Please enter a valid email address!";
    } else {
        feedback.style.color = "green";
        feedback.textContent = "Message sent successfully!";
        document.getElementById("contactForm").reset();
    }
});

// Helper function to validate email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Smooth Scroll
scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Input Focus Animation
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.style.transform = "scale(1.02)";
    });
    input.addEventListener("blur", () => {
        input.style.transform = "scale(1)";
    });
});
// Character Count for Textarea
const messageBox = document.getElementById("message");
const charCount = document.getElementById("charCount");
const maxChars = 500;

messageBox.addEventListener("input", function() {
    const currentLength = messageBox.value.length;
    charCount.textContent = `${currentLength}/${maxChars} characters`;

    if (currentLength > maxChars) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "#40514E";
    }
});
const sendButton = document.getElementById("sendButton");

document.getElementById("contactForm").addEventListener("submit", function() {
    sendButton.textContent = "Sending...";
    sendButton.disabled = true;

    setTimeout(() => { // Simulate sending delay
        sendButton.textContent = "Send";
        sendButton.disabled = false;
    }, 2000);
});


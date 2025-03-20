// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth"
        });
    });
});

// Dynamic typing effect in home section
const typingText = "I'm a passionate front-end developer creating beautiful and functional websites.";
let index = 0;
const homeParagraph = document.querySelector(".home p");
function typeEffect() {
    if (index < typingText.length) {
        homeParagraph.textContent += typingText.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
window.onload = () => {
    homeParagraph.textContent = ""; // Clear text before typing
    typeEffect();
};

// Form validation in contact section
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.querySelector("input[name='name']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const message = document.querySelector("textarea[name='message']").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
    } else {
        alert("Message sent successfully!");
        document.querySelector("form").reset();
    }
});

// Scroll-to-top button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.textContent = "↑";
scrollTopBtn.classList.add("scroll-top-btn");
document.body.appendChild(scrollTopBtn);
scrollTopBtn.style.cssText = "position:fixed;bottom:20px;right:20px;padding:10px 15px;font-size:20px;background:#FF5722;color:white;border:none;border-radius:50px;cursor:pointer;display:none";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

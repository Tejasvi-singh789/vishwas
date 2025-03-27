// Highlight the active navigation link
function highlightActiveLink() {
    document.querySelectorAll("nav ul li a").forEach(link => {
        if (link.href === window.location.href) {
            link.style.fontWeight = "bold";
            link.style.color = "green";
        }
    });
}

// Dynamically update the footer year
function updateFooterYear() {
    const footer = document.querySelector("footer p");
    footer.innerHTML += ` - ${new Date().getFullYear()}`;
}

// Add interactivity to an alert button
function setupAlertButton() {
    const alertButton = document.getElementById("alertButton");
    if (alertButton) {
        alertButton.addEventListener("click", () => {
            alert("Thanks for exploring sustainable ideas with VISHWASA!");
        });
    }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute("href"));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
}

// Animate the header logo when hovered
function addLogoAnimation() {
    const logo = document.querySelector("header img");
    if (logo) {
        logo.addEventListener("mouseover", () => {
            logo.style.transform = "scale(1.2)";
            logo.style.transition = "transform 0.3s ease-in-out";
        });
        logo.addEventListener("mouseout", () => {
            logo.style.transform = "scale(1)";
        });
    }
}

// Initialize all functionalities
function initialize() {
    highlightActiveLink();
    updateFooterYear();
    setupAlertButton();
    setupSmoothScrolling();
    addLogoAnimation();
}

// Run initialization when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initialize);

const slides = document.querySelectorAll('.deal-item img');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);
    showSlide(currentSlide);
let slideIndex = 0;
const hotDealSlides = document.querySelectorAll(".hot-deal-item ");

function showSlides(index) {
    // Ensure the index is within bounds
    if (index >= hotDealSlides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = hotDealSlides.length - 1;
    } else {
        slideIndex = index;
    }

    // Hide all slides and show the current one
    hotDealSlides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? "block" : "none";
    });
}

// Navigate to the next or previous slide
function plusSlides(step) {
    showSlides(slideIndex + step);
}

// Initialize the slideshow
showSlides(slideIndex);
document.addEventListener("DOMContentLoaded", function () {
    // Form Submission Event Listener
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validate form fields
            if (!name) {
                alert("Please enter your name.");
                return;
            }

            if (!/^\+?\d{10,15}$/.test(phone)) {
                alert("Please enter a valid phone number.");
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (!message) {
                alert("Please enter your message.");
                return;
            }

            // If all fields are valid, simulate form submission
            alert("Message sent successfully!");
            contactForm.reset(); // Reset the form fields
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const filterDropdown = document.getElementById("category-filter");
    const items = document.querySelectorAll(".collection-item");

    filterDropdown.addEventListener("change", function () {
        const selectedFilter = this.options[this.selectedIndex].dataset.filter;

        items.forEach(item => {
            const category = item.getAttribute("data-category");

            if (selectedFilter === "all" || category === selectedFilter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});



    


    






 

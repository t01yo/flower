let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // Hide all slides and remove active class from all dots
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function performSearch() {
    const query = document.querySelector('.search-container input').value;
    // You can implement your search logic here
    console.log("Searching for:", query); // Example output
    // Redirect to search results page, filter items, etc.
}


function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    showSlide(currentIndex);
}

function moveToSlide(index) {
    currentIndex = index; // Update the current index to the clicked dot
    showSlide(currentIndex);
}

// Automatically slide every 3 seconds
setInterval(nextSlide, 3000);

// Initial call to show the first slide
showSlide(currentIndex);


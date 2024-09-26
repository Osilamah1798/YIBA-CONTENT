// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Order button functionality
    document.getElementById('order-button').addEventListener('click', function() {
        alert('Thank you for your order! We\'ll prepare it right away.');
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple image lazy loading
    const images = document.querySelectorAll('img');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // This will trigger the image to load
                imageObserver.unobserve(img);
            }
        });
    }, options);

    images.forEach(img => imageObserver.observe(img));
});
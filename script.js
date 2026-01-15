// Script for minimal interactions
document.addEventListener('DOMContentLoaded', () => {
    console.log('Furion Portfolio Loaded');

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Parallax effect for "01", "02" numbers could be added here
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const numbers = document.querySelectorAll('.section-number, .portfolio-number, .achieve-number, .clients-number, .blog-number');

        numbers.forEach(num => {
            // Simple parallax shift
            const rate = 0.1;
            // num.style.transform = `translateY(${scrolled * rate}px)`;
            // (Disabled to keep it strict to design position, but this is where it would go)
        });
    });
});

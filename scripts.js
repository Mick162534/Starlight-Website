// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive Nav (Optional)
const navLinks = document.querySelector('.nav-links');
const toggleMenu = document.querySelector('.menu-toggle');

toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

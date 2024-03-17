document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Adjust based on your need
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });
});

/* Scrolling Effect for Navbar */
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) navbar.style.backgroundColor = 'rgba(0,0,0,0.7)'; // Adjust color as needed
    else navbar.style.backgroundColor = 'transparent';
});
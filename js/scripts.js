$(function(){
    $("#header-placeholder").load("templates/header.html", function() {
        // Get current page filename
        var currentPage = window.location.pathname.split("/").pop();

        // Add 'active' class to the current page's nav item
        $('.navbar-nav .nav-link').each(function(){
            var linkPage = $(this).attr('href');
            if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
                $(this).addClass('active');
            }
        });
    });
    $("#footer-placeholder").load("templates/footer.html");

    // Particles.js initialization
    if ($('#particles-js').length > 0) {
        particlesJS.load('particles-js', 'assets/particles.json', function() {
            console.log('particles.js loaded');
        });
    }

    // Typed.js initialization
    if ($('#typed-text').length > 0) {
        var typed = new window.Typed('#typed-text', {
            strings: ['Damien Hosea', 'a Web Developer', 'a Game Developer', 'a Software Engineer', 'an Educator', 'a Gamer','a Gemini'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });
    }

    // Smooth scroll to featured projects
    if ($('.hero').length > 0 && $('#featured-projects').length > 0) {
        let scrolled = false;
        const heroSection = document.querySelector('.hero');
        const featuredProjectsSection = document.getElementById('featured-projects');

        window.addEventListener('scroll', function() {
            if (!scrolled && window.scrollY > 0) {
                scrolled = true;
                featuredProjectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });

        // Reset scrolled state when back at the top
        window.addEventListener('scrollend', function() {
            if (window.scrollY === 0) {
                scrolled = false;
            }
        });
    }

    function updateHeaderQuote() {
        const quotes = [
            "I am capable of achieving greatness",
            "I trust in my ability to grow and succeed",
            "I am a visionary leader",
            "Everyday, I am becoming a better version of myself",
            "I have the power to create positive change in my life",
            "I am worthy of happiness, success, and love",
            "I am confident, resilient, and strong",
            "I choose to focus on what I can control and let go of what I cannot",
            "I attract positive energy and opportunities",
            "I embrace challenges as opportunities for growth",
            "I am proud of my progress",
        
        ];
        const quoteElement = document.getElementById('header-quote');
        if (quoteElement) {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            quoteElement.textContent = randomQuote;
        }
    }

    // Update the quote every 5 seconds (5000 milliseconds)
    setInterval(updateHeaderQuote, 5000);

    // Also update immediately when the page loads
    document.addEventListener('DOMContentLoaded', updateHeaderQuote);
});

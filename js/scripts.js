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
        var typed = new Typed('#typed-text', {
            strings: ['a Web Developer', 'a Game Developer', 'a Software Engineer', 'an Educator'],
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
});

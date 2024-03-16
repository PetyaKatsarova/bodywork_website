
    document.getElementById('mobile-menu').addEventListener('click', function() {
        var navbar = document.getElementById('navbar');
        navbar.classList.toggle('active');
    });

    window.addEventListener('scroll', function() {
        var header = document.querySelector('.header');
        header.style.backgroundColor = window.scrollY > 0 ? 'rgba(51, 51, 51, 0.5)' : 'transparent';
    });


document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, 
                behavior: 'smooth'
            });
        }
    });
});

window.onscroll = function() {stickyNavigation()};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function stickyNavigation() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

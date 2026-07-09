// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
if (hamburger && nav) {
    const toggleMenu = () => {
        const isOpen = nav.classList.toggle('open');
        hamburger.classList.toggle('active', isOpen);
        document.body.classList.toggle('menu-open', isOpen && window.innerWidth <= 768);
    };

    hamburger.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
            document.body.classList.remove('menu-open');
        });
    });

    document.addEventListener('click', (event) => {
        const clickedInsideNav = nav.contains(event.target);
        const clickedHamburger = hamburger.contains(event.target);
        if (window.innerWidth <= 768 && nav.classList.contains('open') && !clickedInsideNav && !clickedHamburger) {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
            document.body.classList.remove('menu-open');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
            document.body.classList.remove('menu-open');
        }
    });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== "#") {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
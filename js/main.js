document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Sent!';
            btn.style.background = '#10b981';
            contactForm.reset();
            setTimeout(function () {
                btn.textContent = originalText;
                btn.style.background = '';
            }, 2000);
        });
    }
});

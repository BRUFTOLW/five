(function () {
    const navToggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('#primary-menu');

    if (navToggle && menu) {
        if (!menu.hasAttribute('aria-expanded')) {
            menu.setAttribute('aria-expanded', 'false');
        }
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            menu.setAttribute('aria-expanded', String(!expanded));
        });
    }

    const yearEl = document.querySelector('#current-year');
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }

    const stickyCta = document.querySelector('.sticky-cta');
    if (stickyCta) {
        const toggleSticky = () => {
            if (window.scrollY > 240) {
                stickyCta.classList.add('visible');
            } else {
                stickyCta.classList.remove('visible');
            }
        };

        toggleSticky();
        window.addEventListener('scroll', toggleSticky, { passive: true });
    }
})();

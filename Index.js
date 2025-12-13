document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.querySelector('a[href="#login"]');
    const registerLink = document.querySelector('a[href="#register"]');

    function navigateTo(target) {
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            sessionStorage.setItem('activeSection', target);
        }
    }

    if (loginLink) {
        loginLink.addEventListener('click', (event) => {
            event.preventDefault();
            navigateTo('login');
        });
    }

    if (registerLink) {
        registerLink.addEventListener('click', (event) => {
            event.preventDefault();
            navigateTo('register');
        });
    }

    const activeSection = sessionStorage.getItem('activeSection');
    if (activeSection) {
        const element = document.getElementById(activeSection);
        if (element) {
            const style = document.createElement('style');
            style.innerHTML = '* { scroll-behavior: auto !important; }';
            document.head.appendChild(style);

            element.scrollIntoView({ behavior: 'auto' });

            requestAnimationFrame(() => {
                setTimeout(() => {
                    document.head.removeChild(style);
                }, 50);
            });
        }
    }
});
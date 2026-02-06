console.log('مرحباً بك في موقع نادي Shpoov');

// تفعيل قائمة الهاتف (Mobile Menu)
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}


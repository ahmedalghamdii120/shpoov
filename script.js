window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
    }, 1500); // يختفي بعد 1.5 ثانية من تحميل الصفحة
});

console.log('مرحباً بك في موقع نادي Shpoov');

// تفعيل قائمة الهاتف (Mobile Menu)
const menuToggle = document.querySelector('.menu-toggle');
const mainnav = document.querySelector('.main-nav'); // تم توحيد الاسم مع الاستخدام

if (menuToggle && mainnav) {
    menuToggle.addEventListener('click', () => {
        mainnav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // إغلاق القائمة عند النقر على أي رابط
    const navLinks = mainnav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainnav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}


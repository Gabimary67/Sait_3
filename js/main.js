// Функция для фиксации меню при прокрутке
function fixedHeaderOnScroll() {
    const header = document.getElementById('BhGLYbqhWLdA');
    const mainNavigation = document.getElementById('mainNavigation');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Порог прокрутки для активации фиксации (в пикселях)
    const scrollThreshold = 100;
    
    if (scrollTop > scrollThreshold) {
        header.classList.add('fixed');
        // Добавляем отступ для основного контента
        document.body.style.paddingTop = header.offsetHeight + 'px';
    } else {
        header.classList.remove('fixed');
        document.body.style.paddingTop = '0';
    }
}

// Слушаем событие прокрутки
window.addEventListener('scroll', fixedHeaderOnScroll);
window.addEventListener('resize', fixedHeaderOnScroll);

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    fixedHeaderOnScroll();
});
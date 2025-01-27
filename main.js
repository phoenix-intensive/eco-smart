document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


// Функция для установки cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/`;
    }


// Функция для получения cookie
    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(`${name}=`)) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

// Проверка и показ баннера
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');

    // Если пользователь ещё не принял cookies, показываем баннер
    if (!getCookie('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    }

    // При клике на "Accept" скрываем баннер и сохраняем флаг
    acceptButton.addEventListener('click', () => {
        setCookie('cookiesAccepted', 'true', 365); // Устанавливаем cookie на 1 год
        cookieBanner.style.display = 'none';
    });
});

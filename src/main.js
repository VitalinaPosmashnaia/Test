// 1. Отримуємо назву додатка з перемінних оточення
// Vite автоматично підтягує змінні, що починаються з VITE_
const appTitle = import.meta.env.VITE_APP_TITLE || "UniDone Default";

// 2. Функція для ініціалізації заголовка
const initTitle = () => {
    const titleElement = document.querySelector("#project-title");
    
    if (titleElement) {
        titleElement.textContent = appTitle;
    } else {
        console.warn("Попередження: Елемент з id '#project-title' не знайдено в HTML.");
    }
};

// 3. Запускаємо ініціалізацію
initTitle();

// 4. Виводимо інформацію про поточний режим (development/production)
console.log(`%c[UniDone]%c Додаток запущено в режимі: ${import.meta.env.MODE}`, "color: #4CAF50; font-weight: bold", "color: inherit");

window.sendTestEvent = function() {
    // Перевіряємо, чи PostHog завантажився
    if (window.posthog) {
        posthog.capture('button_clicked', {
            message: 'Користувач натиснув на кнопку!',
            lab_number: 4
        });
        alert("Подія 'button_clicked' відправлена до PostHog!");
    } else {
        console.error("PostHog ще не завантажився. Зачекайте секунду.");
    }
}
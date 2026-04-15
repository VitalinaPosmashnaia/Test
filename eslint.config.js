import js from "@eslint/js";
import globals from "globals";

export default [
    // Використовуємо рекомендовані налаштування ESLint
    js.configs.recommended,
    
    {
        // Вказуємо, для яких файлів застосовувати ці правила
        files: ["**/*.js"],
        
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            // Замість ручного переліку window/document, використовуємо пакет globals
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        
        rules: {
            // "warn" замість "error" дозволяє бачити підказки, але не блокує збірку
            "no-unused-vars": "warn",
            "no-undef": "warn",
            
            // Додатково: корисні правила для чистоти коду
            "no-console": "off", // дозволяємо console.log, бо це часто потрібно в лабах
            "semi": ["warn", "always"], // вимагати крапку з комою
            "quotes": ["warn", "double"] // використовувати подвійні лапки
        }
    }
];
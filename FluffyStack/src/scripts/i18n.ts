export interface Translations {
    [key: string]: string;
}

export const translations: { [locale: string]: Translations } = {
    uk: {
        // Навигация
        'nav.home': 'Головна',
        'nav.about': 'Про нас',
        'nav.pancakes': 'Млинці',
        'nav.contact': 'Контакти',

        // Главная страница (index.html)
        'home.title': 'FluffyStack - Найкращі млинці у світі',
        'home.subtitle': 'Відкрийте для себе світ смачних млинців',
        'home.hero.title': 'Ласкаво просимо до FluffyStack',
        'home.hero.subtitle': 'Де кожен млинець — це шедевр',
        'home.cta': 'Переглянути рецепти',
        'home.featured': 'Рекомендовані рецепти',
        'home.theme.toggle': 'Перемкнути тему',
        'home.why.us': 'Чому ми?',
        'home.newsletter': 'Підписатися на новини',
        'home.newsletter.text': 'Отримуйте найкращі рецепти прямо на пошту',
        'home.newsletter.email': 'Введіть ваш email',
        'home.newsletter.subscribe': 'Підписатися',

        // О нас (about.html)
        'about.title': 'Про нас',
        'about.page.title': 'Наша історія',
        'about.subtitle': 'Історія FluffyStack',
        'about.content.1': 'FluffyStack — це родинний бізнес, який почався з простої любові до млинців.',
        'about.content.2': 'Ми віримо, що кожен млинець повинен бути ідеальним поєднанням смаку та текстури.',
        'about.content.3': 'Наша мета — ділитися найкращими рецептами з усім світом.',
        'about.mission': 'Наша місія',
        'about.mission.text': 'Робити найкращі млинці доступними для кожного.',
        'about.values': 'Наші цінності',
        'about.value.quality': 'Якість',
        'about.value.quality.desc': 'Ми використовуємо тільки найкращі інгредієнти',
        'about.value.tradition': 'Традиція',
        'about.value.tradition.desc': 'Поєднуємо класичні рецепти з сучасними техніками',
        'about.value.family': 'Родина',
        'about.value.family.desc': 'Кожен рецепт створений з любов\'ю для сім\'ї',

        // Млинці (pancakes.html)
        'pancakes.title': 'Наші рецепти млинців',
        'pancakes.page.title': 'Колекція рецептів',
        'pancakes.subtitle': 'Відкрийте для себе різноманітність смаків',
        'pancakes.filter.all': 'Всі',
        'pancakes.filter.sweet': 'Солодкі',
        'pancakes.filter.savory': 'Солоні',
        'pancakes.filter.vegan': 'Веганські',
        'pancakes.difficulty.easy': 'Легко',
        'pancakes.difficulty.medium': 'Середньо',
        'pancakes.difficulty.hard': 'Складно',
        'pancakes.time': 'Час',
        'pancakes.servings': 'Порцій',
        'pancakes.ingredients': 'Інгредієнти',
        'pancakes.instructions': 'Інструкції',
        'pancakes.view.recipe': 'Переглянути рецепт',

        // Контакты (contact_us.html)
        'contact.title': 'Зв\'яжіться з нами',
        'contact.subtitle': 'Якщо у вас є питання, пропозиції або відгуки, зв\'яжіться з нами!',
        'contact.form.name': 'Ім\'я',
        'contact.form.email': 'Email',
        'contact.form.country': 'Країна',
        'contact.form.source': 'Як ви про нас дізналися?',
        'contact.form.message': 'Повідомлення',
        'contact.form.submit': 'Відправити',

        // Рецепты
        'recipe.banana.title': 'Бананові млинці',
        'recipe.banana.description': 'Ніжні та ароматні млинці з бананом',
        'recipe.nutty.title': 'Горіхові млинці',
        'recipe.nutty.description': 'Хрусткі млинці з горіхами',
        'recipe.classic.title': 'Класичні млинці',
        'recipe.classic.description': 'Традиційний рецепт млинців',

        // Форма валидации
        'form.name.required': 'Будь ласка, введіть ім\'я',
        'form.name.minlength': 'Мінімум 2 символи',
        'form.email.required': 'Будь ласка, введіть email',
        'form.email.invalid': 'Невірний формат email',
        'form.source.required': 'Будь ласка, оберіть варіант',
        'form.country.required': 'Будь ласка, оберіть країну',
        'form.message.required': 'Будь ласка, введіть повідомлення',
        'form.message.minlength': 'Мінімум 10 символів',
        'form.success': 'Форму успішно відправлено!',

        // Общие элементы
        'button.learn.more': 'Дізнатися більше',
        'button.back': 'Назад',
        'button.next': 'Далі',
        'loading': 'Завантаження...',
        'copyright': '© 2025 Buliukin Vladimir. Всі права захищені.'
    },

    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.pancakes': 'Pancakes',
        'nav.contact': 'Contact',

        // Home page (index.html)
        'home.title': 'FluffyStack - World\'s Best Pancakes',
        'home.subtitle': 'Discover the world of delicious pancakes',
        'home.hero.title': 'Welcome to FluffyStack',
        'home.hero.subtitle': 'Where every pancake is a masterpiece',
        'home.cta': 'View Recipes',
        'home.featured': 'Featured Recipes',
        'home.theme.toggle': 'Toggle Theme',
        'home.why.us': 'Why Us?',
        'home.newsletter': 'Newsletter',
        'home.newsletter.text': 'Get the best recipes delivered to your inbox',
        'home.newsletter.email': 'Enter your email',
        'home.newsletter.subscribe': 'Subscribe',

        // About us (about.html)
        'about.title': 'About Us',
        'about.page.title': 'Our Story',
        'about.subtitle': 'The FluffyStack Story',
        'about.content.1': 'FluffyStack is a family business that started with a simple love for pancakes.',
        'about.content.2': 'We believe every pancake should be the perfect combination of taste and texture.',
        'about.content.3': 'Our goal is to share the best recipes with the world.',
        'about.mission': 'Our Mission',
        'about.mission.text': 'To make the best pancakes accessible to everyone.',
        'about.values': 'Our Values',
        'about.value.quality': 'Quality',
        'about.value.quality.desc': 'We use only the finest ingredients',
        'about.value.tradition': 'Tradition',
        'about.value.tradition.desc': 'Combining classic recipes with modern techniques',
        'about.value.family': 'Family',
        'about.value.family.desc': 'Every recipe is made with love for the family',

        // Pancakes (pancakes.html)
        'pancakes.title': 'Our Pancake Recipes',
        'pancakes.page.title': 'Recipe Collection',
        'pancakes.subtitle': 'Discover a variety of flavors',
        'pancakes.filter.all': 'All',
        'pancakes.filter.sweet': 'Sweet',
        'pancakes.filter.savory': 'Savory',
        'pancakes.filter.vegan': 'Vegan',
        'pancakes.difficulty.easy': 'Easy',
        'pancakes.difficulty.medium': 'Medium',
        'pancakes.difficulty.hard': 'Hard',
        'pancakes.time': 'Time',
        'pancakes.servings': 'Servings',
        'pancakes.ingredients': 'Ingredients',
        'pancakes.instructions': 'Instructions',
        'pancakes.view.recipe': 'View Recipe',

        // Contact (contact_us.html)
        'contact.title': 'Contact Us',
        'contact.subtitle': 'If you have any questions, suggestions, or feedback, feel free to reach out to us!',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.country': 'Country',
        'contact.form.source': 'How did you hear about us?',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Submit',

        // Recipes
        'recipe.banana.title': 'Banana Pancakes',
        'recipe.banana.description': 'Fluffy and aromatic banana pancakes',
        'recipe.nutty.title': 'Nutty Pancakes',
        'recipe.nutty.description': 'Crunchy pancakes with nuts',
        'recipe.classic.title': 'Classic Pancakes',
        'recipe.classic.description': 'Traditional pancake recipe',

        // Form validation
        'form.name.required': 'Please enter your name',
        'form.name.minlength': 'Minimum 2 characters',
        'form.email.required': 'Please enter your email',
        'form.email.invalid': 'Invalid email format',
        'form.source.required': 'Please select an option',
        'form.country.required': 'Please select your country',
        'form.message.required': 'Please enter a message',
        'form.message.minlength': 'Minimum 10 characters',
        'form.success': 'Form submitted successfully!',

        // Common elements
        'button.learn.more': 'Learn More',
        'button.back': 'Back',
        'button.next': 'Next',
        'loading': 'Loading...',
        'copyright': '© 2025 Buliukin Vladimir. All rights reserved.'
    }
};

export class I18n {
    private currentLocale: string;

    constructor() {
        this.currentLocale = this.getStoredLocale() || 'uk';
        this.init();
    }

    private getStoredLocale(): string | null {
        return localStorage.getItem('fluffystack-locale');
    }

    private setStoredLocale(locale: string): void {
        localStorage.setItem('fluffystack-locale', locale);
    }

    setLocale(locale: string): void {
        if (locale in translations) {
            this.currentLocale = locale;
            this.setStoredLocale(locale);
            this.updatePageContent();
            this.updateActiveLanguageButton();
            this.updateDocumentLang();
            this.updateFormValidation();
        }
    }

    getLocale(): string {
        return this.currentLocale;
    }

    t(key: string): string {
        return translations[this.currentLocale]?.[key] || key;
    }

    private init(): void {
        this.addLanguageSwitcher();
        this.updatePageContent();
        this.updateDocumentLang();
    }

    private addLanguageSwitcher(): void {
        // Проверяем, есть ли уже переключатель
        if (document.querySelector('.language-switcher')) return;

        // Создаем переключатель
        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';
        switcher.innerHTML = `
            <button class="lang-btn" data-lang="uk">УК</button>
            <button class="lang-btn" data-lang="en">EN</button>
        `;

        // Ищем лучшее место для размещения
        const navTop = document.querySelector('.nav-top');
        const navLinks = document.querySelector('.nav-links');

        if (navLinks) {
            // Добавляем в конец списка навигации
            const li = document.createElement('li');
            li.appendChild(switcher);
            navLinks.appendChild(li);
        } else if (navTop) {
            // Если нет nav-links, добавляем прямо в nav-top
            navTop.appendChild(switcher);
        }

        // Добавляем обработчики событий
        switcher.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target as HTMLButtonElement;
                const lang = target.dataset.lang;
                if (lang) {
                    this.setLocale(lang);
                }
            });
        });

        this.updateActiveLanguageButton();
    }

    private updateActiveLanguageButton(): void {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            const btnElement = btn as HTMLButtonElement;
            if (btnElement.dataset.lang === this.currentLocale) {
                btn.classList.add('active');
            }
        });
    }

    private updateDocumentLang(): void {
        document.documentElement.setAttribute('lang', this.currentLocale);
    }

    private updatePageContent(): void {
        // Обновляем элементы с data-i18n атрибутом
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (key) {
                const htmlElement = element as HTMLElement;
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    (element as HTMLInputElement).placeholder = this.t(key);
                } else {
                    htmlElement.textContent = this.t(key);
                }
            }
        });

        // Обновляем title страницы
        this.updatePageMeta();
    }

    private updatePageMeta(): void {
        const pathname = window.location.pathname;
        const page = pathname.substring(pathname.lastIndexOf('/') + 1).replace('.html', '') || 'index';

        const titles: Record<string, string> = {
            'index': this.t('home.title'),
            'about': this.t('about.title') + ' - FluffyStack',
            'pancakes': this.t('pancakes.title') + ' - FluffyStack',
            'contact_us': this.t('contact.title') + ' - FluffyStack'
        };

        if (titles[page]) {
            document.title = titles[page];
        }
    }

    private updateFormValidation(): void {
        // Уведомляем о смене языка для обновления валидации
        const event = new CustomEvent('localeChanged', {
            detail: { locale: this.currentLocale }
        });
        document.dispatchEvent(event);
    }
}

export const i18n = new I18n();

// Экспортируем для глобального использования
(window as any).i18n = i18n;
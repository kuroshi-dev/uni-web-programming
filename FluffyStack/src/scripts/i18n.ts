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
        'home.hero.title': 'Ласкаво просимо до Fluffy Stack',
        'home.hero.subtitle': 'Ваш пункт призначення для смачних рецептів млинців та цін!',
        'home.cta': 'Переглянути рецепти',
        'home.featured': 'Рекомендовані рецепти',
        'home.theme.toggle': 'Перемкнути тему',
        'home.why.us': 'Чому ми?',
        'home.newsletter': 'Підписатися на новини',
        'home.newsletter.text': 'Отримуйте найкращі рецепти прямо на пошту',
        'home.newsletter.email': 'Введіть ваш email',
        'home.newsletter.subscribe': 'Підписатися',
        'home.featured.title': 'Рекомендовані рецепти',
        'home.featured.subtitle': 'Досліджуйте наші найкращі рецепти млинців, улюблені нашою спільнотою',
        'home.whyus.title': 'Чому варто обрати Fluffy Stack?',
        'home.whyus.subtitle': 'Відкрийте переваги використання Fluffy Stack для ваших потреб у млинцях.',
        'home.features.quick.title': 'Швидкі рецепти',
        'home.features.quick.description': 'Більшість рецептів займають менше 30 хвилин',
        'home.features.nutrition.title': 'Інформація про харчування',
        'home.features.nutrition.description': 'Детальна інформація про харчування для кожного рецепта',
        'home.features.portions.title': 'Гнучкі порції',
        'home.features.portions.description': 'Легко регулювати розміри порцій',
        'home.newsletter.title': 'Залишайтеся в курсі',
        'home.newsletter.subtitle': 'Підпишіться на нашу розсилку для отримання нових рецептів та оновлень',
        'home.newsletter.placeholder': 'Введіть ваш email',
        'home.newsletter.button': 'Підписатися',
        'home.testimonials.title': 'Що говорять наші користувачі',
        'home.testimonials.user1.name': 'Світлана Л.',
        'home.testimonials.user1.role': 'Домашня кухарка',
        'home.testimonials.user1.quote': 'Приготувавши це один раз, ви ніколи не забудете.',
        'home.testimonials.user1.cite': '- Світлана Л.',
        'home.testimonials.user2.name': 'Джон Д.',
        'home.testimonials.user2.role': 'Шеф-кухар',
        'home.testimonials.user2.quote': 'Прості інструкції та дивовижні результати щоразу.',
        'home.testimonials.user2.cite': '- Джон Д.',
        'home.testimonials.user3.name': 'Анна К.',
        'home.testimonials.user3.role': 'Фуд-блогерка',
        'home.testimonials.user3.quote': 'Моя родина обожнює ці рецепти млинців!',
        'home.testimonials.user3.cite': '- Анна К.',
        'footer.copyright': '© 2025 Володимир Булюкін. Всі права захищені.',

        // О нас (about.html)
        'about.title': 'Про нас',
        'about.page.title': 'Наша історія',
        'about.subtitle': 'Історія FluffyStack',
        'about.content.1': 'FluffyStack — це родинний бізнес, який почався з простої любови до млинців.',
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

        // Рецепты - детальная информация
        'recipe.prep.time': 'Підготовка',
        'recipe.cook.time': 'Приготування',
        'recipe.total.time': 'Загальний час',
        'recipe.servings': 'Порцій',
        'recipe.calories': 'ккал',
        'recipe.ingredients': 'Інгредієнти',
        'recipe.instructions': 'Інструкції',
        'recipe.view': 'Переглянути',
        'recipe.portions': 'порцій',

        // Конкретные рецепты
        'recipe.chocolate_chip_pancakes.title': 'Млинці з шоколадною крихтою',
        'recipe.chocolate_chip_pancakes.description': 'Пухкі млинці з шоколадною крихтою, ідеальні для солодкого сніданку.',

        'recipe.blueberry_pancakes.title': 'Чорничні млинці',
        'recipe.blueberry_pancakes.description': 'Легкі та пухкі млинці зі свіжою чорницею, класичний фаворит.',

        'recipe.buttermilk_pancakes.title': 'Млинці на пахті',
        'recipe.buttermilk_pancakes.description': 'Класичні млинці на пахті, які є легкими, пухкими і ідеальними для будь-якого сніданку.',

        'recipe.banana_pancakes.title': 'Бананові млинці',
        'recipe.banana_pancakes.description': 'Смачні млинці зі стиглими бананами, ідеальні для ситного сніданку.',

        'recipe.fluffy_japanese_pancakes.title': 'Пухкі японські млинці',
        'recipe.fluffy_japanese_pancakes.description': 'Легкі та повітряні млинці в японському стилі, які є товстими та пухкими.',

        'recipe.blinis.title': 'Блінчики',
        'recipe.blinis.description': 'Дріжджові млинці зі Східної Європи, особливо з України, традиційно приготовані з любов\'ю.',

        // Інгредієнти
        'ingredient.flour': 'борошно',
        'ingredient.all_purpose_flour': 'борошно вищого сорту',
        'ingredient.sugar': 'цукор',
        'ingredient.baking_powder': 'розпушувач',
        'ingredient.baking_soda': 'сода',
        'ingredient.salt': 'сіль',
        'ingredient.milk': 'молоко',
        'ingredient.buttermilk': 'пахта',
        'ingredient.egg': 'яйце',
        'ingredient.eggs': 'яйця',
        'ingredient.eggs_separated': 'яйця, розділені',
        'ingredient.melted_butter': 'розтоплене масло',
        'ingredient.butter': 'масло',
        'ingredient.chocolate_chips': 'шоколадна крихта',
        'ingredient.blueberries': 'свіжа чорниця',
        'ingredient.banana_mashed': 'розтертий банан',
        'ingredient.vanilla_extract': 'ванільний екстракт',
        'ingredient.cream_of_tartar': 'винний камінь',

        // Инструкции
        'instruction.mix_dry': 'У мисці змішайте борошно, цукор, розпушувач і сіль.',
        'instruction.whisk_wet': 'В іншій мисці збийте молоко, яйце і розтоплене масло.',
        'instruction.combine_ingredients': 'Поєднайте вологі та сухі інгредієнти до однорідності.',
        'instruction.fold_additions': 'Обережно додайте',
        'instruction.heat_skillet': 'Розігрійте антипригарну сковороду на середньому вогні.',
        'instruction.pour_batter': 'Налийте 1/4 склянки тіста для кожного млинця.',
        'instruction.cook_flip': 'Готуйте до появи бульбашок, потім переверніть і готуйте до золотистого кольору.',
        'instruction.serve': 'Подавайте з сиропом',

        // Бейджи
        'badge.popular': 'Популярне',
        'badge.new': 'Нове',
        'badge.trending': 'Тренд',

        // Хэштеги (можно оставить английскими или перевести)
        'hashtag.chocolate': '#шоколад',
        'hashtag.pancakes': '#млинці',
        'hashtag.sweet': '#солодке',
        'hashtag.blueberry': '#чорниця',
        'hashtag.breakfast': '#сніданок',
        'hashtag.buttermilk': '#пахта',
        'hashtag.classic': '#класика',
        'hashtag.banana': '#банан',
        'hashtag.fluffy': '#пухкі',
        'hashtag.japanese': '#японські',
        'hashtag.airy': '#повітряні',
        'hashtag.blinis': '#блінчики',
        'hashtag.traditional': '#традиційні',
        'hashtag.yeasted': '#дріжджові',
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
        'home.hero.title': 'Welcome to Fluffy Stack',
        'home.hero.subtitle': 'Your destination for delicious pancake recipes and prices!',
        'home.cta': 'View Recipes',
        'home.featured': 'Featured Recipes',
        'home.theme.toggle': 'Toggle Theme',
        'home.why.us': 'Why Us?',
        'home.newsletter': 'Newsletter',
        'home.newsletter.text': 'Get the best recipes delivered to your inbox',
        'home.newsletter.email': 'Enter your email',
        'home.newsletter.subscribe': 'Subscribe',
        'home.featured.title': 'Featured Recipes',
        'home.featured.subtitle': 'Explore our top pancake recipes loved by our community',
        'home.whyus.title': 'Why Choose Fluffy Stack?',
        'home.whyus.subtitle': 'Discover the benefits of using Fluffy Stack for your pancake needs.',
        'home.features.quick.title': 'Quick Recipes',
        'home.features.quick.description': 'Most recipes take less than 30 minutes',
        'home.features.nutrition.title': 'Nutritional Info',
        'home.features.nutrition.description': 'Detailed nutritional information for each recipe',
        'home.features.portions.title': 'Flexible Portions',
        'home.features.portions.description': 'Easy to adjust serving sizes',
        'home.newsletter.title': 'Stay Updated',
        'home.newsletter.subtitle': 'Subscribe to our newsletter for new recipes and updates',
        'home.newsletter.placeholder': 'Enter your email',
        'home.newsletter.button': 'Subscribe',
        'home.testimonials.title': 'What Our Users Say',
        'home.testimonials.user1.name': 'Svetlana L.',
        'home.testimonials.user1.role': 'Home Cook',
        'home.testimonials.user1.quote': 'Once you cook it, you\'ll never forget it.',
        'home.testimonials.user1.cite': '- Svetlana L.',
        'home.testimonials.user2.name': 'John D.',
        'home.testimonials.user2.role': 'Chef',
        'home.testimonials.user2.quote': 'Simple instructions and amazing results every time.',
        'home.testimonials.user2.cite': '- John D.',
        'home.testimonials.user3.name': 'Anna K.',
        'home.testimonials.user3.role': 'Food Blogger',
        'home.testimonials.user3.quote': 'My family loves these pancake recipes!',
        'home.testimonials.user3.cite': '- Anna K.',
        'footer.copyright': '© 2025 Vladimir Buliukin. All rights reserved.',

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

        // Recipes - detailed information
        'recipe.prep.time': 'Preparation',
        'recipe.cook.time': 'Cooking',
        'recipe.total.time': 'Total',
        'recipe.servings': 'Servings',
        'recipe.calories': 'kcal',
        'recipe.ingredients': 'Ingredients',
        'recipe.instructions': 'Instructions',
        'recipe.view': 'View',
        'recipe.portions': 'portions',

        // Specific recipes
        'recipe.chocolate_chip_pancakes.title': 'Chocolate Chip Pancakes',
        'recipe.chocolate_chip_pancakes.description': 'Fluffy pancakes loaded with chocolate chips, perfect for a sweet breakfast treat.',

        'recipe.blueberry_pancakes.title': 'Blueberry Pancakes',
        'recipe.blueberry_pancakes.description': 'Light and fluffy pancakes bursting with fresh blueberries, a classic favorite.',

        'recipe.buttermilk_pancakes.title': 'Buttermilk Pancakes',
        'recipe.buttermilk_pancakes.description': 'Classic buttermilk pancakes that are light, fluffy, and perfect for any breakfast.',

        'recipe.banana_pancakes.title': 'Banana Pancakes',
        'recipe.banana_pancakes.description': 'Delicious pancakes made with ripe bananas, perfect for a hearty breakfast.',

        'recipe.fluffy_japanese_pancakes.title': 'Fluffy Japanese Pancakes',
        'recipe.fluffy_japanese_pancakes.description': 'Light and airy Japanese-style pancakes that are thick and fluffy, a delightful treat.',

        'recipe.blinis.title': 'Blinis',
        'recipe.blinis.description': 'Yeasted pancakes from Eastern Europe, specially in Ukraine, traditionally made with love.',

        // Ingredients
        'ingredient.flour': 'flour',
        'ingredient.all_purpose_flour': 'all-purpose flour',
        'ingredient.sugar': 'sugar',
        'ingredient.baking_powder': 'baking powder',
        'ingredient.baking_soda': 'baking soda',
        'ingredient.salt': 'salt',
        'ingredient.milk': 'milk',
        'ingredient.buttermilk': 'buttermilk',
        'ingredient.egg': 'egg',
        'ingredient.eggs': 'eggs',
        'ingredient.eggs_separated': 'eggs, separated',
        'ingredient.melted_butter': 'melted butter',
        'ingredient.butter': 'butter',
        'ingredient.chocolate_chips': 'chocolate chips',
        'ingredient.blueberries': 'fresh blueberries',
        'ingredient.banana_mashed': 'ripe banana, mashed',
        'ingredient.vanilla_extract': 'vanilla extract',
        'ingredient.cream_of_tartar': 'cream of tartar',

        // Instructions
        'instruction.mix_dry': 'In a bowl, mix flour, sugar, baking powder, and salt.',
        'instruction.whisk_wet': 'In another bowl, whisk milk, egg, and melted butter.',
        'instruction.combine_ingredients': 'Combine wet and dry ingredients until just mixed.',
        'instruction.fold_additions': 'Gently fold in',
        'instruction.heat_skillet': 'Heat a non-stick skillet over medium heat.',
        'instruction.pour_batter': 'Pour 1/4 cup batter for each pancake.',
        'instruction.cook_flip': 'Cook until bubbles form, then flip and cook until golden.',
        'instruction.serve': 'Serve with syrup',

        // Badges
        'badge.popular': 'Popular',
        'badge.new': 'New',
        'badge.trending': 'Trending',

        // Hashtags
        'hashtag.chocolate': '#chocolate',
        'hashtag.pancakes': '#pancakes',
        'hashtag.sweet': '#sweet',
        'hashtag.blueberry': '#blueberry',
        'hashtag.breakfast': '#breakfast',
        'hashtag.buttermilk': '#buttermilk',
        'hashtag.classic': '#classic',
        'hashtag.banana': '#banana',
        'hashtag.fluffy': '#fluffy',
        'hashtag.japanese': '#japanese',
        'hashtag.airy': '#airy',
        'hashtag.blinis': '#blinis',
        'hashtag.traditional': '#traditional',
        'hashtag.yeasted': '#yeasted',
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
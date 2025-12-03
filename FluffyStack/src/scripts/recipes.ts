import './slides.js';
import { i18n } from './i18n.js';

const recipes: Record<string, any> = {
    chocolate_chip_pancakes: {
        titleKey: "recipe.chocolate_chip_pancakes.title",
        descriptionKey: "recipe.chocolate_chip_pancakes.description",
        image: "/src/assets/cards/chocolate-chip-pancakes.jpg",
        prepTime: "10 mins",
        cookTime: "15 mins",
        totalTime: "25 mins",
        servings: 4,
        calories: 350,
        badges: ["Popular"],
        hashtagKeys: ["hashtag.chocolate", "hashtag.pancakes", "hashtag.sweet"],
        video: "https://www.youtube.com/watch?v=nP02Dn4WTBU",
        ingredientKeys: [
            "1 cup all-purpose flour",
            "2 tablespoons sugar",
            "1 tablespoon baking powder",
            "1/2 teaspoon salt",
            "1 cup milk",
            "1 large egg",
            "2 tablespoons melted butter",
            "1/2 cup chocolate chips"
        ],
        instructionKeys: [
            "instruction.mix_dry",
            "instruction.whisk_wet",
            "instruction.combine_ingredients",
            "Fold in chocolate chips.",
            "instruction.heat_skillet",
            "instruction.pour_batter",
            "instruction.cook_flip",
            "Serve with syrup and extra chocolate chips."
        ]
    },
    blueberry_pancakes: {
        titleKey: "recipe.blueberry_pancakes.title",
        descriptionKey: "recipe.blueberry_pancakes.description",
        image: "/src/assets/cards/blueberry-pancakes.jpg",
        prepTime: "10 mins",
        cookTime: "15 mins",
        totalTime: "25 mins",
        servings: 4,
        calories: 300,
        badges: [],
        hashtagKeys: ["hashtag.blueberry", "hashtag.pancakes", "hashtag.breakfast"],
        video: "https://www.youtube.com/watch?v=LU_uNGHUlgA",
        ingredientKeys: [
            "1 cup all-purpose flour",
            "2 tablespoons sugar",
            "1 tablespoon baking powder",
            "1/2 teaspoon salt",
            "1 cup milk",
            "1 large egg",
            "2 tablespoons melted butter",
            "1/2 cup fresh blueberries"
        ],
        instructionKeys: [
            "instruction.mix_dry",
            "instruction.whisk_wet",
            "instruction.combine_ingredients",
            "Gently fold in blueberries.",
            "instruction.heat_skillet",
            "instruction.pour_batter",
            "instruction.cook_flip",
            "Serve with syrup and extra blueberries."
        ]
    },
    buttermilk_pancakes: {
        titleKey: "recipe.buttermilk_pancakes.title",
        descriptionKey: "recipe.buttermilk_pancakes.description",
        image: "/src/assets/cards/buttermilk-pancakes.jpg",
        prepTime: "10 mins",
        cookTime: "15 mins",
        totalTime: "25 mins",
        servings: 4,
        calories: 320,
        badges: [],
        hashtagKeys: ["hashtag.buttermilk", "hashtag.pancakes", "hashtag.classic"],
        video: "https://www.youtube.com/watch?v=zrDuoOJsyGM",
        ingredientKeys: [
            "1 cup all-purpose flour",
            "2 tablespoons sugar",
            "1 tablespoon baking powder",
            "1/2 teaspoon baking soda",
            "1/2 teaspoon salt",
            "1 cup buttermilk",
            "1 large egg",
            "2 tablespoons melted butter"
        ],
        instructionKeys: [
            "In a bowl, mix flour, sugar, baking powder, baking soda, and salt.",
            "instruction.whisk_wet",
            "instruction.combine_ingredients",
            "instruction.heat_skillet",
            "instruction.pour_batter",
            "instruction.cook_flip",
            "Serve with syrup and butter."
        ]
    },
    banana_pancakes: {
        titleKey: "recipe.banana_pancakes.title",
        descriptionKey: "recipe.banana_pancakes.description",
        image: "/src/assets/cards/banana-pancake.avif",
        prepTime: "10 mins",
        cookTime: "15 mins",
        totalTime: "25 mins",
        servings: 4,
        calories: 330,
        badges: [],
        hashtagKeys: ["hashtag.banana", "hashtag.pancakes", "hashtag.breakfast"],
        video: "https://www.youtube.com/watch?v=N1T1uNmSnOk",
        ingredientKeys: [
            "1 cup all-purpose flour",
            "2 tablespoons sugar",
            "1 tablespoon baking powder",
            "1/2 teaspoon salt",
            "1 cup milk",
            "1 large egg",
            "2 tablespoons melted butter",
            "1 ripe banana, mashed"
        ],
        instructionKeys: [
            "instruction.mix_dry",
            "In another bowl, whisk milk, egg, melted butter, and mashed banana.",
            "instruction.combine_ingredients",
            "instruction.heat_skillet",
            "instruction.pour_batter",
            "instruction.cook_flip",
            "Serve with syrup and sliced bananas."
        ]
    },
    fluffy_japanese_pancakes: {
        titleKey: "recipe.fluffy_japanese_pancakes.title",
        descriptionKey: "recipe.fluffy_japanese_pancakes.description",
        image: "/src/assets/cards/fluffy-japanese-pancakes.jpg",
        prepTime: "15 mins",
        cookTime: "20 mins",
        totalTime: "35 mins",
        servings: 4,
        calories: 400,
        badges: [],
        hashtagKeys: ["hashtag.fluffy", "hashtag.japanese", "hashtag.pancakes", "hashtag.airy", "hashtag.breakfast"],
        video: ["https://www.youtube.com/watch?v=tBTNMo77h2Q", "https://youtu.be/y2AYFpYn8ws?si=fVGXvDNDaCgIRopN"],
        ingredientKeys: [
            "1 cup all-purpose flour",
            "2 tablespoons sugar",
            "1 teaspoon baking powder",
            "1/2 teaspoon baking soda",
            "1/4 teaspoon salt",
            "3/4 cup buttermilk",
            "2 large eggs, separated",
            "1 teaspoon vanilla extract",
            "2 tablespoons melted butter",
            "1/4 teaspoon cream of tartar"
        ],
        instructionKeys: [
            "In a bowl, mix flour, sugar, baking powder, baking soda, and salt.",
            "In another bowl, whisk buttermilk, egg yolks, vanilla extract, and melted butter.",
            "instruction.combine_ingredients",
            "In a separate bowl, beat egg whites with cream of tartar until stiff peaks form.",
            "Gently fold egg whites into the batter in three additions.",
            "Heat a non-stick skillet over low heat and grease lightly.",
            "Use a ring mold to shape pancakes and pour batter into the mold.",
            "Cover and cook for about 4-5 minutes, then flip and cook for another 4-5 minutes.",
            "Serve with syrup, butter, and fresh fruit."
        ]
    },
    blinis: {
        titleKey: "recipe.blinis.title",
        descriptionKey: "recipe.blinis.description",
        image: "/src/assets/cards/blinis.jpg",
        prepTime: "10 mins",
        cookTime: "15 mins",
        totalTime: "25 mins",
        servings: 4,
        calories: 330,
        badges: ["Popular", "New"],
        hashtagKeys: ["hashtag.blinis", "hashtag.pancakes", "hashtag.traditional", "hashtag.yeasted"],
        video: "https://www.youtube.com/watch?v=E_cohB81wL8",
        ingredientKeys: [
            "1 cup all-purpose flour",
            "1 cup milk",
            "1 large egg",
            "1 tablespoon sugar",
            "1/2 teaspoon salt"
        ],
        instructionKeys: [
            "In a bowl, mix flour, sugar, and salt.",
            "In another bowl, whisk milk and egg.",
            "instruction.combine_ingredients",
            "instruction.heat_skillet",
            "instruction.pour_batter",
            "instruction.cook_flip",
            "Serve with sour cream and caviar."
        ]
    },
};

function getLocalizedText(key: string): string {
    if (key.startsWith('hashtag.') || key.startsWith('recipe.') || key.startsWith('instruction.') || key.startsWith('ingredient.')) {
        return i18n.t(key);
    }
    return key;
}

function getLocalizedBadge(badge: string): string {
    const badgeKey = `badge.${badge.toLowerCase()}`;
    return i18n.t(badgeKey);
}

let currentActiveRecipeKey: string | null = null;

let displayedRecipes: Set<string> = new Set();

function openFormPopup(event: Event) {
    const popup = document.getElementById("recipe-view-popup");
    const recipeDetails = document.getElementById("recipe-details");
    const recipeKey = (event.target as HTMLElement).id.replace('view-recipe-', '');
    const recipe = recipes[recipeKey];

    currentActiveRecipeKey = recipeKey;

    if (popup && recipeDetails) {
        popup.style.display = "block";
        recipeDetails.innerHTML = createRecipeDetails(recipe);

        setTimeout(() => {
            const slides = document.querySelectorAll('.slide');
            const navButtons = document.querySelectorAll('.prev, .next');

            if (slides.length <= 1) {
                navButtons.forEach(btn => (btn as HTMLElement).style.display = 'none');
            } else {
                navButtons.forEach(btn => (btn as HTMLElement).style.display = 'block');
            }

            if (typeof (window as any).showSlides === 'function') {
                (window as any).slideIndex = 1;
                (window as any).showSlides(1);
            }
        }, 100);
    }
}

function createRecipeDetails(recipe: any): string {
    const getEmbedUrl = (url: string): string => {
        if (url.includes('watch?v=')) {
            return url.replace('watch?v=', 'embed/');
        } else if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1].split('?')[0];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    };

    const normalizeToArray = (item: string | string[]): string[] => {
        if (!item) return [];
        if (Array.isArray(item)) return item.filter(i => i.trim() !== '');
        return typeof item === 'string' && item.trim() !== '' ? [item] : [];
    };

    const videos = normalizeToArray(recipe.video);
    const images = normalizeToArray(recipe.image);

    let mediaSlides = '';

    videos.forEach(videoUrl => {
        mediaSlides += `<iframe class="recipe-video slide" src="${getEmbedUrl(videoUrl)}" frameborder="0" allowfullscreen></iframe>`;
    });

    images.forEach(imageUrl => {
        mediaSlides += `<img src="${imageUrl}" alt="${getLocalizedText(recipe.titleKey)}" class="recipe-detail-image slide">`;
    });

    return /*html*/ `
        <div class="form-header">
            <h2 class="form-recipe-title">${getLocalizedText(recipe.titleKey)}</h2>
            <button class="close-popup" onclick="closeFormPopup()">&times;</button>
        </div>
        <div class="form-body">
            <div class="media-container">
                ${mediaSlides}
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <div class="form-overview">
                <ul>
                    <li>
                        <img src="/src/assets/icons/prep-time.png" class="icon">
                        <div class="value-container">
                            <label>${i18n.t('recipe.prep.time')}</label>
                            <span class="value">${recipe.prepTime}</span>
                        </div>
                    </li>
                    <li>
                        <img src="/src/assets/icons/cook-time.png" class="icon">
                        <div class="value-container">
                            <label>${i18n.t('recipe.cook.time')}</label>
                            <span class="value">${recipe.cookTime}</span>
                        </div>
                    </li>
                    <li>
                        <img src="/src/assets/icons/time-left.png" class="icon">
                        <div class="value-container">
                            <label>${i18n.t('recipe.total.time')}</label>
                            <span class="value">${recipe.totalTime}</span>
                        </div>
                    </li>
                    <li>
                        <img src="/src/assets/icons/serving.png" class="icon">
                        <div class="value-container">
                            <label>${i18n.t('recipe.servings')}</label>
                            <span class="value">${recipe.servings} ${i18n.t('recipe.portions')}</span>
                        </div>
                    </li>
                    <li>
                        <img src="/src/assets/icons/calories.png" class="icon">
                        <div class="value-container">
                            <label>${i18n.t('recipe.calories')}</label>
                            <span class="value">${recipe.calories}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <p class="form-recipe-description">${getLocalizedText(recipe.descriptionKey)}</p>
        <div class="divider"></div>
        <div class="hashtags-container">
            <ul>
                ${recipe.hashtagKeys.map((tagKey: string) => `<li class="hashtag">${getLocalizedText(tagKey)}</li>`).join('')}
            </ul>
        </div>
        <!-- section tabs -->
        <div class="form-ingredients-instructions">

            <div class="section-tabs">
                <button class="tab-button active" onclick="showRecipeSection('ingredients', this)">${i18n.t('recipe.ingredients')}</button>
                <button class="tab-button" onclick="showRecipeSection('instructions', this)">${i18n.t('recipe.instructions')}</button>
            </div>

            <div class="ingredients-container">
                <h3>${i18n.t('recipe.ingredients')}</h3>
                <ul>
                    ${recipe.ingredientKeys.map((ingKey: string) => `<li>${getLocalizedText(ingKey)}</li>`).join('')}
                </ul>
            </div>

            <div class="instructions-container hidden">
                <h3>${i18n.t('recipe.instructions')}</h3>
                <ol>
                    ${recipe.instructionKeys.map((stepKey: string) => `<li>${getLocalizedText(stepKey)}</li>`).join('')}
                </ol>
            </div>
        </div>
    `;
}

function closeFormPopup() {
    const popup = document.getElementById("recipe-view-popup");
    if (popup) {
        popup.style.display = "none";
    }
    currentActiveRecipeKey = null;
}

function createRecipeCard(recipe: any, key: string): HTMLElement {
    const card = document.createElement('div');
    card.className = 'card';

    let badgesHTML = '';
    if (recipe.badges) {
        badgesHTML = /*html*/`<div class="badge-container">
            ${recipe.badges.map((badge: string) =>
                /*html*/ `<span class="badge ${badge.toLowerCase()}">${getLocalizedBadge(badge)}</span>`).join('')}
        </div>`;
    }

    const getFirstImage = (image: string | string[]): string => {
        if (Array.isArray(image)) return image[0] || '';
        return image || '';
    };

    card.innerHTML = /*html*/ `
        <div class="image-container">
            <img src="${getFirstImage(recipe.image)}" alt="${getLocalizedText(recipe.titleKey)}" class="recipe-image">
            ${badgesHTML}
        </div>
        <div class="card-content">
            <div class="card-title-like">
                <h3 class="recipe-title">${getLocalizedText(recipe.titleKey)}</h3>
                <img src="/src/assets/icons/heart.png" alt ="like-button" class="like-button icon">
            </div>
            <p class="recipe-description">${getLocalizedText(recipe.descriptionKey)}</p>
        
            <ul class="recipe-details">
                <li><button class="view-recipe-button" id="view-recipe-${key}" onclick="openFormPopup(event)">${i18n.t('recipe.view')}</button></li>
                <li class="first-ul"><img src="/src/assets/icons/time-left.png" class="icon"> ${recipe.totalTime} </li>
                <li><img src="/src/assets/icons/serving.png" class="icon"> ${recipe.servings}</li>
                <li><img src="/src/assets/icons/calories.png" class="icon"> ${recipe.calories} ${i18n.t('recipe.calories')}</li>
            </ul>
        </div>
    `;
    return card;
}

function renderRecipes(recipes: Record<string, any>, containerId: string = "dynamic-cards") {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";
    displayedRecipes.clear();

    Object.entries(recipes).forEach(([key, recipe]) => {
        const card = createRecipeCard(recipe, key);
        container.appendChild(card);
        displayedRecipes.add(key);
    });
}

function addRecipe(recipeKey: string, containerId: string = "dynamic-cards") {
    const container = document.getElementById(containerId);
    if (!container || !recipes[recipeKey]) return;

    const card = createRecipeCard(recipes[recipeKey], recipeKey);
    container.appendChild(card);

    displayedRecipes.add(recipeKey);
}

function updateDisplayedRecipes(containerId: string = "dynamic-cards") {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    displayedRecipes.forEach(recipeKey => {
        if (recipes[recipeKey]) {
            const card = createRecipeCard(recipes[recipeKey], recipeKey);
            container.appendChild(card);
        }
    });
}

document.addEventListener('localeChanged', () => {
    updateDisplayedRecipes();

    const popup = document.getElementById("recipe-view-popup");
    if (popup && popup.style.display === "block" && currentActiveRecipeKey) {
        const recipeDetails = document.getElementById("recipe-details");
        if (recipeDetails && recipes[currentActiveRecipeKey]) {
            recipeDetails.innerHTML = createRecipeDetails(recipes[currentActiveRecipeKey]);

            setTimeout(() => {
                const slides = document.querySelectorAll('.slide');
                const navButtons = document.querySelectorAll('.prev, .next');

                if (slides.length <= 1) {
                    navButtons.forEach(btn => (btn as HTMLElement).style.display = 'none');
                } else {
                    navButtons.forEach(btn => (btn as HTMLElement).style.display = 'block');
                }

                if (typeof (window as any).showSlides === 'function') {
                    (window as any).slideIndex = 1;
                    (window as any).showSlides(1);
                }
            }, 100);
        }
    }
});

export {
    recipes,
    createRecipeCard,
    renderRecipes,
    addRecipe,
    openFormPopup,
    closeFormPopup,
    createRecipeDetails,
    updateDisplayedRecipes
};

(window as any).showRecipeSection = function (section: string, btn?: HTMLElement) {
    try {
        const wrapper = btn ? btn.closest('.form-ingredients-instructions') : document.querySelector('.form-ingredients-instructions');
        if (!wrapper) return;
        const ing = wrapper.querySelector('.ingredients-container') as HTMLElement | null;
        const ins = wrapper.querySelector('.instructions-container') as HTMLElement | null;
        if (!ing || !ins) return;

        if (section === 'ingredients') {
            ing.classList.remove('hidden');
            ins.classList.add('hidden');
        } else {
            ins.classList.remove('hidden');
            ing.classList.add('hidden');
        }

        wrapper.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        if (btn) (btn as HTMLElement).classList.add('active');
    } catch (e) {
        // silent
    }
};


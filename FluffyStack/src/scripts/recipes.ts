import './slides.js';

const recipes: Record<string, any> = {
    chocolate_chip_pancakes: {
        title: "Chocolate Chip Pancakes",
        description: "Fluffy pancakes loaded with chocolate chips, perfect for a sweet breakfast treat.",
        image: "/src/assets/cards/chocolate-chip-pancakes.jpg",
        prepTime: "10 mins",
        cookTime: "15 mins",
        totalTime: "25 mins",
        servings: 4,
        calories: 350,
        badges: ["Popular"],
        hashtags: ["#chocolate", "#pancakes", "#sweet"],
        video: "https://www.youtube.com/watch?v=nP02Dn4WTBU",
        ingredients: [
            "1 cup all-purpose flour",
            "2 tablespoons sugar",
            "1 tablespoon baking powder",
            "1/2 teaspoon salt",
            "1 cup milk",
            "1 large egg",
            "2 tablespoons melted butter",
            "1/2 cup chocolate chips"
        ],
        instructions: [
            "In a bowl, mix flour, sugar, baking powder, and salt.",
            "In another bowl, whisk milk, egg, and melted butter.",
            "Combine wet and dry ingredients until just mixed.",
            "Fold in chocolate chips.",
            "Heat a non-stick skillet over medium heat.",
            "Pour 1/4 cup batter for each pancake.",
            "Cook until bubbles form, then flip and cook until golden.",
            "Serve with syrup and extra chocolate chips."
        ]
    },
    blueberry_pancakes: {
        title: "Blueberry Pancakes",
        description: "Light and fluffy pancakes bursting with fresh blueberries, a classic favorite.",
        image: "/src/assets/cards/blueberry-pancakes.jpg",
        prepTime: "10 mins",
        cookTime: "15 mins",
        totalTime: "25 mins",
        servings: 4,
        calories: 300,
        badges: [],
        hashtags: ["#blueberry", "#pancakes", "#breakfast"],
        video: "https://www.youtube.com/watch?v=LU_uNGHUlgA",
        ingredients: [
            "1 cup all-purpose flour",
            "2 tablespoons sugar",
            "1 tablespoon baking powder",
            "1/2 teaspoon salt",
            "1 cup milk",
            "1 large egg",
            "2 tablespoons melted butter",
            "1/2 cup fresh blueberries"
        ],
        instructions: [
            "In a bowl, mix flour, sugar, baking powder, and salt.",
            "In another bowl, whisk milk, egg, and melted butter.",
            "Combine wet and dry ingredients until just mixed.",
            "Gently fold in blueberries.",
            "Heat a non-stick skillet over medium heat.",
            "Pour 1/4 cup batter for each pancake.",
            "Cook until bubbles form, then flip and cook until golden.",
            "Serve with syrup and extra blueberries."
        ]
    },
    buttermilk_pancakes: {
        title: "Buttermilk Pancakes",
        description: "Classic buttermilk pancakes that are light, fluffy, and perfect for any breakfast.",
        image: "/src/assets/cards/buttermilk-pancakes.jpg",
        prepTime: "10 mins",
        cookTime: "15 mins",
        totalTime: "25 mins",
        servings: 4,
        calories: 320,
        badges: [""],
        hashtags: ["#buttermilk", "#pancakes", "#classic"],
        video: "https://www.youtube.com/watch?v=zrDuoOJsyGM",
        ingredients: [
            "1 cup all-purpose flour",
            "2 tablespoons sugar",
            "1 tablespoon baking powder",
            "1/2 teaspoon baking soda",
            "1/2 teaspoon salt",
            "1 cup buttermilk",
            "1 large egg",
            "2 tablespoons melted butter"
        ],
        instructions: [
            "In a bowl, mix flour, sugar, baking powder, baking soda, and salt.",
            "In another bowl, whisk buttermilk, egg, and melted butter.",
            "Combine wet and dry ingredients until just mixed.",
            "Heat a non-stick skillet over medium heat.",
            "Pour 1/4 cup batter for each pancake.",
            "Cook until bubbles form, then flip and cook until golden.",
            "Serve with syrup and butter."
        ]
    },
    banana_pancakes: {
        title: "Banana Pancakes",
        description: "Delicious pancakes made with ripe bananas, perfect for a hearty breakfast.",
        image: "/src/assets/cards/banana-pancake.jpg",
        prepTime: "10 mins",
        cookTime: "15 mins",
        totalTime: "25 mins",
        servings: 4,
        calories: 330,
        badges: [],
        hashtags: ["#banana", "#pancakes", "#breakfast"],
        video: "https://www.youtube.com/watch?v=N1T1uNmSnOk",
        ingredients: [
            "1 cup all-purpose flour",
            "2 tablespoons sugar",
            "1 tablespoon baking powder",
            "1/2 teaspoon salt",
            "1 cup milk",
            "1 large egg",
            "2 tablespoons melted butter",
            "1 ripe banana, mashed"
        ],
        instructions: [
            "In a bowl, mix flour, sugar, baking powder, and salt.",
            "In another bowl, whisk milk, egg, melted butter, and mashed banana.",
            "Combine wet and dry ingredients until just mixed.",
            "Heat a non-stick skillet over medium heat.",
            "Pour 1/4 cup batter for each pancake.",
            "Cook until bubbles form, then flip and cook until golden.",
            "Serve with syrup and sliced bananas."
        ]
    },
    fluffy_japanese_pancakes: {
        title: "Fluffy Japanese Pancakes",
        description: "Light and airy Japanese-style pancakes that are thick and fluffy, a delightful treat.",
        image: "/src/assets/cards/fluffy-japanese-pancakes.jpg",
        prepTime: "15 mins",
        cookTime: "20 mins",
        totalTime: "35 mins",
        servings: 4,
        calories: 400,
        badges: [],
        hashtags: ["#fluffy", "#japanese", "#pancakes"],
        video: ["https://www.youtube.com/watch?v=tBTNMo77h2Q", "https://youtu.be/y2AYFpYn8ws?si=fVGXvDNDaCgIRopN"],
        ingredients: [
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
        instructions: [
            "In a bowl, mix flour, sugar, baking powder, baking soda, and salt.",
            "In another bowl, whisk buttermilk, egg yolks, vanilla extract, and melted butter.",
            "Combine wet and dry ingredients until just mixed.",
            "In a separate bowl, beat egg whites with cream of tartar until stiff peaks form.",
            "Gently fold egg whites into the batter in three additions.",
            "Heat a non-stick skillet over low heat and grease lightly.",
            "Use a ring mold to shape pancakes and pour batter into the mold.",
            "Cover and cook for about 4-5 minutes, then flip and cook for another 4-5 minutes.",
            "Serve with syrup, butter, and fresh fruit."
        ]
    },
    blinis: {
        title: "Blinis",
        description: "Yeasted pancakes from Eastern Europe, specialy in Ukraine, traditionally made with love.",
        image: "/src/assets/cards/blinis.jpg",
        prepTime: "10 mins",
        cookTime: "15 mins",
        totalTime: "25 mins",
        servings: 4,
        calories: 330,
        badges: ["Popular", "New"],
        hashtags: ["#blinis", "#pancakes", "#traditional", "#yeasted"],
        video: "https://www.youtube.com/watch?v=E_cohB81wL8",
        ingredients: [
            "1 cup all-purpose flour",
            "1 cup milk",
            "1 large egg",
            "1 tablespoon sugar",
            "1/2 teaspoon salt",
        ],
        instructions: [
            "In a bowl, mix flour, sugar, and salt.",
            "In another bowl, whisk milk and egg.",
            "Combine wet and dry ingredients until just mixed.",
            "Heat a non-stick skillet over medium heat.",
            "Pour 1/4 cup batter for each pancake.",
            "Cook until bubbles form, then flip and cook until golden.",
            "Serve with sour cream and caviar."
        ]
    },
};

function openFormPopup(event: Event) {
    const popup = document.getElementById("recipe-view-popup");
    const recipeDetails = document.getElementById("recipe-details");
    const recipeKey = (event.target as HTMLElement).id.replace('view-recipe-', '');
    const recipe = recipes[recipeKey];

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
        mediaSlides += `<img src="${imageUrl}" alt="${recipe.title}" class="recipe-detail-image slide">`;
    });

    return /*html*/ `
        <div class="form-header">
            <h2 class="form-recipe-title">${recipe.title}</h2>
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
                            <label>Preparation</label>
                            <span class="value">${recipe.prepTime}</span>
                        </div>
                    </li>
                    <li>
                        <img src="/src/assets/icons/cook-time.png" class="icon">
                        <div class="value-container">
                            <label>Cooking</label>
                            <span class="value">${recipe.cookTime}</span>
                        </div>
                    </li>
                    <li>
                        <img src="/src/assets/icons/time-left.png" class="icon">
                        <div class="value-container">
                            <label>Total</label>
                            <span class="value">${recipe.totalTime}</span>
                        </div>
                    </li>
                    <li>
                        <img src="/src/assets/icons/serving.png" class="icon">
                        <div class="value-container">
                            <label>Servings</label>
                            <span class="value">${recipe.servings} portions</span>
                        </div>
                    </li>
                    <li>
                        <img src="/src/assets/icons/calories.png" class="icon">
                        <div class="value-container">
                            <label>kcal</label>
                            <span class="value">${recipe.calories}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <p class="form-recipe-description">${recipe.description}</p>
        <div class="divider"></div>

        <!-- section tabs -->
        <div class="form-ingredients-instructions">

            <div class="section-tabs">
                <button class="tab-button active" onclick="showRecipeSection('ingredients', this)">Ingredients</button>
                <button class="tab-button" onclick="showRecipeSection('instructions', this)">Instructions</button>
            </div>

            <div class="ingredients-container">
                <h3>Ingredients</h3>
                <ul>
                    ${recipe.ingredients.map((ing: string) => `<li>${ing}</li>`).join('')}
                </ul>
            </div>

            <div class="instructions-container hidden">
                <h3>Instructions</h3>
                <ol>
                    ${recipe.instructions.map((step: string) => `<li>${step}</li>`).join('')}
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
}

function createRecipeCard(recipe: any, key: string): HTMLElement {
    const card = document.createElement('div');
    card.className = 'card';

    let badgesHTML = '';
    if (recipe.badges) {
        badgesHTML = /*html*/`<div class="badge-container">
            ${recipe.badges.map((badge: string) =>
                /*html*/ `<span class="badge ${badge.toLowerCase()}">${badge}</span>`).join('')}
        </div>`;
    }

    const getFirstImage = (image: string | string[]): string => {
        if (Array.isArray(image)) return image[0] || '';
        return image || '';
    };

    card.innerHTML = /*html*/ `
        <div class="image-container">
            <img src="${getFirstImage(recipe.image)}" alt="${recipe.title}" class="recipe-image">
            ${badgesHTML}
        </div>
        <div class="card-content">
            <div class="card-title-like">
                <h3 class="recipe-title">${recipe.title}</h3>
                <img src="/src/assets/icons/heart.png" alt ="like-button" class="like-button icon">
            </div>
            <p class="recipe-description">${recipe.description}</p>
        
            <ul class="recipe-details">
                <li><button class="view-recipe-button" id="view-recipe-${key}" onclick="openFormPopup(event)">View</button></li>
                <li class="first-ul"><img src="/src/assets/icons/time-left.png" class="icon"> ${recipe.totalTime} </li>
                <li><img src="/src/assets/icons/serving.png" class="icon"> ${recipe.servings}</li>
                <li><img src="/src/assets/icons/calories.png" class="icon"> ${recipe.calories} kcal</li>
            </ul>
        </div>
    `;
    return card;
}

function renderRecipes(recipes: Record<string, any>, containerId: string = "dynamic-cards") {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    Object.entries(recipes).forEach(([key, recipe]) => {
        const card = createRecipeCard(recipe, key);
        container.appendChild(card);
    });
}

function addRecipe(recipeKey: string, containerId: string = "dynamic-cards") {
    const container = document.getElementById(containerId);
    if (!container || !recipes[recipeKey]) return;

    const card = createRecipeCard(recipes[recipeKey], recipeKey);
    container.appendChild(card);
}


export {
    recipes,
    createRecipeCard,
    renderRecipes,
    addRecipe,
    openFormPopup,
    closeFormPopup,
    createRecipeDetails
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


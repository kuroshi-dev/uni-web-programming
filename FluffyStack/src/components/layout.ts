export function renderHeader(): string {
    return  /*html*/ `
        <div class="nav-brand">
            <img src="/icons/FluffyStack.svg" alt="Fluffy Stack Logo" class="nav-logo" />
            <a href="/"> Fluffy Stack</a>
            <button id="theme-toggle" class="theme-toggle">
                <img src="/icons/night-mode-off.png" alt="Light Mode" class="icon light-mode-icon">
            </button>
        </div>

        <ul class="nav-links">
            <li><button id="favorites-button"><img src="/src/assets/icons/heart.png" alt="Favorites" class="icon" /></button></li>
            <li><a href="about">About</a></li>
        </ul>
    `;
}

export function renderFooter(): string {
    return /*html*/ `
        <p>&copy; 2025 FluffyStack. All rights reserved.</p>
        <ul class="footer-links">
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
        </ul>
    `;
}

export function initLayout(): void {
    const header = document.getElementById('main-header');
    const footer = document.getElementById('main-footer');

    if (header) {
        header.className = 'nav-top'; // Добавьте класс
        header.innerHTML = renderHeader();
    }
    if (footer) {
        footer.className = 'footer-content'; // Добавьте класс
        footer.innerHTML = renderFooter();
    }
}
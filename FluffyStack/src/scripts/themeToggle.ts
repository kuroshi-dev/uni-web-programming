class ThemeToggler {
    private readonly DARK_THEME = 'dark-theme';
    private readonly LIGHT_ICON = 'src/assets/icons/night-mode-on.png';
    private readonly DARK_ICON = 'src/assets/icons/night-mode-off.png';
    private readonly toggleButton: HTMLButtonElement;
    private readonly themeIcon: HTMLImageElement;

    constructor() {
        this.toggleButton = document.getElementById('theme-toggle') as HTMLButtonElement;
        this.themeIcon = this.toggleButton.querySelector('.theme-icon') as HTMLImageElement;
        this.initTheme();
        this.setupEventListeners();
    }

    private initTheme(): void {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === this.DARK_THEME) {
            document.documentElement.classList.add(this.DARK_THEME);
            document.body.classList.add(this.DARK_THEME);
            this.themeIcon.src = this.DARK_ICON;
        }
    }

    private setupEventListeners(): void {
        this.toggleButton.addEventListener('click', () => this.toggleTheme());
    }

    private toggleTheme(): void {
        const isDarkTheme = document.body.classList.toggle(this.DARK_THEME);
        document.documentElement.classList.toggle(this.DARK_THEME);

        this.themeIcon.src = isDarkTheme ? this.DARK_ICON : this.LIGHT_ICON;

        localStorage.setItem('theme', isDarkTheme ? this.DARK_THEME : 'light-theme');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle') as HTMLButtonElement;
    const themeIcon = themeToggle.querySelector('img') as HTMLImageElement;

    const updateThemeIcon = (isDark: boolean) => {
        if (isDark) {
            themeIcon.src = '/icons/night-mode-on.png';
            themeIcon.alt = 'Dark Mode';
        } else {
            themeIcon.src = '/icons/night-mode-off.png';
            themeIcon.alt = 'Light Mode';
        }
    };

    const isDarkTheme = document.documentElement.classList.contains('dark-theme');
    updateThemeIcon(isDarkTheme);

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark-theme' : 'light-theme');
        updateThemeIcon(isDark);
    });
});

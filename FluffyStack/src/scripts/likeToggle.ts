export class likeToggle {
    private readonly UNLIKED_ICON = 'src/assets/icons/heart.png';
    private readonly LIKED_ICON = 'src/assets/icons/heart-filled.png';
    private readonly likeButton: HTMLImageElement;
    private readonly likeIcon: HTMLImageElement;
    constructor() {
        this.likeButton = document.getElementById('like-button') as HTMLImageElement;
        this.likeIcon = this.likeButton.querySelector('.like-icon') as HTMLImageElement;
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.likeButton.addEventListener('click', this.toggleLike);
    }


    toggleLike(event: Event): void {
        const button = event.currentTarget as HTMLElement;
        const isLiked = button.classList.contains('liked');

        this.updateIconTheme(!isLiked);
    }

    updateIconTheme(isLiked: boolean): void {
        if (isLiked) {
            this.likeButton.classList.add('liked');
            this.likeButton.setAttribute('src', this.LIKED_ICON);
            this.likeButton.setAttribute('alt', 'Unlike');
        } else {
            this.likeButton.classList.remove('liked');
            this.likeButton.setAttribute('src', this.UNLIKED_ICON);
            this.likeButton.setAttribute('alt', 'Like');
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const likeToggleInstance = new likeToggle();
});
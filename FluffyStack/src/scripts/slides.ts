let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n: number) {
    showSlides(slideIndex += n);
}

function currentSlide(n: number) {
    showSlides(slideIndex = n);
}

function showSlides(n: number) {
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>;
    if (slides.length === 0) return;
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    slides.forEach(s => {
        s.style.display = 'none';
        s.classList.remove('active');
    });
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].classList.add('active');
    }
}

export { plusSlides, currentSlide, showSlides };

; (window as any).plusSlides = plusSlides;
; (window as any).currentSlide = currentSlide;
; (window as any).showSlides = showSlides;
; (window as any).slideIndex = slideIndex;
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletter-form') as HTMLFormElement;
    const emailInput = newsletterForm?.querySelector('input[type="email"]') as HTMLInputElement;

    if (newsletterForm && emailInput) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailValue = emailInput.value.trim();

            if (!emailRegex.test(emailValue)) {
                emailInput.setCustomValidity('Будь ласка, введіть коректну email адресу');
                emailInput.reportValidity();
                return;
            }

            const forbiddenCharsRegex = /[<>()[\]\\,;:\s@"]/;
            const localPart = emailValue.split('@')[0];
            
            if (forbiddenCharsRegex.test(localPart.replace(/[._-]/g, ''))) {
                emailInput.setCustomValidity('Email містить заборонені символи');
                emailInput.reportValidity();
                return;
            }
            emailInput.setCustomValidity('');
            
            emailInput.setCustomValidity('Дякуємо за підписку!');
            emailInput.reportValidity();
            
            setTimeout(() => {
                emailInput.setCustomValidity('');
                newsletterForm.reset();
                emailInput.classList.remove('valid', 'invalid');
            }, 2000);
        });

        emailInput.addEventListener('input', () => {
            const emailValue = emailInput.value.trim();
            
            emailInput.setCustomValidity('');
            
            if (emailValue && !emailRegex.test(emailValue)) {
                emailInput.classList.add('invalid');
                emailInput.classList.remove('valid');
            } else if (emailValue) {
                emailInput.classList.remove('invalid');
                emailInput.classList.add('valid');
            } else {
                emailInput.classList.remove('invalid', 'valid');
            }
        });
    }
});
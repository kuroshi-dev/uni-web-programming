import $ from 'jquery';
import 'jquery-validation';
import { i18n } from './i18n.ts';

function updateValidationMessages() {
    const validator = ($("#contactForm") as any).validate();
    if (validator) {
        validator.settings.messages = {
            name: {
                required: i18n.t('form.name.required'),
                minlength: i18n.t('form.name.minlength')
            },
            email: {
                required: i18n.t('form.email.required'),
                email: i18n.t('form.email.invalid')
            },
            source: {
                required: i18n.t('form.source.required')
            },
            country: {
                required: i18n.t('form.country.required')
            },
            message: {
                required: i18n.t('form.message.required'),
                minlength: i18n.t('form.message.minlength')
            }
        };
    }
}

$(() => {
    ($("#contactForm") as any).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            source: {
                required: true
            },
            country: {
                required: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: i18n.t('form.name.required'),
                minlength: i18n.t('form.name.minlength')
            },
            email: {
                required: i18n.t('form.email.required'),
                email: i18n.t('form.email.invalid')
            },
            source: {
                required: i18n.t('form.source.required')
            },
            country: {
                required: i18n.t('form.country.required')
            },
            message: {
                required: i18n.t('form.message.required'),
                minlength: i18n.t('form.message.minlength')
            }
        }
    });

    $(document).on('localeChanged', updateValidationMessages);
});
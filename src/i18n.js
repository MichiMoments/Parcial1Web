import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                translation: {
                    log: "Iniciar sesión",
                    email: "Correo electrónico",
                    password: "Contraseña",
                    running: "Correr",
                    cycling: "Ciclismo",
                    swimming: "Natación",
                    rS: 'Sesión de Correr',
                    cS: 'Sesión de Ciclismo',
                    sS: 'Sesión de Natación',
                    rD: 'Correr rápido',
                    cD: 'Montar bicicleta',
                    sD: 'Nadar descanso',
                    submit: 'Siguiente'
                }
            },
            en: {
                translation: {
                    log: "Log in",
                    email: "Email",
                    password: "Password",
                    running: "Running",
                    cycling: "Cycling",
                    swimming: "Swimming",
                    cS: 'Cycling Session',
                    rS: 'Running Session',
                    sS: 'Swimming Session',
                    cD: 'Ride a bike',
                    rD: 'Run fast',
                    sD: 'Swim rest',
                    submit: 'Submit'
                }
            }
        },
        lng: "es",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
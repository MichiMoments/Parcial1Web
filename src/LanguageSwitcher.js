import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="d-flex justify-content-between align-items-center border rounded" style={{ backgroundColor: '#f8f9fa', width: '200px' }}>
            <button
                onClick={() => changeLanguage('en')}
                className="btn btn-outline-primary btn-md"
            >
                English
            </button>
            <button
                onClick={() => changeLanguage('es')}
                className="btn btn-outline-primary btn-md"
            >
                Español
            </button>
        </div>
    );
};

export default LanguageSwitcher;
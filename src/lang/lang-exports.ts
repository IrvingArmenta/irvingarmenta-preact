import en from './en.json';
import es from './es.json';
import ja from './ja.json';

export const LangJson = {
    en,
    es,
    ja,
};

export type LangCodeTypes = 'en' | 'es' | 'ja';

export interface LangObject {
    home: {
        msg: string;
    },
    langButtons: {
        en: string;
        es: string;
        ja: string;
    }
    themeButtons: {
        pixel: string;
        default: string;
        dark: string;
    }
}

/**
 * Filter the language code and setup 'en' as default in case of 'en-UK' or others
 * @param {string} browserLang - the string that comes from getting the language browser
 * @return {LangCodeTypes} one of the three "valid" language codes of the app
 */
export const initialLang = (browserLang: string): LangCodeTypes => {
    const lang = browserLang.substring(0,2);
    if (lang === 'en') {
        return 'en';
    }

    if (lang === 'ja') {
        return 'ja';
    }

    if (lang === 'es') {
        return 'es';
    }

    return 'en';
}
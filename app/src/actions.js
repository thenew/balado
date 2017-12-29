export function setLocale(locale) {
    console.log("%c Actions setLocale ", 'background: #000; color: #ffff00; padding: 1px 0;');
    return {
        type: 'SET_LOCALE',
        locale: locale
    }
}

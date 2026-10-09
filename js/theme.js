const html = document.documentElement;
const storageAvailable = typeof Storage !== 'undefined';
const savedColorMode = storageAvailable ? localStorage.getItem('color-mode') : undefined;

switchColorMode(savedColorMode || 'auto', true);

document.querySelectorAll('div.color-modes a[data-rc-color-mode]').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        switchColorMode(link.dataset.rcColorMode);
    });
});

function switchColorMode(mode, onload = false) {
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    const colorMode = mode === 'auto' ? (prefersDark ? 'dark' : 'light') : mode;
    html.dataset.bsTheme = colorMode;

    const currentTheme = document.querySelector('div.color-modes > ul.dropdown-menu a.current-theme');
    const selectedTheme = document.querySelector(`div.color-modes > ul.dropdown-menu a.${mode}-mode`);

    currentTheme?.classList.remove('current-theme');
    selectedTheme?.classList.add('current-theme');

    if (!onload && storageAvailable) {
        if (mode === 'auto') {
            localStorage.removeItem('color-mode');
        } else {
            localStorage.setItem('color-mode', mode);
        }
    }

    document.dispatchEvent(new Event('switch-color-mode'));
}

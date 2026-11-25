const currentDate = new Date();

document.querySelectorAll('.rc-announcement').forEach((announcement) => {
    const expiry = announcement.dataset.rcExpiry;

    if (!expiry || currentDate < new Date(expiry)) {
        announcement.classList.remove('d-none');
    }
});

const switchLogo = () => {
    const isDark = document.documentElement.dataset.bsTheme === 'dark';

    document.querySelectorAll('img[data-rc-dark]').forEach((img) => {
        if (!img.dataset.rcLight) {
            img.dataset.rcLight = img.src;
        }

        img.src = isDark ? img.dataset.rcDark : img.dataset.rcLight;
    });
};

switchLogo();
document.addEventListener('switch-color-mode', switchLogo, false);

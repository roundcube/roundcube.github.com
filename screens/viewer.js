const viewer = document.getElementById('viewer');
const modalBody = viewer.querySelector('.modal-body');
const modalImage = modalBody.querySelector('img');
const modalDialog = viewer.querySelector('.modal-dialog');
const modalCaption = viewer.querySelector('.modal-footer > p');

viewer.querySelectorAll('button[data-rc-navigation]').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        moveScreen(link.dataset.rcNavigation === 'previous');
    });
});

viewer.addEventListener('show.bs.modal', function (event) {
    const source = event.relatedTarget;
    const img = source.querySelector('img');

    const src = img.src;
    const alt = img.alt || '';

    modalImage.src = src.replace('/thumbs/', '/screens/');
    modalImage.alt = alt;
    modalCaption.textContent = alt;

    // Extract the current source and index once.
    const id = source.id;
    this.dataset.rcCurIndex = id.replace(/^screenshots-[a-z]+-[a-z]+-/, '');
    this.dataset.rcCurSource = id.replace(/-[0-9]+$/, '');

    updateNavigation();
});

viewer.addEventListener('hidden.bs.modal', function () {
    modalImage.src = 'data:,';
    modalImage.alt = '';
    modalImage.style.removeProperty('height');

    if (this.dataset.rcNoResize !== 'true') {
        modalDialog.style.removeProperty('width');
    }

    modalCaption.textContent = '';
    this.dataset.rcCurIndex = '';
    this.dataset.rcCurSource = '';
    modalBody.classList.add('loading');
});

// Keyboard navigation
document.addEventListener('keyup', function (event) {
    if (!viewer.classList.contains('show')) {
        return;
    }

    if (event.key === 'ArrowLeft') {
        moveScreen(true);
    } else if (event.key === 'ArrowRight') {
        moveScreen();
    }
});

// Swipe navigation
let touchStartX = 0;
let touchStartY = 0;

modalBody.addEventListener('touchstart', function (event) {
    const touch = event.changedTouches[0];

    touchStartX = touch.screenX;
    touchStartY = touch.screenY;
}, { passive: true });

modalBody.addEventListener('touchend', function (event) {
    if (!viewer.classList.contains('show')) {
        return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.screenX - touchStartX;
    const deltaY = touch.screenY - touchStartY;

    // Ignore predominantly vertical swipes.
    if (Math.abs(deltaY) > 100) {
        return;
    }

    if (deltaX > 200) {
        moveScreen(true);
    } else if (deltaX < -200) {
        moveScreen();
    }
}, { passive: true });

modalImage.addEventListener('load', () => {
    screenLoaded(modalImage);
});

function screenLoaded(img) {
    modalDialog.style.removeProperty('width');

    const maxWidth = modalBody.offsetWidth;
    const maxHeight = window.innerHeight * 0.75;

    let height = Math.min(
        (img.height / img.width) * maxWidth,
        img.height
    );

    height = Math.min(height, maxHeight);

    const width = (img.width / img.height) * height;

    img.style.height = `${height}px`;
    modalDialog.style.width = `${width}px`;

    modalBody.classList.remove('loading');
}

function moveScreen(reverse = false) {
    const source = viewer.dataset.rcCurSource;
    const target = getNextScreenId(reverse);

    if (target <= 0) {
        return;
    }

    viewer.dataset.rcNoResize = 'true';

    bootstrap.Modal.getInstance(viewer).hide();

    const targetElement = document.getElementById(`${source}-${target}`);

    if (targetElement) {
        targetElement.click();
    }

    viewer.dataset.rcNoResize = 'false';
}

function getNextScreenId(reverse = false) {
    const source = viewer.dataset.rcCurSource;
    const current = Number(viewer.dataset.rcCurIndex);

    const sourceElement = document.getElementById(source);

    if (!sourceElement || !current) {
        return 0;
    }

    const total = sourceElement.querySelectorAll('li').length;

    if (reverse) {
        return current === 1 ? 0 : current - 1;
    }

    return current === total ? 0 : current + 1;
}

function updateNavigation() {
    viewer.querySelector('.modal-footer > .nav > .nav-link.previous').classList.toggle('disabled', getNextScreenId(true) === 0);
    viewer.querySelector('.modal-footer > .nav > .nav-link.next').classList.toggle('disabled', getNextScreenId() === 0);
}

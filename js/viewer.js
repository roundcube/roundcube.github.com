const viewer = document.getElementById('viewer');
const viewerBody = viewer.querySelector('.modal-body');
const viewerImage = viewerBody.querySelector('img');
const viewerDialog = viewer.querySelector('.modal-dialog');
const viewerCaption = viewer.querySelector('.modal-footer > p');

viewer.querySelectorAll('button[data-rc-navigation]').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        moveScreen(link.dataset.rcNavigation === 'previous');
    });
});

viewer.addEventListener('show.bs.modal', (event) => {
    const source = event.relatedTarget;
    const img = source.querySelector('img');

    const src = img.src;
    const alt = img.alt || '';

    viewerImage.src = src.replace('/thumbs/', '/screens/');
    viewerImage.alt = alt;
    viewerCaption.textContent = alt;

    // Extract the current source and index once.
    const id = source.id;
    viewer.dataset.rcCurIndex = id.replace(/^screenshots-[a-z]+-[a-z]+-/, '');
    viewer.dataset.rcCurSource = id.replace(/-\d+$/, '');

    updateNavigation();
});

viewer.addEventListener('hidden.bs.modal', () => {
    viewerImage.src = 'data:,';
    viewerImage.alt = '';
    viewerImage.style.removeProperty('height');

    if (viewer.dataset.rcNoResize !== 'true') {
        viewerDialog.style.removeProperty('width');
    }

    viewerCaption.textContent = '';
    viewer.dataset.rcCurIndex = '';
    viewer.dataset.rcCurSource = '';
    viewerBody.classList.add('loading');
});

// Keyboard navigation
document.addEventListener('keyup', (event) => {
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

viewerBody.addEventListener('touchstart', (event) => {
    const touch = event.changedTouches[0];

    touchStartX = touch.screenX;
    touchStartY = touch.screenY;
}, { passive: true });

viewerBody.addEventListener('touchend', (event) => {
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

viewerImage.addEventListener('load', () => {
    screenLoaded(viewerImage);
});

function screenLoaded(img) {
    viewerDialog.style.removeProperty('width');

    const maxWidth = viewerBody.offsetWidth;
    const maxHeight = window.innerHeight * 0.75;

    let height = Math.min(
        (img.height / img.width) * maxWidth,
        img.height
    );

    height = Math.min(height, maxHeight);

    const width = (img.width / img.height) * height;

    img.style.height = `${height}px`;
    viewerDialog.style.width = `${width}px`;

    viewerBody.classList.remove('loading');
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
    document.activeElement.blur();
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

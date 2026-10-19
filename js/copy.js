const copyText = 'Copy to clipboard';
const copyComplete = 'Copied';
const copyError = 'Copy failed';
const copyPopoverLinks = document.querySelectorAll('button.copy-popover-link');

copyPopoverLinks.forEach((button) => {
    const target = button.closest('td')?.querySelector('.copy-popover-target');

    if (!target) {
        return;
    }

    // eslint-disable-next-line no-new
    new bootstrap.Popover(button, {
        content: target.innerHTML,
        html: true,
        allowList: { ...bootstrap.Popover.Default.allowList, button: [] },
        customClass: 'copy-popover',
    });

    button.addEventListener('click', (event) => {
        event.preventDefault();
    });

    button.addEventListener('shown.bs.popover', () => {
        initialisePopoverCopyButtons(button);
    });
});

function initialisePopoverCopyButtons(popoverButton) {
    const popoverId = popoverButton.getAttribute('aria-describedby');

    if (!popoverId) {
        return;
    }

    const popover = document.getElementById(popoverId);

    if (!popover) {
        return;
    }

    popover.querySelectorAll('button.copy-link').forEach((copyButton) => {
        initialiseCopyButton(copyButton);
    });
}

if (copyPopoverLinks.length > 0) {
    document.addEventListener('click', (event) => {
        if (event.target.closest('.popover.show')) {
            return;
        }

        copyPopoverLinks.forEach((button) => {
            const popover = bootstrap.Popover.getInstance(button);

            if (popover?.tip?.classList.contains('show')) {
                popover.hide();
            }
        });
    });
}

document.querySelectorAll('button.copy-link').forEach((copyButton) => {
    initialiseCopyButton(copyButton);
});

function initialiseCopyButton(copyButton) {
    if (copyButton.dataset.copyInitialised === 'true') {
        return;
    }

    copyButton.dataset.copyInitialised = 'true';

    const tooltip = bootstrap.Tooltip.getOrCreateInstance(copyButton, {
        title: copyText,
    });

    copyButton.addEventListener('click', (event) => {
        copyToClipboard(copyButton, tooltip, event);
    });
}

async function copyToClipboard(copyButton, tooltip, event) {
    event.preventDefault();

    const container = copyButton.closest('p, td, div');
    const target = container?.querySelector('.copy-target');

    if (!target) {
        return;
    }

    const payload = target.textContent.trimEnd();

    try {
        await navigator.clipboard.writeText(payload);
        updateCopyButton(copyButton, tooltip, 'complete', copyComplete);
    } catch {
        updateCopyButton(copyButton, tooltip, 'error', copyError);
    }
}

function updateCopyButton(copyButton, tooltip, cssClass, text) {
    tooltip.setContent({
        '.tooltip-inner': text,
    });

    copyButton.classList.add(cssClass);

    window.setTimeout(() => {
        tooltip.setContent({
            '.tooltip-inner': copyText,
        });

        copyButton.classList.remove(cssClass);
    }, 2500);
}

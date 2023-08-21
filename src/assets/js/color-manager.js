'use strict';

function hexa_to_rgba(h, alpha = null) {
    if (!h.includes('#')) {
        return h;
    }

    let r = 0,
        g = 0,
        b = 0,
        a = 1;

    if (h.length == 7) {
        r = '0x' + h[1] + h[2];
        g = '0x' + h[3] + h[4];
        b = '0x' + h[5] + h[6];
        a = '1';
    } else if (h.length == 9) {
        r = '0x' + h[1] + h[2];
        g = '0x' + h[3] + h[4];
        b = '0x' + h[5] + h[6];
        a = '0x' + h[7] + h[8];
        a = +(a / 255).toFixed(3);
    }

    if (alpha != null) {
        a = alpha;
    }

    return 'rgba(' + +r + ',' + +g + ',' + +b + ',' + a + ')';
}

window.addEventListener('load', () => {
    let main_color = getComputedStyle(document.body).getPropertyValue('--slope-main-color').trim();

    let changed_color_50 = hexa_to_rgba(main_color, '.50');
    document.querySelector('body').style.setProperty('--slope-main-color-50', changed_color_50);

    let changed_color_20 = hexa_to_rgba(main_color, '.25');
    document.querySelector('body').style.setProperty('--slope-main-color-25', changed_color_20);
});

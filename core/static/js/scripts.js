/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Mostrar siempre 4 imágenes, rellenando con las primeras si faltan para completar el grupo, con animación fade
document.addEventListener('DOMContentLoaded', function() {
    const cells = Array.from(document.querySelectorAll('.collage-cell'));
    const total = cells.length;
    const visible = 4;
    let start = 0;
    // Inicializar opacidad y transición
    cells.forEach(cell => {
        cell.style.transition = 'opacity 1s';
        cell.style.opacity = 0;
        cell.style.display = 'none';
    });
    let prevIdxs = [];
    function showCells() {
        const newIdxs = [];
        for (let i = 0; i < visible; i++) {
            newIdxs.push((start + i) % total);
        }
        // Fade out las salientes
        prevIdxs.forEach(idx => {
            if (!newIdxs.includes(idx)) {
                cells[idx].style.opacity = 0;
                // El display: none se aplica después del fade out
                setTimeout(() => { cells[idx].style.display = 'none'; }, 1000);
            }
        });
        // Fade in las entrantes (ligero retardo para superposición)
        setTimeout(() => {
            newIdxs.forEach(idx => {
                cells[idx].style.display = 'block';
                void cells[idx].offsetWidth;
                cells[idx].style.opacity = 1;
            });
        }, 150);
        prevIdxs = newIdxs;
    }
    showCells();
    setInterval(() => {
        start = (start + visible) % total;
        showCells();
    }, 5000);
});

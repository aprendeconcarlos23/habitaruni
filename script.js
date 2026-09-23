/* ============================================================
   HABITAR UNIVERSIDAD — Landing page
   Animaciones de aparición al hacer scroll (sin dependencias).
   Si JS no se ejecuta, el contenido igual se muestra completo.
============================================================ */
(function () {
  'use strict';

  // Marca en <html> para activar las transiciones (fallback accesible).
  document.documentElement.classList.add('js');

  var items = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if (items.length === 0) { return; }

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      var el = entrada.target;
      if (!entrada.isIntersecting) { return; }

      // Retraso escalonado: las tarjetas de una grilla aparecen de a una.
      var padres = el.parentElement ? el.parentElement.children : [];
      var hermanos = Array.prototype.filter.call(padres, function (n) {
        return n.classList && n.classList.contains('reveal');
      });
      var i = hermanos.indexOf(el);
      el.style.setProperty('--retraso', (i * 90) + 'ms');

      observador.unobserve(el);
      el.classList.add('visible');
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  items.forEach(function (el) { observador.observe(el); });
})();
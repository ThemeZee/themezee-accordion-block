/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/accordion/frontend.js ***!
  \***********************************/
/**
 * Toggle Accordion Content in Frontend
 *
 * @package ThemeZee Accordion Block
 */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // Loop through all Accordion blocks on page.
    document.querySelectorAll('.wp-block-themezee-accordion').forEach(accordion => {
      // Find accordion heading block.
      var header = accordion.querySelector('.wp-block-themezee-accordion-heading');

      // Add aria-expanded attribute.
      header.setAttribute('aria-expanded', accordion.classList.contains('is-opened'));

      // Listen for clicks on accordion heading block.
      header.addEventListener('click', function () {
        // Toggle is-opened class.
        accordion.classList.toggle('is-opened');

        // Update aria-expanded attribute.
        header.setAttribute('aria-expanded', accordion.classList.contains('is-opened'));
      });
    });
  });
})();
/******/ })()
;
//# sourceMappingURL=frontend.js.map
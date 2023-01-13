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

        // Check if accordion was openend and is in a accordion group with auto-close enabled.
        if (accordion.classList.contains('is-opened') && accordion.closest('.test-accordion-group-block')) {
          // Get siblings by finding all accordion blocks in the group and then filter out the clicked one. 
          const siblings = [...accordion.closest('.test-accordion-group-block').querySelectorAll('.wp-block-themezee-accordion')].filter(el => el !== accordion);

          // Close all sibling blocks.
          siblings.forEach(accordion => {
            // Remove is-opened class.
            accordion.classList.remove('is-opened');

            // Update aria-expanded attribute.
            accordion.querySelector('.wp-block-themezee-accordion-heading').setAttribute('aria-expanded', false);
          });
        }
      });
    });
  });
})();
/******/ })()
;
//# sourceMappingURL=frontend.js.map
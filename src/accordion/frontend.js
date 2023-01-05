/**
 * Toggle Accordion Content in Frontend
 *
 * @package ThemeZee Accordion Block
 */

( function() {
	document.addEventListener( 'DOMContentLoaded', function() {

		/* Loop through all Accordion blocks on page */
		document.querySelectorAll( '.wp-block-themezee-accordion' ).forEach( accordion => {

			// Find accordion header element.
			var header = accordion.querySelector( '.wp-block-themezee-accordion-heading' );

			// Display accordion content if toggled.
			header.addEventListener( 'click', function() {
				accordion.classList.toggle( 'is-opened' );
				header.setAttribute( 'aria-expanded', accordion.classList.contains( 'is-opened' ) );
			});
		});
	} );
} )();

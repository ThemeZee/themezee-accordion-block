/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { SVG, Path } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';

const angleDown = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<Path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
	</SVG>
);

export default function Edit( { attributes } ) {
	const { layout = {} } = attributes;

	const blockProps = useBlockProps( {
		'aria-expanded': false,
	} );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: [ 
			[ 'core/heading', {
				level: 3,
				placeholder: __( 'Accordion Heading', 'themezee-accordion-block' ),
			} ],
			[ 'themezee/accordion-icon', {
				iconName: "angleDown",
				iconSVG: angleDown,
				iconWidth: "24px",
				iconHeight: "24px",
			} ]
		],
		__experimentalLayout: layout,
		orientation: "horizontal",
		renderAppender: false,
	} );

	return (
		<>
			<button { ...innerBlocksProps }>
				{ innerBlocksProps.children }
			</button>
		</>
	);
}

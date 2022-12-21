/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function Edit( { attributes } ) {
	const { layout = {} } = attributes;
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: [ 
			[ 'themezee/icon', {
				iconName: "chevronDown",
				iconLibrary: "wordpress",
				iconSVG: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"></path></svg>',
				iconWidth: "36px",
				iconHeight: "36px",
			} ],
			[ 'core/heading', {
				level: 3,
				placeholder: __( 'Accordion Heading', 'themezee-accordion-block' ),
			} ] 
		],
		__experimentalLayout: layout,
		renderAppender: false,
	} );

	return (
		<>
			<div { ...innerBlocksProps }>
				{ innerBlocksProps.children }
			</div>
		</>
	);
}

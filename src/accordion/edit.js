/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function Edit( {
	attributes,
	clientId,
	isSelected,
} ) {

	// Check if any child block is selected.
	const isChildSelected = useSelect( ( select ) => select( 'core/block-editor' ).hasSelectedInnerBlock( clientId, true ) );

	const blockProps = useBlockProps( {
		className: classnames( {
			'is-opened': isSelected || isChildSelected,
		} ),
	} );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'themezee/accordion-heading', 'themezee/accordion-content' ],
		template: [ 
			[ 'themezee/accordion-heading', {} ],
			[ 'themezee/accordion-content', {} ] 
		],
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

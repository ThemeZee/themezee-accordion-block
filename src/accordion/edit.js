/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function Edit( {
	attributes,
	clientId,
	isSelected,
	setAttributes,
} ) {
	const {
		openedByDefault,
	} = attributes;

	// Check if any child block is selected.
	const isChildSelected = useSelect( ( select ) => select( 'core/block-editor' ).hasSelectedInnerBlock( clientId, true ) );

	const blockProps = useBlockProps( {
		className: classnames( {
			'is-opened': openedByDefault || ( isSelected || isChildSelected ),
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
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'themezee-accordion-block' ) } initialOpen={ true }>
					<ToggleControl
						label={ __( 'Opened by default', 'themezee-accordion-block' ) }
						checked={ openedByDefault }
						onChange={ () => setAttributes( { openedByDefault: ! openedByDefault } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...innerBlocksProps }>
				{ innerBlocksProps.children }
			</div>
		</>
	);
}

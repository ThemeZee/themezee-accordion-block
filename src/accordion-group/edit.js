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

/**
 * Internal dependencies
 */
import './editor.scss';

const blockName = 'themezee/accordion';
const ALLOWED_BLOCKS = [ blockName ];

const DEFAULT_BLOCK = {
	name: blockName,
	attributesToCopy: [
		'backgroundColor',
		'border',
		'borderColor',
		'className',
		'gradient',
		'style',
		'textColor',
	],
};

export default function Edit( {
	attributes,
	setAttributes,
} ) {
	const {
		autoClose,
		layout = {},
	} = attributes;

	const blockProps = useBlockProps( {
		className: classnames( {
			'is-auto-close': autoClose,
		} ),
	} );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		__experimentalDefaultBlock: DEFAULT_BLOCK,
		__experimentalDirectInsert: true,
		template: [
			[
				blockName,
				{},
			],
		],
		__experimentalLayout: layout,
		templateInsertUpdatesSelection: true,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'themezee-accordion-block' ) } initialOpen={ true }>
					<ToggleControl
						label={ __( 'Automatically close accordions', 'themezee-accordion-block' ) }
						help={ __( 'Enable this option to collapse all accordion blocks in this group if another accordion is opened.', 'themezee-accordion-block' ) }
						checked={ autoClose }
						onChange={ () => setAttributes( { autoClose: ! autoClose } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...innerBlocksProps }>
				{ innerBlocksProps.children }
			</div>
		</>
	);
}

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

export default function Edit( { attributes } ) {
	const { layout = {} } = attributes;
	const blockProps = useBlockProps();

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

	return <div { ...innerBlocksProps } />;
}

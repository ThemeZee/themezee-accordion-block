/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<button { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</button>
	);
}

/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save();
	return (
		<button { ...blockProps }>
			<InnerBlocks.Content />
		</button>
	);
}

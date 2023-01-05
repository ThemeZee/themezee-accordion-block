/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		openedByDefault,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: classnames( {
			'is-opened': openedByDefault,
		} ),
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}

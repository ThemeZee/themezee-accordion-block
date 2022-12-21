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
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: [ 
			[ 'core/paragraph', {} ] 
		]
	} );

	return (
		<>
			<div { ...innerBlocksProps }>
				{ innerBlocksProps.children }
			</div>
		</>
	);
}

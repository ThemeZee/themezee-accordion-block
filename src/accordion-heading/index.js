/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { SVG, Path } from '@wordpress/components';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';

const icon = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
		<Path d="m33.4 31 8.6-7.4 4.25.35-9.45 8.1 2.85 12.3-3.7-2.25Zm-4.65-14.45-2.85-6.7L27.5 6l4.6 10.85Zm-15.6 21.2 7.85-4.7 7.85 4.75-2.1-8.9 6.9-6-9.1-.8L21 13.7l-3.55 8.35-9.1.8 6.9 6ZM8.65 44l3.25-14.05L1 20.5l14.4-1.25L21 6l5.6 13.25L41 20.5l-10.9 9.45L33.35 44 21 36.55ZM21 26.75Z"/>
	</SVG>
);

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	icon,
	edit,
	save,
} );

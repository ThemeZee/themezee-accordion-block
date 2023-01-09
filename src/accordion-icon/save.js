/**
 * External dependencies
 */
import classnames from 'classnames';
import parse from 'html-react-parser';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( {attributes} ) {
	const {
		iconName,
		iconSVG,
		iconHover,
		iconWidth,
		iconHeight,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: classnames( {
			'is-hover-flip': iconHover === 'flip',
			'is-hover-rotate': iconHover === 'rotate',
			'is-hover-icon': iconHover === 'icon',
		} ),
	} );

	const iconClasses = classnames( 'icon', {
		[ `icon-name-${ iconName }` ]: iconName,
	} );

	const iconStyles = {
		width: iconWidth,
		height: iconHeight,
	};

	// If icon is retrieved from post body as string, then parse and convert it to React element.
	const iconElement = typeof iconSVG === 'string' ? parse( iconSVG, { trim: true } ) : iconSVG;

	const figure = (
		<figure className={ iconClasses } style={ iconStyles } aria-label={ __( 'Expand', 'themezee-accordion-block' ) }>
			{ iconElement }
		</figure>
	);

	return (
		<div { ...blockProps }>
			{ figure }
		</div>
	);
}

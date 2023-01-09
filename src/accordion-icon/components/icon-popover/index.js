/**
 * External dependencies
 */
import classnames from 'classnames';
import { isEmpty } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Button,
	Popover,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import './style.scss';
import { icons } from '../../icons';

export default function IconPopover( props ) {
	const {
		isIconPopoverOpen,
		setIconPopoverOpen,
		attributes,
		setAttributes,
		anchor,
	} = props;

	if ( ! isIconPopoverOpen ) {
		return null;
	}

	function updateIcon( icon ) {
		const { name, svg, hover, close = '' } = icon;
		setAttributes( {
			iconName: name,
			iconSVG: svg,
			iconHover: hover,
			iconClose: close,
		} );
		setIconPopoverOpen( false );
	}

	return (
		<Popover
			className="wp-block-themezee-accordion-icon-popover block-editor-inserter__popover is-quick"
			position="bottom center"
			onClose={ () => {
				setIconPopoverOpen( false );
				anchor?.focus();
			} }
			anchor={ anchor }
		>
			<div className="block-editor-inserter__quick-inserter">	

				{ ! isEmpty( icons ) && (
					<div className="tz-icon-list">
						{ icons.map( ( icon ) => {
							console.log( icon.name, attributes?.iconName );
							return (
								<Button
									key={ `icon-${ icon.name }` }
									className={ classnames( 'tz-icon-list__item', {
										'is-active': icon.name === attributes?.iconName,
									} ) }
									onClick={ () => updateIcon( icon ) }
								>
									<span className="tz-icon-list__item-icon">
										{ icon.svg }
									</span>
								</Button>
							);
						} ) }
					</div>
				) }

			</div>
		</Popover>
	);
}

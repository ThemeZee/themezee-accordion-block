/**
 * External dependencies
 */
import { isEmpty } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Popover,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import './style.scss';

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

			</div>
		</Popover>
	);
}

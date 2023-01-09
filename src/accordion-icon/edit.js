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
	BlockControls,
	InspectorControls,
	useBlockProps,
	useSetting,
} from '@wordpress/block-editor';
import {
	ToolbarButton,
	ToolbarGroup,
	__experimentalUseCustomUnits as useCustomUnits,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { useState, useRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import IconPopover from './components/icon-popover';
import UnitRangeControl from './components/unit-range-control';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function Edit( {
	attributes,
	setAttributes,
} ) {
	const {
		iconName,
		iconSVG,
		iconHover,
		iconWidth,
		iconHeight,
	} = attributes;

	const [ isIconPopoverOpen, setIconPopoverOpen ] = useState( false );

	const availableUnitSettings = (
		useSetting( 'spacing.units' ) || undefined
	)?.filter( ( availableUnit ) => availableUnit !== '%' );

	const units = useCustomUnits( {
		availableUnits: availableUnitSettings || [
			'px',
			'em',
			'rem',
			'vw',
			'vh',
		],
		defaultValues: { px: 48, em: 3, rem: 3, vw: 3, vh: 6 },
	} );

	const ref = useRef();
	const blockProps = useBlockProps( {
		className: classnames( {
			'is-hover-flip': iconHover === 'flip',
			'is-hover-rotate': iconHover === 'rotate',
			'is-hover-icon': iconHover === 'icon',
		} ),
		ref,
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
		<>
			{ iconName && (
				<>
					<BlockControls>
						<ToolbarGroup>
							<ToolbarButton
								onClick={ () => setIconPopoverOpen( true ) }>
									{ __( 'Change icon', 'themezee-accordion-block' ) }
							</ToolbarButton>
						</ToolbarGroup>
					</BlockControls>

					<InspectorControls>
						<ToolsPanel label={ __( 'Icon settings', 'themezee-accordion-block' ) }>
							<ToolsPanelItem
								hasValue={ () => iconWidth === "48px" ? false : true }
								label={ __( 'Icon size', 'themezee-accordion-block' ) }
								onDeselect={ () => setAttributes( { iconWidth: "48px", iconHeight: "48px" } ) }
								resetAllFilter={ () => ( { iconWidth: "48px", iconHeight: "48px" } ) }
								isShownByDefault={ true }
							>
								<UnitRangeControl
									label={ __( 'Icon size', 'themezee-accordion-block' ) }
									value={ iconWidth }
									onChange={ ( value ) => setAttributes( { iconWidth: value, iconHeight: value } ) }
									units = {units}
									max = { {
										'px': 320,
										'em': 20,
										'rem': 20,
										'vw': 20,
										'vh': 20,
									} }
								/>
							</ToolsPanelItem>
						</ToolsPanel>
					</InspectorControls>
				</> 
			) }

			<div { ...blockProps }>
				{ figure }
			</div>

			<IconPopover
				isIconPopoverOpen={ isIconPopoverOpen }
				setIconPopoverOpen={ setIconPopoverOpen }
				attributes={ attributes }
				setAttributes={ setAttributes }
				anchor={ ref?.current }
			/>
		</>
	);
}

export default Edit;

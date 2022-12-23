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
	__experimentalUseBorderProps as useBorderProps,
	__experimentalUseColorProps as useColorProps,
	__experimentalGetSpacingClassesAndStyles as useSpacingProps,
} from '@wordpress/block-editor';
import {
	Button,
	Placeholder,
	ToolbarButton,
	ToolbarGroup,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { useState, useRef } from '@wordpress/element';
import {
	Icon,
} from '@wordpress/icons';
import { SVG, Path } from '@wordpress/components';

/**
 * Internal dependencies
 */
import IconPopover from './components/icon-popover';
import UnitRangeControl from './components/unit-range-control';
import './editor.scss';

const placeholderIcon = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
		<Path d="m33.4 31 8.6-7.4 4.25.35-9.45 8.1 2.85 12.3-3.7-2.25Zm-4.65-14.45-2.85-6.7L27.5 6l4.6 10.85Zm-15.6 21.2 7.85-4.7 7.85 4.75-2.1-8.9 6.9-6-9.1-.8L21 13.7l-3.55 8.35-9.1.8 6.9 6ZM8.65 44l3.25-14.05L1 20.5l14.4-1.25L21 6l5.6 13.25L41 20.5l-10.9 9.45L33.35 44 21 36.55ZM21 26.75Z"/>
	</SVG>
);

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

	const borderProps = useBorderProps( attributes );
	const colorProps = useColorProps( attributes );
	const spacingProps = useSpacingProps( attributes );
	const ref = useRef();

	const blockProps = useBlockProps( { ref } );

	const containerClasses = classnames(
		'icon-container',
		colorProps.className,
		borderProps.className,
	);

	const containerStyles = {
		...borderProps.style,
		...colorProps.style,
		...spacingProps.style,
	};

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

	const iconMarkup = (
		<div className={ containerClasses } style={ containerStyles }>
			{ figure }
		</div>
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

			{ iconName && (
				<div { ...blockProps }>
					{ iconMarkup }
				</div>
			) }

			{ ! iconName && (
				<div { ...blockProps }>
					<Placeholder
						icon={ placeholderIcon }
						label={ __( 'Icon', 'themezee-accordion-block' ) }
						instructions={ __( 'Browse all icons in the library or run a quick search.', 'themezee-accordion-block' ) }
						className="wp-block-themezee-icon-placeholder has-illustration"
					>
						<Icon
							className="components-placeholder__illustration"
							icon={ placeholderIcon }
						/>
						<Button
							isTertiary
							onClick={ () => setIconPopoverOpen( true ) }
						>
							{ __( 'Set icon', 'themezee-accordion-block' ) }
						</Button>
					</Placeholder>
				</div>
			) }

			<IconPopover
				isIconPopoverOpen={ isIconPopoverOpen }
				setIconPopoverOpen={ setIconPopoverOpen }
				setAttributes={ setAttributes }
				anchor={ ref?.current }
			/>
		</>
	);
}

export default Edit;

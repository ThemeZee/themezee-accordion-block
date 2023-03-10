/**
 * WordPress dependencies
 */
import { SVG, Path } from '@wordpress/components';

/* Font Awesome Icons */
const arrowDown = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
		<Path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
	</SVG>
);

const arrowRight = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<Path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
	</SVG>
);

const angleDown = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<Path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
	</SVG>
);

const angleRight = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
		<Path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
	</SVG>
);

const anglesDown = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<Path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/>
	</SVG>
);

const anglesRight = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<Path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
	</SVG>
);

const caretDown = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
		<Path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
	</SVG>
);

const caretRight = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
		<Path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/>
	</SVG>
);

const circleArrowDown = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<Path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM127 297c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 214.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 409c-9.4 9.4-24.6 9.4-33.9 0L127 297z"/>
	</SVG>
);

const circleArrowRight = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<Path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"/>
	</SVG>
);

const circleChevronDown = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<Path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/>
	</SVG>
);

const circleChevronRight = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<Path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/>
	</SVG>
);

const circleDown = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<Path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM244.7 395.3l-112-112c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l64 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 64 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-112 112c-6.2 6.2-16.4 6.2-22.6 0z"/>
	</SVG>
);

const circleRight = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<Path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zm395.3 11.3l-112 112c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8l0-64-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-64c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l112 112c6.2 6.2 6.2 16.4 0 22.6z"/>
	</SVG>
);

const longDown = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
		<Path d="M318 334.5c3.8 8.8 2 19-4.6 26l-136 144c-4.5 4.8-10.8 7.5-17.4 7.5s-12.9-2.7-17.4-7.5l-136-144c-6.6-7-8.4-17.2-4.6-26S14.4 320 24 320h88l0-288c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32l0 288h88c9.6 0 18.2 5.7 22 14.5z"/>
	</SVG>
);

const longRight = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<Path d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 88L32 208c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l288 0 0 88c0 9.6 5.7 18.2 14.5 22z"/>
	</SVG>
);

const plus = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<Path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
	</SVG>
);

const plusCircle = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<Path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
	</SVG>
);

const plusSquare = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<Path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
	</SVG>
);

const minus = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<Path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
	</SVG>
);

const minusCircle = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<Path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/>
	</SVG>
);

const minusSquare = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<Path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/>
	</SVG>
);

const squareCaretDown = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<Path d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"/>
	</SVG>
);

const squareCaretRight = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<Path d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM320 256c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4s-14.4-12.5-14.4-22l0-208c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6z"/>
	</SVG>
);

export const icons = [
	{
		name: 'arrowDown',
		svg: arrowDown,
		hover: 'flip',
	},
	{
		name: 'arrowRight',
		svg: arrowRight,
		hover: 'rotate',
	},
	{
		name: 'angleDown',
		svg: angleDown,
		hover: 'flip',
	},
	{
		name: 'angleRight',
		svg: angleRight,
		hover: 'rotate',
	},
	{
		name: 'anglesDown',
		svg: anglesDown,
		hover: 'flip',
	},
	{
		name: 'anglesRight',
		svg: anglesRight,
		hover: 'rotate',
	},
	{
		name: 'caretDown',
		svg: caretDown,
		hover: 'flip',
	},
	{
		name: 'caretRight',
		svg: caretRight,
		hover: 'rotate',
	},
	{
		name: 'circleArrowDown',
		svg: circleArrowDown,
		hover: 'flip',
	},
	{
		name: 'circleArrowRight',
		svg: circleArrowRight,
		hover: 'rotate',
	},
	{
		name: 'circleChevronDown',
		svg: circleChevronDown,
		hover: 'flip',
	},
	{
		name: 'circleChevronRight',
		svg: circleChevronRight,
		hover: 'rotate',
	},
	{
		name: 'circleDown',
		svg: circleDown,
	},
	{
		name: 'circleRight',
		svg: circleRight,
		hover: 'rotate',
	},
	{
		name: 'longDown',
		svg: longDown,
		hover: 'flip',
	},
	{
		name: 'longRight',
		svg: longRight,
		hover: 'rotate',
	},
	{
		name: 'plus',
		svg: plus,
		hover: 'icon',
		close: minus,
	},
	{
		name: 'plusCircle',
		svg: plusCircle,
		hover: 'icon',
		close: minusCircle,
	},
	{
		name: 'plusSquare',
		svg: plusSquare,
		hover: 'icon',
		close: minusSquare,
	},
	{
		name: 'squareCaretDown',
		svg: squareCaretDown,
		hover: 'flip',
	},
	{
		name: 'squareCaretRight',
		svg: squareCaretRight,
		hover: 'rotate',
	},
];

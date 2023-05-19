/**
 * WordPress dependencies.
 */
import {
	useInnerBlocksProps,
	useBlockProps,
	__experimentalUseBorderProps as useBorderProps,
	__experimentalUseColorProps as useColorProps,
	__experimentalGetSpacingClassesAndStyles as useSpacingProps,
} from '@wordpress/block-editor';

// Template contains a single empty paragraph block.
const template = [ [ 'core/paragraph', {} ] ];

/**
 * Edit function for the slide block.
 */
export default function Edit({attributes}) {

	const borderProps  = useBorderProps( attributes );
	const colorProps   = useColorProps( attributes );
	const spacingProps = useSpacingProps( attributes );
	const blockProps   = useBlockProps( { className: 'hizzle-slider__slide', style: { ...borderProps.style, ...colorProps.style, ...spacingProps.style } } );
	const innerProps   = useInnerBlocksProps( blockProps, {template} );

	return <div {...innerProps} />;
};

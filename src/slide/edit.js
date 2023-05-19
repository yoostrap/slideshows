/**
 * WordPress dependencies.
 */
import {
	InnerBlocks,
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
	const blockProps   = useBlockProps( { className: 'splide__slide', style: { ...borderProps.style, ...colorProps.style, ...spacingProps.style } } );

	return (
		<li {...blockProps}>
			<InnerBlocks template={template}/>
		</li>
	);
};

/**
 * WordPress dependencies.
 */
import {
	InnerBlocks,
	useBlockProps,
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
	__experimentalGetSpacingClassesAndStyles as getSpacingClassesAndStyles,
} from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * Save function for the slide block.
 */
export default function Save ( { attributes } ) {

		const borderProps  = getBorderClassesAndStyles( attributes );
		const colorProps   = getColorClassesAndStyles( attributes );
		const spacingProps = getSpacingClassesAndStyles( attributes );
		const slideClasses = classnames(
			'swiper-slide',
			colorProps.className,
			borderProps.className,
			spacingProps.className,
		);
		const slideStyle   = {
			...borderProps.style,
			...colorProps.style,
			...spacingProps.style,
		};

	const blockProps = useBlockProps.save( { className: slideClasses, style: slideStyle } );

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

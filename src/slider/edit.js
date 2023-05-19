/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	useInnerBlocksProps,
	InspectorControls,
	useBlockProps,
	__experimentalUseBorderProps as useBorderProps,
	__experimentalUseColorProps as useColorProps,
	__experimentalGetSpacingClassesAndStyles as useSpacingProps,
} from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, Placeholder } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Template.
const template = [ [ 'hizzle-slider/slide', {} ], [ 'hizzle-slider/slide', {} ], [ 'hizzle-slider/slide', {} ] ];
const allowedBlocks = ['hizzle-slider/slide'];


export default function Edit( { attributes, setAttributes, clientId } ) {
	const { slidesPerView, showArrows, autoplay, pagination } = attributes;

	//style.dimensions.minHeight
	const borderProps  = useBorderProps( attributes );
	const colorProps   = useColorProps( attributes );
	const spacingProps = useSpacingProps( attributes );
	const blockProps   = useBlockProps( { style: { ...borderProps.style, ...colorProps.style, ...spacingProps.style } } );

	// Prepare innner blocks.
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
		allowedBlocks,
		template,
		renderAppender: false,
	});

	// Slider options.
	const options = {
		rewind: true,
		width: '100%',
		perPage: slidesPerView,
		arrows: showArrows,
		pagination: pagination,
		autoplay: autoplay,
	};

	// Display the form.
	return (
		<>
			<InspectorControls>

				<PanelBody title={ __( 'Slider Settings', 'hizzle-slider' ) }>

					<ToggleControl
						label={ __( 'Autoplay', 'hizzle-slider' ) }
						checked={ autoplay ? true : false }
						onChange={ autoplay => setAttributes( { autoplay } ) }
					/>

					<ToggleControl
						label={ __( 'Show navigation arrows', 'hizzle-slider' ) }
						checked={ showArrows ? true : false }
						onChange={ showArrows => setAttributes( { showArrows } ) }
					/>

					<ToggleControl
						label={ __( 'Show pagination', 'hizzle-slider' ) }
						checked={ pagination ? true : false }
						onChange={ pagination => setAttributes( { pagination } ) }
					/>

					<TextControl
						type="number"
						label={ __( 'Slides per view', 'hizzle-slider' ) }
						value={ slidesPerView }
						onChange={ slidesPerView => setAttributes( { slidesPerView } ) }
					/>

				</PanelBody>

			</InspectorControls>

			<div {...innerBlocksProps}>
				<Splide tag="section" options={options} aria-label="Slideshow">
					{children}
					<SplideSlide>
						<Placeholder
							icon="media-default"
							label={ __( 'Add a slide', 'hizzle-slider' ) }
							instructions={ __( 'Click the button below to add a new slide.', 'hizzle-slider' ) }
						>
							<InnerBlocks.ButtonBlockAppender />
						</Placeholder>
					</SplideSlide>
				</Splide>
			</div>
		</>
	);
}

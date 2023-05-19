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
import { PanelBody, TextControl, SelectControl, ToggleControl, Placeholder } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Template.
const template = [ [ 'hizzle-slideshows/slide', {} ], [ 'hizzle-slideshows/slide', {} ], [ 'hizzle-slideshows/slide', {} ] ];
const allowedBlocks = ['hizzle-slideshows/slide'];

// Slider types.
const sliderTypes = [
	{ label: __( 'Slide', 'hizzle-slideshows' ), value: 'slide' },
	{ label: __( 'Fade', 'hizzle-slideshows' ), value: 'fade' },
	{ label: __( 'Loop', 'hizzle-slideshows' ), value: 'loop' },
];

export default function Edit( { attributes, setAttributes } ) {
	const { slidesPerView, showArrows, autoplay, pagination, type } = attributes;

	// Sets integer.
	const setInteger = ( value, attribute ) => {
		value = value === '' ? 0 : value;
		setAttributes( { [ attribute ]: parseInt( value ) } );
	};

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

	// Slideshow options.
	const perPage = 'fade' === type ? 1 : parseInt( slidesPerView );
	const options = {
		gap: '1em',
		type: type,
		rewind: true,
		width: '100%',
		perPage: perPage,
		arrows: showArrows,
		pagination: pagination,
		autoplay: autoplay,
		autoHeight: perPage === 1 ? true : false,
	};

	// Display the form.
	return (
		<>
			<InspectorControls>

				<PanelBody title={ __( 'Slideshow Settings', 'hizzle-slideshows' ) }>

					<SelectControl
						label={ __( 'Type', 'hizzle-slideshows' ) }
						value={ type }
						options={ sliderTypes }
						onChange={ type => setAttributes( { type } ) }
					/>

					{ 'fade' !== type && (
						<TextControl
							type="number"
							label={ __( 'Slides per view', 'hizzle-slideshows' ) }
							value={ slidesPerView }
							onChange={ slidesPerView => setInteger( slidesPerView, 'slidesPerView' ) }
							min={ 1 }
							max={ 10 }
						/>
					) }

					<ToggleControl
						label={ __( 'Autoplay', 'hizzle-slideshows' ) }
						checked={ autoplay ? true : false }
						onChange={ autoplay => setAttributes( { autoplay } ) }
					/>

					<ToggleControl
						label={ __( 'Show navigation arrows', 'hizzle-slideshows' ) }
						checked={ showArrows ? true : false }
						onChange={ showArrows => setAttributes( { showArrows } ) }
					/>

					<ToggleControl
						label={ __( 'Show pagination', 'hizzle-slideshows' ) }
						checked={ pagination ? true : false }
						onChange={ pagination => setAttributes( { pagination } ) }
					/>

				</PanelBody>

			</InspectorControls>

			<div {...innerBlocksProps}>
				<Splide tag="section" options={options} aria-label="Slideshow">
					{children}
					<SplideSlide>
						<Placeholder
							icon="media-default"
							label={ __( 'Add a slide', 'hizzle-slideshows' ) }
							instructions={ __( 'Click the button below to add a new slide.', 'hizzle-slideshows' ) }
						>
							<InnerBlocks.ButtonBlockAppender />
						</Placeholder>
					</SplideSlide>
				</Splide>
			</div>
		</>
	);
}

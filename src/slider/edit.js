/**
 * WordPress dependencies
 */
import {
	useInnerBlocksProps,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { select } from '@wordpress/data';
import {
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Navigation, Pagination, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCards, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMemo } from '@wordpress/element';

// Template.
const template = [ [ 'hizzle-slider/slide', {} ], [ 'hizzle-slider/slide', {} ], [ 'hizzle-slider/slide', {} ] ];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		centeredSlides,
		loop,
		pagination,
		showArrows,
		adaptHeight,
		direction,
		effect,
		slidesPerView,
		speed,
		autoplay,
	} = attributes;
	const insertedBlocks = useMemo( () => select( 'core/block-editor' ).getBlocks( clientId ), [ clientId ] );
	const modules        = [ EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCards, EffectCreative ];
	const atts           = {};

	// Prepare innner blocks.
	const { children, ...innerBlocksProps } = useInnerBlocksProps( useBlockProps(), {
		allowedBlocks: ['hizzle-slider/slide'],
		template,
	} );

	// Add pagination.
	if ( pagination ) {
		modules.push( Pagination );
		atts.pagination = {'el': '.swiper-pagination'};
	}

	// Add navigation arrows.
	if ( showArrows ) {
		modules.push( Navigation );
		atts.navigation = {'nextEl': '.swiper-button-next', 'prevEl': '.swiper-button-prev'};
	}

	// Add autoplay.
	if ( parseInt( autoplay ) > 0 ) {
		modules.push( Autoplay );
		atts.autoplay = {'delay': autoplay};
	}

	console.log(innerBlocksProps)
	// Display the form.
	return (
		<>
			<InspectorControls>

				<PanelBody title={ __( 'Slider Settings', 'hizzle-slider' ) }>

					<ToggleControl
						label={ __( 'Adapt slider height to the height of the currently active slide', 'hizzle-slider' ) }
						checked={ adaptHeight ? true : false }
						onChange={ adaptHeight => setAttributes( { adaptHeight } ) }
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

					<ToggleControl
						label={ __( 'Loop slides', 'hizzle-slider' ) }
						checked={ loop ? true : false }
						onChange={ loop => setAttributes( { loop } ) }
					/>

					<ToggleControl
						label={ __( 'Center active slide', 'hizzle-slider' ) }
						checked={ centeredSlides ? true : false }
						onChange={ centeredSlides => setAttributes( { centeredSlides } ) }
					/>

					<SelectControl
						label={ __( 'Sliding Direction', 'hizzle-slider' ) }
						value={ direction }
						onChange={ direction => setAttributes( { direction } ) }
						options={ [
							{ label: __( 'Horizontal', 'hizzle-slider' ), value: 'horizontal' },
							{ label: __( 'Vertical', 'hizzle-slider' ), value: 'vertical' },
						] }
					/>

					<SelectControl
						label={ __( 'Sliding Effect', 'hizzle-slider' ) }
						value={ effect }
						onChange={ effect => setAttributes( { effect } ) }
						options={ [
							{ label: __( 'Slide', 'hizzle-slider' ), value: 'slide' },
							{ label: __( 'Fade', 'hizzle-slider' ), value: 'fade' },
							{ label: __( 'Cube', 'hizzle-slider' ), value: 'cube' },
							{ label: __( 'Coverflow', 'hizzle-slider' ), value: 'coverflow' },
							{ label: __( 'Flip', 'hizzle-slider' ), value: 'flip' },
							{ label: __( 'Creative', 'hizzle-slider' ), value: 'creative' },
							{ label: __( 'Cards', 'hizzle-slider' ), value: 'cards' },
						] }
					/>

					<TextControl
						type="number"
						label={ __( 'Slides per view', 'hizzle-slider' ) }
						value={ slidesPerView }
						onChange={ slidesPerView => setAttributes( { slidesPerView } ) }
					/>

					<TextControl
						type="number"
						label={ __( 'Speed', 'hizzle-slider' ) }
						value={ speed }
						onChange={ speed => setAttributes( { speed } ) }
					/>

					<TextControl
						type="number"
						label={ __( 'Autoplay', 'hizzle-slider' ) }
						help={ __( 'Set to 0 to disable autoplay', 'hizzle-slider' ) }
						value={ autoplay }
						onChange={ autoplay => setAttributes( { autoplay } ) }
					/>
				</PanelBody>

			</InspectorControls>

			<div {...innerBlocksProps}>
				<Swiper
					centeredSlides={centeredSlides}
					loop={loop}
					adaptHeight={adaptHeight}
					direction={direction}
					speed={speed}
					slidesPerView={parseInt(slidesPerView)}
					effect={effect}
					modules={modules}
					{...atts}
				>
					{children}
					<SwiperSlide>
						<Button
							className="add-slide"
							label={ __( 'Add Slide', 'hizzle-slider' ) }
							icon="plus"
							onClick={ () => {
								const newBlock = createBlock( 'hizzle-slider/slide' );
								const newBlocks = [ ...insertedBlocks, newBlock ];
								setAttributes( { content: newBlocks } );
							} }
						/>
					</SwiperSlide>
				</Swiper>

				{pagination && (
					<div className="swiper-pagination"></div>
				)}

				{showArrows && (
					<>
						<div className="swiper-button-prev"></div>
						<div className="swiper-button-next"></div>
					</>
				)}
			</div>
		</>
	);
}

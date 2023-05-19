/**
 * WordPress dependencies
 */
import {
	useInnerBlocksProps,
	InspectorControls,
	useBlockProps,
	Inserter,
} from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { useSelect, dispatch } from '@wordpress/data';
import {
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/**
 * Local dependencies
 */
import {PaginateEdit} from './paginate';
import {ArrowEdit} from './arrows';

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
		speed,
		autoplay,
		currentSlide,
		slideCount,
	} = attributes;

	// Container for the current index.
	const [ currentIndex, setCurrentIndex ] = useState( 0 );

	// Prepare block count and inserted blocks.
	const { blockCount, insertedBlocks } = useSelect( select => ({
		blockCount: select( 'core/block-editor' ).getBlockCount( clientId ),
		insertedBlocks: select( 'core/block-editor' ).getBlocks( clientId ),
	}));

	// Ensure slide count matches block count.
	useEffect( () => {
		if ( blockCount !== slideCount ) {
			setAttributes( { slideCount: blockCount } );
		}
	}, [blockCount] );

	// Prepare innner blocks.
	const { children, ...innerBlocksProps } = useInnerBlocksProps( useBlockProps(), {
		allowedBlocks: ['hizzle-slider/slide'],
		template,
	} );

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
				<div className="hizzle-slider">

					{showArrows && (
						<ArrowEdit
							total={slideCount}
							currentIndex={currentIndex}
							setCurrentIndex={setCurrentIndex}
							isLeft
						/>
					)}

					<div className="hizzle-slider__slides">
						{children}
						<div className="hizzle-slider__slide">
							<Inserter clientId={clientId} />
							<Button
								className="add-slide"
								label={ __( 'Add Slide', 'hizzle-slider' ) }
								icon="plus"
								onClick={ () => {
									const newBlock = createBlock( 'hizzle-slider/slide' );
									const newBlocks = [ ...insertedBlocks, newBlock ];
									dispatch( 'core/block-editor' ).replaceBlocks( clientId, newBlocks );
								} }
							/>
						</div>
					</div>

					{showArrows && (
						<ArrowEdit
							total={slideCount}
							currentIndex={currentIndex}
							setCurrentIndex={setCurrentIndex}
							isLeft={ false }
						/>
					)}

					{pagination && <PaginateEdit total={ blockCount + 1 } currentIndex={ currentIndex } setCurrentIndex={ setCurrentIndex } />}

				</div>
			</div>
		</>
	);
}

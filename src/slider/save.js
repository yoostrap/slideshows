/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Local dependencies
 */
import {Paginate} from './paginate';
import {Arrow} from './arrows';

const Save = ( { attributes } ) => {

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
		slideCount,
		instanceID,
	} = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<div className="hizzle-slider" data-config={JSON.stringify({centeredSlides,loop,pagination,showArrows,adaptHeight,direction,effect,slidesPerView,speed,autoplay})}>

				{showArrows && <Arrow total={slideCount} isLeft />}

				<div className="hizzle-slider__slides">
					<InnerBlocks.Content />
				</div>

				{showArrows && <Arrow total={slideCount} isLeft={false} />}

				{pagination && <Paginate total={ slideCount } />}

			</div>
		</div>
	);
};
export default Save;

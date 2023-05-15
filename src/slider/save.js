/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

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
	} = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<div className="swiper" data-config={JSON.stringify({centeredSlides,loop,pagination,showArrows,adaptHeight,direction,effect,slidesPerView,speed,autoplay})}>
				<div className="swiper-wrapper">
					<InnerBlocks.Content />
				</div>

				{pagination && (
					<div class="swiper-pagination"></div>
				)}

				{showArrows && (
					<>
						<div class="swiper-button-prev"></div>
						<div class="swiper-button-next"></div>
					</>
				)}
			</div>
		</div>
	);
};
export default Save;

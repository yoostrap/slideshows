/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {

	const { slidesPerView, showArrows, autoplay, pagination } = attributes;

	const sliderConfig = {
		'data-per-page': slidesPerView,
		'data-arrows': showArrows ? 'true' : 'false',
		'data-pagination': pagination ? 'true' : 'false',
		'data-autoplay': autoplay ? 'true' : 'false',
	};

	return (
		<div { ...useBlockProps.save() }>
			<section className="splide" {...sliderConfig}>
				<div className="splide__track">
					<ul class="splide__list">
						<InnerBlocks.Content />
					</ul>
				</div>
			</section>
		</div>
	);
};
export default Save;

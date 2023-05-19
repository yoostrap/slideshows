/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {

	const { slidesPerView, showArrows, autoplay, pagination, type } = attributes;

	const perPage         = 'fade' === type ? 1 : parseInt( slidesPerView );
	const slideshowConfig = {
		'data-per-page': perPage,
		'data-auto-height': perPage === 1 ? 'true' : 'false',
		'data-arrows': showArrows ? 'true' : 'false',
		'data-pagination': pagination ? 'true' : 'false',
		'data-autoplay': autoplay ? 'true' : 'false',
		'data-type': type,
	};

	return (
		<div { ...useBlockProps.save() }>
			<section className="splide" {...slideshowConfig}>
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

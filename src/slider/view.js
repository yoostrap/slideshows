/**
 * External dependencies
 */
import domReady from '@wordpress/dom-ready';
import Splide from '@splidejs/splide';

/**
 * Internal dependencies
 */
import './view.scss';

domReady(() => {

	// Init all sliders.
	const sliders = document.querySelectorAll('.wp-block-hizzle-slider-slider .splide');

	// Loop through each slider.
	sliders.forEach((slider) => {
		const config = slider.dataset.config;

		try {
			new Splide(
				slider,
				{
					rewind: true,
					width: '100%',
					perPage: slider.dataset.perPage ? parseInt(slider.dataset.perPage) : 1,
					arrows: slider.dataset.arrows ? slider.dataset.arrows === 'true' : true,
					pagination: slider.dataset.pagination ? slider.dataset.pagination === 'true' : true,
					autoplay: slider.dataset.autoplay ? slider.dataset.autoplay === 'true' : true,
				}
			).mount();
			console.log( config );
		} catch (e) {
			console.error(e);
		}
	});
});

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
	const sliders = document.querySelectorAll('.wp-block-hizzle-slider-slider > .hizzle-slider');

	// Loop through each slider.
	sliders.forEach((slider) => {
		const config = slider.dataset.config;

		try {
			new Splide( slider ).mount();
			console.log( config );
		} catch (e) {
			console.error(e);
		}
	});
});

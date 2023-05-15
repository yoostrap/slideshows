/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';
import Swiper, {Navigation, Pagination, Autoplay} from 'swiper';

/**
 * Internal dependencies
 */
import './view.scss';

domReady(() => {

	// Init all sliders.
	const sliders = document.querySelectorAll('.wp-block-hizzle-slider-slider > .swiper');

	// Loop through each slider.
	sliders.forEach((slider) => {
		const config = slider.dataset.config;

		try {

			// Get the config.
			const {pagination,showArrows,autoplay, ...extra} = JSON.parse(config);
			const options = {...extra, modules: []};

			// If we need pagination.
			if ( pagination ) {
				options.modules.push( Pagination );
				options.pagination = {'el': '.swiper-pagination'};
			}

			// Navigation arrows.
			if ( showArrows ) {
				options.modules.push( Navigation );
				options.navigation = {'nextEl': '.swiper-button-next', 'prevEl': '.swiper-button-prev'};
			}

			// Autoplay.
			if ( parseInt( autoplay ) > 0 ) {
				options.modules.push( Autoplay );
				options.autoplay = {'delay': autoplay};
			}
console.log({slider, options})
			const sliderSwiper = new Swiper( slider, options );
			console.log(sliderSwiper);
		} catch (e) {
			console.error(e);
		}
	});
});

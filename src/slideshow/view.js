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

	// Init all slideshows.
	const slideshows = document.querySelectorAll('.wp-block-hizzle-slideshows-slideshow .splide');

	// Loop through each slideshow.
	slideshows.forEach((slideshow) => {

		try {
			new Splide(
				slideshow,
				{
					rewind: true,
					width: '100%',
					gap: '1em',
					autoHeight:  slideshow.dataset.autoHeight ? slideshow.dataset.autoHeight === 'true' : false,
					perPage: slideshow.dataset.perPage ? parseInt(slideshow.dataset.perPage) : 1,
					arrows: slideshow.dataset.arrows ? slideshow.dataset.arrows === 'true' : true,
					pagination: slideshow.dataset.pagination ? slideshow.dataset.pagination === 'true' : true,
					autoplay: slideshow.dataset.autoplay ? slideshow.dataset.autoplay === 'true' : true,
					type: slideshow.dataset.type ? slideshow.dataset.type : 'slide',
				}
			).mount();
		} catch (e) {
			console.error(e);
		}
	});
});

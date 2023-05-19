/**
 * Renders a pagination arrow in editor.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isLeft - Whether the arrow is left or right.
 * @param {number} props.currentIndex - Index of the current slide.
 * @param {number} props.total - Total number of slides.
 * @param {Function} props.setCurrentIndex - Sets the current index.
 */
export function ArrowEdit( { isLeft, currentIndex, setCurrentIndex, total } ) {

	// Click handler.
	const onClick = ( event ) => {
		event.preventDefault();

		let newIndex = isLeft ? currentIndex - 1 : currentIndex + 1;

		// It should be 0 or above.
		if ( newIndex < 0 ) {
			newIndex = total - 1;
		}

		// It should be less than the total.
		if ( newIndex >= total ) {
			newIndex = 0;
		}

		// Update the current index.
		setCurrentIndex( newIndex );
	}

	// Abort if less than 2 slides.
	if ( total < 2 ) {
		return null;
	}

	const className = isLeft ? 'hizzle-slider-button-prev' : 'hizzle-slider-button-next';

	return (
		<button className={className} onClick={onClick}>
			<span className="screen-reader-text">{isLeft ? 'Previous' : 'Next'}</span>
			<span aria-hidden="true" className="hizzle-slider-chevron"></span>
		</button>
	)
}

/**
 * Renders a pagination arrow in the front end.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isLeft - Whether the arrow is left or right.
 * @param {number} props.total - The total number of slides.
 */
export function Arrow( { isLeft, total } ) {

	// Abort if less than 2 slides.
	if ( total < 2 ) {
		return null;
	}

	const className = isLeft ? 'hizzle-slider-button-prev' : 'hizzle-slider-button-next';

	return (
		<button className={className}>
			<span className="screen-reader-text">{isLeft ? 'Previous' : 'Next'}</span>
			<span aria-hidden="true" className="hizzle-slider-chevron"></span>
		</button>
	)
}

/**
 * Renders the pagination in editor.
 *
 * @param {Object} props - Component props.
 * @param {number} props.total - Total number of slides.
 * @param {number} props.currentIndex - Index of the current slide.
 * @param {Function} props.setCurrentIndex - Sets the current index.
 */
export function PaginateEdit( { currentIndex, setCurrentIndex, total } ) {

    // Abort if less than 2 slides.
    if ( total < 2 ) {
        return null;
    }

    const slides = Array.from( { length: total }, ( v, i ) => i );
    return (
        <div className="hizzle-slider-navigation">
            { slides.map( ( index ) => (
                <a
                    key={ index }
                    className={ `hizzle-slider-navigation__link ${ index === currentIndex ? 'hizzle-is-active' : '' }` }
                    href="#"
                    aria-label={ `Slide ${ index + 1 }` }
                    onClick={ () => setCurrentIndex( index ) }
                >
                    <span className="screen-reader-text">{ `Slide ${ index + 1 }` }</span>
                </a>
            ) ) }
        </div>
    )
}

/**
 * Renders the pagination in frontend.
 *
 * @param {Object} props - Component props.
 * @param {number} props.total - Total number of slides.
 */
export function Paginate( { total } ) {

    // Abort if less than 2 pages.
    if ( total < 2 ) {
        return null;
    }

    const slides = Array.from( { length: total }, ( v, i ) => i );
    return (
        <div className="hizzle-slider-navigation">
            { slides.map( ( index ) => (
                <a
                    key={ index }
                    className={ `hizzle-slider-navigation__link ${ index === 0 ? 'hizzle-is-active' : '' }` }
                    href="#"
                    aria-label={ `Slide ${ index + 1 }` }
                >
                    <span className="screen-reader-text">{ `Slide ${ index + 1 }` }</span>
                </a>
            ) ) }
        </div>
    )
}

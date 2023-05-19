/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/slider/arrows.js":
/*!******************************!*\
  !*** ./src/slider/arrows.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arrow": () => (/* binding */ Arrow),
/* harmony export */   "ArrowEdit": () => (/* binding */ ArrowEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Renders a pagination arrow in editor.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isLeft - Whether the arrow is left or right.
 * @param {number} props.currentIndex - Index of the current slide.
 * @param {number} props.total - Total number of slides.
 * @param {Function} props.setCurrentIndex - Sets the current index.
 */
function ArrowEdit(_ref) {
  let {
    isLeft,
    currentIndex,
    setCurrentIndex,
    total
  } = _ref;
  // Click handler.
  const onClick = event => {
    event.preventDefault();
    let newIndex = isLeft ? currentIndex - 1 : currentIndex + 1;

    // It should be 0 or above.
    if (newIndex < 0) {
      newIndex = total - 1;
    }

    // It should be less than the total.
    if (newIndex >= total) {
      newIndex = 0;
    }

    // Update the current index.
    setCurrentIndex(newIndex);
  };

  // Abort if less than 2 slides.
  if (total < 2) {
    return null;
  }
  const className = isLeft ? 'hizzle-slider-button-prev' : 'hizzle-slider-button-next';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: className,
    onClick: onClick
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, isLeft ? 'Previous' : 'Next'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true",
    className: "hizzle-slider-chevron"
  }));
}

/**
 * Renders a pagination arrow in the front end.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isLeft - Whether the arrow is left or right.
 * @param {number} props.total - The total number of slides.
 */
function Arrow(_ref2) {
  let {
    isLeft,
    total
  } = _ref2;
  // Abort if less than 2 slides.
  if (total < 2) {
    return null;
  }
  const className = isLeft ? 'hizzle-slider-button-prev' : 'hizzle-slider-button-next';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, isLeft ? 'Previous' : 'Next'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true",
    className: "hizzle-slider-chevron"
  }));
}

/***/ }),

/***/ "./src/slider/edit.js":
/*!****************************!*\
  !*** ./src/slider/edit.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _paginate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginate */ "./src/slider/paginate.js");
/* harmony import */ var _arrows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./arrows */ "./src/slider/arrows.js");

/**
 * WordPress dependencies
 */







/**
 * Local dependencies
 */



// Template.
const template = [['hizzle-slider/slide', {}], ['hizzle-slider/slide', {}], ['hizzle-slider/slide', {}]];
function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    clientId
  } = _ref;
  const {
    centeredSlides,
    loop,
    pagination,
    showArrows,
    adaptHeight,
    direction,
    effect,
    speed,
    autoplay,
    currentSlide,
    slideCount
  } = attributes;

  // Container for the current index.
  const [currentIndex, setCurrentIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  // Prepare block count and inserted blocks.
  const {
    blockCount,
    insertedBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    blockCount: select('core/block-editor').getBlockCount(clientId),
    insertedBlocks: select('core/block-editor').getBlocks(clientId)
  }));

  // Ensure slide count matches block count.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (blockCount !== slideCount) {
      setAttributes({
        slideCount: blockCount
      });
    }
  }, [blockCount]);

  // Prepare innner blocks.
  const {
    children,
    ...innerBlocksProps
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)((0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(), {
    allowedBlocks: ['hizzle-slider/slide'],
    template
  });

  // Display the form.
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Slider Settings', 'hizzle-slider')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Adapt slider height to the height of the currently active slide', 'hizzle-slider'),
    checked: adaptHeight ? true : false,
    onChange: adaptHeight => setAttributes({
      adaptHeight
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Show navigation arrows', 'hizzle-slider'),
    checked: showArrows ? true : false,
    onChange: showArrows => setAttributes({
      showArrows
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Show pagination', 'hizzle-slider'),
    checked: pagination ? true : false,
    onChange: pagination => setAttributes({
      pagination
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Loop slides', 'hizzle-slider'),
    checked: loop ? true : false,
    onChange: loop => setAttributes({
      loop
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Center active slide', 'hizzle-slider'),
    checked: centeredSlides ? true : false,
    onChange: centeredSlides => setAttributes({
      centeredSlides
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Sliding Direction', 'hizzle-slider'),
    value: direction,
    onChange: direction => setAttributes({
      direction
    }),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Horizontal', 'hizzle-slider'),
      value: 'horizontal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Vertical', 'hizzle-slider'),
      value: 'vertical'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Sliding Effect', 'hizzle-slider'),
    value: effect,
    onChange: effect => setAttributes({
      effect
    }),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Slide', 'hizzle-slider'),
      value: 'slide'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Fade', 'hizzle-slider'),
      value: 'fade'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Cube', 'hizzle-slider'),
      value: 'cube'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Coverflow', 'hizzle-slider'),
      value: 'coverflow'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Flip', 'hizzle-slider'),
      value: 'flip'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Creative', 'hizzle-slider'),
      value: 'creative'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Cards', 'hizzle-slider'),
      value: 'cards'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    type: "number",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Slides per view', 'hizzle-slider'),
    value: slidesPerView,
    onChange: slidesPerView => setAttributes({
      slidesPerView
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    type: "number",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Speed', 'hizzle-slider'),
    value: speed,
    onChange: speed => setAttributes({
      speed
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    type: "number",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Autoplay', 'hizzle-slider'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Set to 0 to disable autoplay', 'hizzle-slider'),
    value: autoplay,
    onChange: autoplay => setAttributes({
      autoplay
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hizzle-slider"
  }, showArrows && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_arrows__WEBPACK_IMPORTED_MODULE_7__.ArrowEdit, {
    total: slideCount,
    currentIndex: currentIndex,
    setCurrentIndex: setCurrentIndex,
    isLeft: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hizzle-slider__slides"
  }, children, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hizzle-slider__slide"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.Inserter, {
    clientId: clientId
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "add-slide",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Add Slide', 'hizzle-slider'),
    icon: "plus",
    onClick: () => {
      const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.createBlock)('hizzle-slider/slide');
      const newBlocks = [...insertedBlocks, newBlock];
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/block-editor').replaceBlocks(clientId, newBlocks);
    }
  }))), showArrows && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_arrows__WEBPACK_IMPORTED_MODULE_7__.ArrowEdit, {
    total: slideCount,
    currentIndex: currentIndex,
    setCurrentIndex: setCurrentIndex,
    isLeft: false
  }), pagination && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_paginate__WEBPACK_IMPORTED_MODULE_6__.PaginateEdit, {
    total: blockCount + 1,
    currentIndex: currentIndex,
    setCurrentIndex: setCurrentIndex
  }))));
}

/***/ }),

/***/ "./src/slider/paginate.js":
/*!********************************!*\
  !*** ./src/slider/paginate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Paginate": () => (/* binding */ Paginate),
/* harmony export */   "PaginateEdit": () => (/* binding */ PaginateEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Renders the pagination in editor.
 *
 * @param {Object} props - Component props.
 * @param {number} props.total - Total number of slides.
 * @param {number} props.currentIndex - Index of the current slide.
 * @param {Function} props.setCurrentIndex - Sets the current index.
 */
function PaginateEdit(_ref) {
  let {
    currentIndex,
    setCurrentIndex,
    total
  } = _ref;
  // Abort if less than 2 slides.
  if (total < 2) {
    return null;
  }
  const slides = Array.from({
    length: total
  }, (v, i) => i);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hizzle-slider-navigation"
  }, slides.map(index => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    key: index,
    className: `hizzle-slider-navigation__link ${index === currentIndex ? 'hizzle-is-active' : ''}`,
    href: "#",
    "aria-label": `Slide ${index + 1}`,
    onClick: () => setCurrentIndex(index)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, `Slide ${index + 1}`))));
}

/**
 * Renders the pagination in frontend.
 *
 * @param {Object} props - Component props.
 * @param {number} props.total - Total number of slides.
 */
function Paginate(_ref2) {
  let {
    total
  } = _ref2;
  // Abort if less than 2 pages.
  if (total < 2) {
    return null;
  }
  const slides = Array.from({
    length: total
  }, (v, i) => i);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hizzle-slider-navigation"
  }, slides.map(index => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    key: index,
    className: `hizzle-slider-navigation__link ${index === 0 ? 'hizzle-is-active' : ''}`,
    href: "#",
    "aria-label": `Slide ${index + 1}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, `Slide ${index + 1}`))));
}

/***/ }),

/***/ "./src/slider/save.js":
/*!****************************!*\
  !*** ./src/slider/save.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginate */ "./src/slider/paginate.js");
/* harmony import */ var _arrows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arrows */ "./src/slider/arrows.js");

/**
 * WordPress dependencies
 */


/**
 * Local dependencies
 */


const Save = _ref => {
  let {
    attributes
  } = _ref;
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
    instanceID
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hizzle-slider",
    "data-config": JSON.stringify({
      centeredSlides,
      loop,
      pagination,
      showArrows,
      adaptHeight,
      direction,
      effect,
      slidesPerView,
      speed,
      autoplay
    })
  }, showArrows && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_arrows__WEBPACK_IMPORTED_MODULE_3__.Arrow, {
    total: slideCount,
    isLeft: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hizzle-slider__slides"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)), showArrows && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_arrows__WEBPACK_IMPORTED_MODULE_3__.Arrow, {
    total: slideCount,
    isLeft: false
  }), pagination && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_paginate__WEBPACK_IMPORTED_MODULE_2__.Paginate, {
    total: slideCount
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/slider/block.json":
/*!*******************************!*\
  !*** ./src/slider/block.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"hizzle-slider/slider","title":"Slider","description":"Displays content in a slider.","category":"design","keywords":["slider","slide","testimonial","quote","gallery"],"icon":"page","version":"1.0.0","textdomain":"hizzle-slider","attributes":{"autoHeight":{"type":"boolean","default":false},"centeredSlides":{"type":"boolean","default":false},"direction":{"type":"string","default":"horizontal","enum":["horizontal","vertical"]},"effect":{"type":"string","default":"slide","enum":["slide","fade","cube","coverflow","flip","creative","cards"]},"loop":{"type":"boolean","default":false},"slidesPerView":{"type":"number","default":1},"speed":{"type":"number","default":300},"showArrows":{"type":"boolean","default":true},"pagination":{"type":"boolean","default":true},"autoplay":{"type":"number","default":0},"slideCount":{"type":"number","default":0},"currentSlide":{"type":"number","default":0}},"providesContext":{"hizzle-slider/currentSlide":"currentSlide"},"supports":{"anchor":true,"spacing":{"margin":true}},"editorScript":"file:./index.js","script":"file:./view.js","style":"file:./view.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/slider/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/slider/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/slider/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/slider/save.js");
/**
 * WordPress dependencies.
 */


/**
 * Internal dependencies
 */



const {
  name,
  icon
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  icon: {
    src: icon,
    foreground: '#0080FF'
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
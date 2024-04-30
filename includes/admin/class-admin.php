<?php
namespace Hizzle\Slideshows\admin;

/*
 * Admin class
 */

if ( ! class_exists( 'Hizzle_Slideshows_Admin ' ) ) {

	/**
	 * Class FooGallery_Admin
	 */
	class Hizzle_Slideshows_Admin {

		/**
		 *
		 */
		function __construct() {
			//init some other actions
			add_action( 'init', array( $this, 'init' ) );
			new HizzleSlideshowsMenu();
		}

		function init() {			
		}
	}
}

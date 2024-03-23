<?php

if ( ! class_exists( 'HizzleSlideshowsMenu' ) ) {
	/**
	 * Class HizzleSlideshowsMenu
	 *
	 * Adds the admin menu for the Hizzle Slideshows plugin.
	 */
	class HizzleSlideshowsMenu {

		/**
		 * HizzleSlideshowsMenu constructor.
		 *
		 * Adds an action hook to create the admin menu.
		 */
		public function __construct() {
			add_action( 'admin_menu', array( $this, 'add_menu' ) );
		}

		/**
		 * Add the menu and submenu items.
		 */
		public function add_menu() {
			// Add the main menu item.
			$position = 26;
			add_menu_page(
				__( hizzle_slideshows_plugin_name(), 'hizzle-slideshows' ),
				__( hizzle_slideshows_plugin_name(), 'hizzle-slideshows' ),
				'manage_options',
				'hizzle_slideshows',
				'hizzle_slideshows_help_page',
				'dashicons-slides',
				$position
			);
			add_submenu_page(
				'hizzle_slideshows',
				__( 'Help', 'hizzle-slideshows' ),
				__( 'Help', 'hizzle-slideshows' ),
				'manage_options',
				'hizzle_slideshows_help',
				'hizzle_slideshows_help_page'
			);
			remove_submenu_page( 'hizzle_slideshows', 'hizzle_slideshows' );			
		}
	}
}

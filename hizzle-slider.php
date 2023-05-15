<?php
/**
 * Plugin Name: Hizzle Slider
 * Plugin URI: https://hizzle.co/slider
 * Description: Easily slide any WordPress editor blocks.
 * Version: 1.0.0
 * Author: Hizzle
 * Author URI: https://hizzle.co
 * Text Domain: hizzle-slider
 * Domain Path: /languages/
 * Requires at least: 5.5
 * Requires PHP: 7.0
 *
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
 */
function hizzle_slider_load_textdomain() {
	load_plugin_textdomain( 'hizzle-slider', false, basename( __DIR__ ) . '/languages' );
}
add_action( 'init', 'hizzle_slider_load_textdomain' );

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function hizzle_slider_register_block() {

	// Register the block by passing the location of block.json to register_block_type.
	register_block_type( plugin_dir_path( __FILE__ ) . 'build/slider' );
    register_block_type( plugin_dir_path( __FILE__ ) . 'build/slide' );

	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations( 'hizzle-slider-slider', 'hizzle-slider' );
	}
}
add_action( 'init', 'hizzle_slider_register_block' );

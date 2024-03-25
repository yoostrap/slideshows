<?php
/**
 * Plugin Name: Hizzle Slideshows
 * Plugin URI: https://hizzle.co/slideshows
 * Description: Convert anything into a slideshow.
 * Version: 1.0.3
 * Author: Hizzle
 * Author URI: https://hizzle.co
 * Text Domain: hizzle-slideshows
 * Domain Path: /languages/
 * Requires at least: 6.0
 * Requires PHP: 7.0
 *
 */

defined( 'ABSPATH' ) || exit;

// Define some essentials constants.
if ( !defined( 'HSS_SLUG' ) ) {
    define( 'HSS_SLUG', 'hizzle-slideshows' );
    define( 'HSS_HANDLE', 'hizzle-slideshows' );
    define( 'HSS_DIR', __DIR__ );
    define( 'HSS_PATH', plugin_dir_path( __FILE__ ) );
    define( 'HSS_URL', plugin_dir_url( __FILE__ ) );
    define( 'HSS_ASSETS_URL', HSS_URL . 'assets/' );
    define( 'HSS_FILE', __FILE__ );
    define( 'HSS_VERSION', '1.0.3' );
    define( 'HSS_MIN_PHP', '7.0.0' );
    define( 'HSS_MIN_WP', '6.0.0' );
}

// Include other essential constants.
require_once HSS_PATH . 'includes/constants.php';
require_once HSS_PATH . 'includes/includes.php';
require_once HSS_PATH . 'includes/functions.php';

/**
 * Load all translations for our plugin from the MO file.
 */
function hizzle_slideshows_load_textdomain() {
	load_plugin_textdomain( 'hizzle-slideshows', false, basename( __DIR__ ) . '/languages' );
}
add_action( 'init', 'hizzle_slideshows_load_textdomain' );

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function hizzle_slideshows_register_block() {

	// Register the block by passing the location of block.json to register_block_type.
	register_block_type( HSS_PATH . 'build/slideshow' );
    register_block_type( HSS_PATH . 'build/slide' );

	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations( 'hizzle-slideshows-slideshow', 'hizzle-slideshows' );
	}
}
add_action( 'init', 'hizzle_slideshows_register_block' );

/**
 * Add custom action link to the plugin's action links.
 *
 * @param array $links Existing plugin action links.
 * @return array Modified plugin action links.
 */
function hizzle_slideshows_plugin_listing_links( $links ) {
	$settings_link     = '<a href="' . admin_url( 'admin.php?page=hizzle_slideshows_help' ) . '">' . esc_html__( 'Help', 'hizzle-slideshows' ) . '</a>';
	array_push( $links, $settings_link );
	return $links;
}
add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), 'hizzle_slideshows_plugin_listing_links' );

/**
 * Redirect to the settings page after plugin activation.
 */
function hizzle_slideshows_redirect_to_help_page() {
	if ( is_admin() && get_option( 'hizzle_slideshows_activation_redirect', false ) ) {
		delete_option( 'hizzle_slideshows_activation_redirect' );
		wp_safe_redirect( admin_url( 'admin.php?page=hizzle_slideshows_help' ) );
		exit;
	}
}
register_activation_hook( __FILE__, 'hizzle_slideshows_set_activation_redirect' );

/**
 * Set the activation redirect flag.
 */
function hizzle_slideshows_set_activation_redirect() {
	update_option( 'hizzle_slideshows_activation_redirect', true );
}
add_action( 'admin_init', 'hizzle_slideshows_redirect_to_help_page' );

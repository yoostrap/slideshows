<?php
/**
 * Plugin Name: Hizzle Slideshows
 * Plugin URI: https://hizzle.co/slideshows
 * Description: Convert anything into a slideshow.
 * Version: 1.0.4
 * Author: Hizzle
 * Author URI: https://hizzle.co
 * Text Domain: hizzle-slideshows
 * Domain Path: /languages/
 * Requires at least: 6.0
 * Requires PHP: 7.0
 *
 */

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'hs_fs' ) ) {
    // Create a helper function for easy SDK access.
    function hs_fs() {
        global $hs_fs;

        if ( ! isset( $hs_fs ) ) {
            // Activate multisite network integration.
            if ( ! defined( 'WP_FS__PRODUCT_15268_MULTISITE' ) ) {
                define( 'WP_FS__PRODUCT_15268_MULTISITE', true );
            }

            // Include Freemius SDK.
            require_once dirname(__FILE__) . '/freemius/start.php';

            $hs_fs = fs_dynamic_init( array(
                'id'                  => '15268',
                'slug'                => 'hizzle-slideshows',
                'type'                => 'plugin',
                'public_key'          => 'pk_3917799e2e105350f711f9e679a9d',
                'is_premium'          => false,
                'has_addons'          => false,
                'has_paid_plans'      => false,
                'menu'                => array(
                    'slug'           => 'hizzle-slideshows',
                    'first-path'     => 'admin.php?page=hizzle_slideshows_help',
                    'network'        => true,
                ),
            ) );
        }

        return $hs_fs;
    }

    // Init Freemius.
    hs_fs();
    // Signal that SDK was initiated.
    do_action( 'hs_fs_loaded' );
}

// Define some essentials constants.
if ( !defined( 'HSS_SLUG' ) ) {
    define( 'HSS_SLUG', 'hizzle-slideshows' );
    define( 'HSS_HANDLE', 'hizzle-slideshows' );
    define( 'HSS_DIR', __DIR__ );
    define( 'HSS_PATH', plugin_dir_path( __FILE__ ) );
    define( 'HSS_URL', plugin_dir_url( __FILE__ ) );
    define( 'HSS_ASSETS_URL', HSS_URL . 'assets/' );
    define( 'HSS_FILE', __FILE__ );
    define( 'HSS_VERSION', '1.0.4' );
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
    // Retrieve the selected user role from the settings
    $allowed_role = hizzle_slideshows_get_setting( 'slideshow_creator_role' );

    // Check if the allowed role is set to "No Default" (empty)
    if ( $allowed_role === '' ) {
        // If set to "No Default", allow all users to create a slideshow
        register_block_type( HSS_PATH . 'build/slideshow' );
        register_block_type( HSS_PATH . 'build/slide' );
    } else {
        // Get the current user's role
        $current_user = wp_get_current_user();
        $current_user_roles = $current_user->roles;

        // Check if the current user's role matches the allowed role
        if ( ! in_array( $allowed_role, $current_user_roles ) ) {
            // If not allowed, unregister the slideshow block
            unregister_block_type( 'hizzle-slideshows/slideshow' );
        } else {
            // If allowed, register the block
            register_block_type( HSS_PATH . 'build/slideshow' );
            register_block_type( HSS_PATH . 'build/slide' );
        }
    }

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

<?php
/**
 * Plugin Name: Hizzle Slideshows
 * Plugin URI: https://yoostrap.com/slideshows/
 * Description: Convert anything into a slideshow.
 * Version: 1.0.5
 * Author: Hizzle
 * Author URI: https://yoostrap.com/
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
    define( 'HSS_VERSION', '1.0.3' );
    define( 'HSS_MIN_PHP', '7.0.0' );
    define( 'HSS_MIN_WP', '6.0.0' );
}

// Include other essential constants.
require_once HSS_PATH . 'includes/constants.php';
require_once HSS_PATH . 'includes/functions.php';
require_once HSS_PATH . 'vendor/autoload.php';

function hizzle_slideshows() {
    return \Hizzle\Slideshows\Hizzle_Slideshows_Plugin::get_instance();
}

hizzle_slideshows();
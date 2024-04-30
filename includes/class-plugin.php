<?php

namespace Hizzle\Slideshows;

/**
 * Contains the main plugin class.
 *
 * @since   1.0.0
 */

defined( 'ABSPATH' ) || exit;

class Hizzle_Slideshows_Plugin {
    private static $instance;

    public static function get_instance() {
        if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Hizzle_Slideshows_Plugin ) ) {
            self::$instance = new Hizzle_Slideshows_Plugin();
        }

        return self::$instance;
    }

    private function __construct() {
        add_action( 'init', array( $this, 'hizzle_slideshows_load_textdomain' ) );
        add_action( 'init', array( $this, 'hizzle_slideshows_register_block' ) );
        add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), array( $this, 'hizzle_slideshows_plugin_listing_links' ) );
        
        if ( is_admin() ) {
            new \Hizzle\Slideshows\admin\Hizzle_Slideshows_Admin();
        }
    }

    /**
     * Load all translations for our plugin from the MO file.
     */
    function hizzle_slideshows_load_textdomain() {
        load_plugin_textdomain( 'hizzle-slideshows', false, basename( __DIR__ ) . '/languages' );
    }

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

}

<?php
/**
 * Returns the name of the plugin. (Allows the name to be overridden from extensions or functions.php)
 * @return string
 */
function hizzle_slideshows_plugin_name() {
	return apply_filters( 'hizzle_slideshows_plugin_name', 'Hizzle Slideshows' );
}

/**
 * Returns the top level menu slug for the plugin. (Allows the slug to be overridden from extensions or functions.php)
 * @return string
 */
function hizzle_slideshows_top_level_menu_slug() {
    return apply_filters( 'hizzle_slideshows_top_level_menu_slug', 'hizzle-slideshows' );
}

/**
 * Returns the dashicon for the plugin. (Allows the dashicon to be overridden from extensions or functions.php)
 * @return string
 */
function hizzle_slideshows_dashicons() {
    return apply_filters( 'hizzle_slideshows_dashicons', 'dashicons-slides' );
}

/**
 * Display the help page for the plugin.
 */
function hizzle_slideshows_help_page() {
    require_once HSS_PATH . 'includes/views/view-help.php';
}

/**
 * Retrieve setting value by ID.
 *
 * @param string $setting_id The ID of the setting.
 * @return mixed The value of the setting.
 */
function hizzle_slideshows_get_setting( $setting_id ) {
    return get_option( $setting_id );
}

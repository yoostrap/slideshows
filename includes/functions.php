<?php
/**
 * Returns the name of the plugin. (Allows the name to be overridden from extensions or functions.php)
 * @return string
 */
function hizzle_slideshows_plugin_name() {
	return apply_filters( 'hizzle_slideshows_plugin_name', 'Hizzle Slideshows' );
}

function hizzle_slideshows_help_page() {
    require_once HSS_PATH . 'includes/views/view-help.php';
}
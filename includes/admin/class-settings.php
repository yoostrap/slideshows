<?php
/**
 * Admin settings class
 */
if ( ! class_exists( 'Hizzle_Slideshows_Admin_Settings' ) ) {
	/**
	 * Class Hizzle_Slideshows_Admin_Settings
	 *
	 * This class is used to manage the settings of the plugin.
	 */
	class Hizzle_Slideshows_Admin_Settings {
		private $settings = array();

		public function __construct() {
			add_action( 'admin_menu', array( $this, 'add_submenu' ) );
			$this->register_settings( array() );
			add_action( 'admin_init', array( $this, 'initialize_settings' ) );
		}

		/**
		 * Add submenu for settings.
		 */
		public function add_submenu() {
			add_submenu_page(
				hizzle_slideshows_top_level_menu_slug(),
				__( 'Settings', 'hizzle-slideshows' ),
				__( 'Settings', 'hizzle-slideshows' ),
				'manage_options',
				'hizzle_slideshows_settings',
				array( $this, 'display_settings_page' )
			);
		}

		/**
		 * Register settings.
		 *
		 * @param array $registered_settings Array of registered settings.
		 * @return array
		 */
		public function register_settings( $registered_settings ) {
			$new_settings = array(
				array(
					'id'      => 'slideshow_creator_role',
					'title'   => __( 'Slideshow creator role', 'hizzle-slideshows' ),
					'desc'    => __( 'Select the user role allowed to create slideshows', 'hizzle-slideshows' ),
					'default' => '',
					'type'    => 'select',
					'choices' => $this->hizzle_slideshows_get_roles(),
					'tab'     => 'general',
					'section' => __( 'Admin', 'hizzle-slideshows' )
				),
				// We will Add more settings as needed in the future.
			);

			// Allow modification of the settings array through a filter hook
			$new_settings = apply_filters( 'hizzle_slideshows_admin_settings', $new_settings );

			$this->settings = $new_settings;

			return $this->settings;
		}

		/**
		 * Initialize settings.
		 */
		public function initialize_settings() {
			foreach ( $this->settings as $setting ) {
				// Register setting
				register_setting( 'hizzle_slideshows_settings', $setting['id'] );

				// Add settings section
				add_settings_section(
					$setting['id'],
					$setting['section'],
					function() { }, // Empty callback, as we don't need to output anything for the section
					'hizzle_slideshows_settings_page'
				);

				// Add settings field
				add_settings_field(
					$setting['id'],
					$setting['title'],
					array( $this, 'render_setting_field' ),
					'hizzle_slideshows_settings_page',
					$setting['id'],
					array( 'id' => $setting['id'], 'type' => $setting['type'], 'choices' => $setting['choices'], 'desc' => $setting['desc'] )
				);
			}
		}

		/**
		 * Render setting field.
		 *
		 * @param array $args Arguments passed from add_settings_field function.
		 */
		public function render_setting_field( $args ) {
			$setting_id = $args['id'];
			$setting_type = $args['type'];
			$setting_choices = $args['choices'];
			$setting_desc = $args['desc'];

			if ( $setting_type === 'select' ) {
				echo '<select name="' . $setting_id . '" id="' . $setting_id . '">';
				foreach ( $setting_choices as $value => $label ) {
					echo '<option value="' . $value . '" ' . selected( get_option( $setting_id ), $value, false ) . '>' . $label . '</option>';
				}
				echo '</select>';
			} else {
				echo '<input type="' . $setting_type . '" name="' . $setting_id . '" id="' . $setting_id . '" value="' . esc_attr( get_option( $setting_id, '' ) ) . '" />';
			}

			echo '<p class="description">' . $setting_desc . '</p>';
		}

		/**
		 * Callback function to display the settings page.
		 */
		public function display_settings_page() {
			// You can add your settings page content here.
			?>
			<div class="wrap">
				<h2><?php _e( 'Hizzle Slideshows Settings', 'hizzle-slideshows' ); ?></h2>
				<form method="post" action="options.php">

					<?php 
					// Output security fields for the registered setting section 'hizzle_slideshows_settings'
					settings_fields( 'hizzle_slideshows_settings' );

					// Output settings sections and their fields
					do_settings_sections( 'hizzle_slideshows_settings_page' );
					?>
					
					<?php submit_button(); ?>
				</form>
			</div>
			<?php
		}
		
		/**
		 * Get roles.
		 *
		 * @return array
		 */
		private function hizzle_slideshows_get_roles() {
			$roles        = get_editable_roles();
			$role_choices = array(
				'' => __( 'No Default', 'foogallery' )
			);

			foreach ( $roles as $role_slug => $role_data ) {
				$role_choices[ $role_slug ] = $role_data['name'];
			}

			/**
			 * Filter the role choices array before returning.
			 *
			 * @param array $role_choices The role choices array.
			 */
			return apply_filters( 'hizzle_slideshows_get_user_roles', $role_choices );
		}

	}
}
new Hizzle_Slideshows_Admin_Settings();

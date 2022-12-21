<?php
/**
 * Plugin Name:       ThemeZee Accordion Block
 * Description:       Create an accordion section.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0
 * Author:            ThemeZee
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       themezee-accordion-block
 *
 * @package           ThemeZee Accordion Block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function register_themezee_accordion_block() {

	// Load translation for PHP files.
	load_plugin_textdomain( 'themezee-accordion-block', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );

	// Register blocks.
	register_block_type( __DIR__ . '/build/accordion', [
		'title'       => _x( 'Accordion', 'block title', 'themezee-accordion-block' ),
		'description' => _x( 'Create an accordion section.', 'block description', 'themezee-accordion-block' ),
	] );

	register_block_type( __DIR__ . '/build/accordion-heading', [
		'title'       => _x( 'Accordion Heading', 'block title', 'themezee-accordion-block' ),
		'description' => _x( 'Displays the accordion heading.', 'block description', 'themezee-accordion-block' ),
	] );

	register_block_type( __DIR__ . '/build/accordion-content', [
		'title'       => _x( 'Accordion Content', 'block title', 'themezee-accordion-block' ),
		'description' => _x( 'Displays the accordion content.', 'block description', 'themezee-accordion-block' ),
	] );

	// Load translation for JS files.
	wp_set_script_translations( 'themezee-accordion-editor-script', 'themezee-accordion-block', plugin_dir_path( __FILE__ ) . 'languages' );
	wp_set_script_translations( 'themezee-accordion-heading-editor-script', 'themezee-accordion-block', plugin_dir_path( __FILE__ ) . 'languages' );
	wp_set_script_translations( 'themezee-accordion-content-editor-script', 'themezee-accordion-block', plugin_dir_path( __FILE__ ) . 'languages' );
}
add_action( 'init', 'register_themezee_accordion_block' );


if ( ! function_exists( 'register_themezee_blocks_block_category' ) ) :
	/**
	 * Add ThemeZee Blocks category to Block Inserter.
	 */
	function register_themezee_blocks_block_category( $categories, $post ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'themezee-blocks',
					'title' => __( 'ThemeZee Blocks', 'themezee-accordion-block' ),
				),
			)
		);
	}
	add_filter( 'block_categories_all', 'register_themezee_blocks_block_category', 10, 2 );
endif;


/**
 * Set up the Plugin Updater Constants.
 */
define( 'THEMEZEE_ACCORDION_BLOCK_VERSION', '1.0' );
define( 'THEMEZEE_ACCORDION_BLOCK_NAME', 'ThemeZee Accordion Block' );
define( 'THEMEZEE_ACCORDION_BLOCK_ID', 255879 );
define( 'THEMEZEE_ACCORDION_BLOCK_STORE_URL', 'https://themezee.com' );


/**
 * Include License Settings and Plugin Updater.
 */
include dirname( __FILE__ ) . '/includes/class-themezee-blocks-admin-page.php';
include dirname( __FILE__ ) . '/includes/class-themezee-accordion-block-license-settings.php';
include dirname( __FILE__ ) . '/includes/class-themezee-accordion-block-updater.php';


/**
 * Initialize the updater. Hooked into `init` to work with the
 * wp_version_check cron job, which allows auto-updates.
 */
function update_themezee_accordion_block() {

	// To support auto-updates, this needs to run during the wp_version_check cron job for privileged users.
	$doing_cron = defined( 'DOING_CRON' ) && DOING_CRON;
	if ( ! current_user_can( 'manage_options' ) && ! $doing_cron ) {
		return;
	}

	// Retrieve our license key from the DB.
	$options     = get_option( 'themezee_blocks_settings', array() );
	$license_key = ! empty( $options['accordion_block_license_key'] ) ? trim( $options['accordion_block_license_key'] ) : false;

	// Setup the updater.
	$edd_updater = new ThemeZee_Icon_List_Block_Updater(
		THEMEZEE_ACCORDION_BLOCK_STORE_URL,
		__FILE__,
		array(
			'version' => THEMEZEE_ACCORDION_BLOCK_VERSION,
			'license' => $license_key,
			'item_id' => THEMEZEE_ACCORDION_BLOCK_ID,
			'author'  => 'ThemeZee',
			'beta'    => false,
		)
	);
}
add_action( 'init', 'update_themezee_accordion_block' );

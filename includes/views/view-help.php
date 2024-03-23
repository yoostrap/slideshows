<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$logo                           = HSS_ASSETS_URL . 'logo.png';
$version                        = 'version' . HSS_VERSION;
$hizzle_slideshow_block_picture = HSS_ASSETS_URL . 'Hizzle-slideshow-block.png';
$hizzle_add_slide_picture       = HSS_ASSETS_URL . 'add-hizzle-slide.png';
$hizzle_customize_slide_picture = HSS_ASSETS_URL . 'customize-hizzle-slide.png';
$hizzle_slide_block_picture     = HSS_ASSETS_URL . 'hizzle-slide-block.png';

$plugin_name     = hizzle_slideshows_plugin_name();
$tagline         = sprintf(
	__(
		'Thank You For choosing %s!', 'hizzle-slideshows'
		),
	$plugin_name
);
$tagline_content = sprintf( 
    __( 'Transform your galleries with %1$s, the ultimate WordPress plugin for creating stunning,
	 responsive presentations. Effortlessly customize each slide with our intuitive interface.
	  Enjoy seamless integration with the block editor, ensuring a flawless experience on all devices.
	   With optimized performance, your slideshows load lightning-fast,
	    captivating your audience like never before.
		 Upgrade your content presentation today with %2$s.', 'hizzle-slideshows' ),
    $plugin_name, 
    $plugin_name 
);
//allow the variables to be overwritten by other things!
$logo = apply_filters( 'hizzle_slideshows_admin_help_logo_url', $logo );

?>
<section style="background-color: #333; margin-right: 15px; margin-top: 15px; padding-bottom: 15px; min-height: 100vh; position: relative;">
    <div class="hizzle-slideshows-plugin-version" style="position: absolute; top: 30px; right: 0; color: white; padding: 5px 10px; transform: rotate(45deg);"><?php esc_html_e( $version, 'hizzle-slideshows' ); ?></div>
    <div class="hizzle-slideshows-help-main">
		<img src="<?php echo $logo; ?>" width="200">
		<h1 style="color: whitesmoke;"><?php esc_html_e( $plugin_name, 'hizzle-slideshows' ); ?></h1>
	</div>
		
	<div class="hizzle-slideshows-help-tabs">
		<ul class="hizzle-slideshows-help-tab-links">
			<li class="hizzle-slideshows-help-tab-active"><a href="#hizzle-slideshows-welcome-tab"><?php esc_html_e( 'Welcome', 'hizzle-slideshows' ); ?></a></li>
			<li><a href="#hizzle-slideshows-support-tab"><?php esc_html_e( 'Support', 'hizzle-slideshows' ); ?></a></li>
		</ul>

		<div class="hizzle-slideshows-help-tab-content">
			<div id="hizzle-slideshows-welcome-tab" class="hizzle-slideshows-help-tab hizzle-slideshows-help-tab-active">
				<div style="background-color: #ecf0f1; padding: 20px; margin: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
					<h2 style="color: #007777;"><?php esc_html_e( $tagline, 'hizzle-slideshows' ); ?></h2>
					<p><?php esc_html_e( $tagline_content, 'hizzle-slideshows' ); ?></p>
				</div>
				
				<div style="background-color: #ecf0f1; padding: 20px; margin: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
					<h3 style="color: #007777;"><?php esc_html_e( 'Creating Your First slideshow', 'hizzle-slideshows' ); ?></h3>
					<div style="display: flex; justify-content:space-around; align-items:flex-start">					
						<div style="overflow: hidden; border-radius: 5px; margin-bottom: 20px;">
							<img src="<?php echo esc_url( $hizzle_slideshow_block_picture ); ?>" style="width: 200px; height: auto; display: block;">
						</div>
						<div>
							<p><?php esc_html_e( 'To create a slideshow using Hizzle Slideshows:', 'hizzle-slideshows' ); ?></p>
							<ol>
								<li><?php esc_html_e( 'Open any post or page in the new WordPress block editor.', 'hizzle-slideshows' ); ?></li>
								<li><?php esc_html_e( 'Add the Hizzle Slideshow block.', 'hizzle-slideshows' ); ?></li>
								<li><?php esc_html_e( 'Add as many slides as you want, customizing each one to suit your needs.', 'hizzle-slideshows' ); ?></li>
								<li><?php esc_html_e( 'Easily insert images, text, videos, or any other blocks.', 'hizzle-slideshows' ); ?></li>
								<li><?php esc_html_e( 'No coding skills required! Just arrange your blocks and watch your slideshow come to life.', 'hizzle-slideshows' ); ?></li>
							</ol>
						</div>
					</div>

					<div style="display: flex; justify-content:space-around; align-items:flex-start; margin-top: 15px; padding: 10px">
						<div style="overflow: hidden; border-radius: 5px; margin-bottom: 20px;">
							<img src="<?php echo esc_url( $hizzle_add_slide_picture ); ?>" style="width: 300px; height: auto; display: block;">
							<p style="font-style: italic; text-align: center; color: #555; margin-top: 5px;"><?php esc_html_e( 'Add as many slides as you want.', 'hizzle-slideshows' ); ?></p>
						</div>
						<div style="overflow: hidden; border-radius: 5px; margin-bottom: 20px;">
							<img src="<?php echo esc_url( $hizzle_slide_block_picture ); ?>" style="width: 280px; height: auto; display: block;">
							<p style="font-style: italic; text-align: center; color: #555; margin-top: 5px;"><?php esc_html_e( 'Customize your slide block.', 'hizzle-slideshows' ); ?></p>
						</div>
						<div style="overflow: hidden; border-radius: 5px; margin-bottom: 20px;">
							<img src="<?php echo esc_url( $hizzle_customize_slide_picture ); ?>" style="width: 280px; height: auto; display: block;">
							<p style="font-style: italic; text-align: center; color: #555; margin-top: 5px;"><?php esc_html_e( 'Customize your slideshow block.', 'hizzle-slideshows' ); ?></p>
						</div>						
					</div>
				</div>
			</div>

			<div id="hizzle-slideshows-support-tab" class="hizzle-slideshows-help-tab">
				<h3 style="color: white; margin: 10px;"><?php esc_html_e( '🚑 Require assistance? Our support team is ready to assist you.', 'hizzle-slideshows' ); ?></h3>
				<div class="hizzle-slideshows-supp">								
					<p>
						<a href="https://github.com/Frenziecodes/hizzle-slideshows/issues">
							<?php esc_html_e( 'Bug Report => ', 'hizzle-slideshows' ); ?>
						</a>
						<?php esc_html_e( 'Stumbled upon an issue or a bug? We appreciate your help in making our product better. Please take a moment to report it, and we will work diligently to address it.', 'hizzle-slideshows' ); ?>						
					</p>
				</div>
				<div class="hizzle-slideshows-supp">								
					<p>
						<a href="https://github.com/Frenziecodes/hizzle-slideshows/issues">
							<?php esc_html_e( 'Feature Request => ', 'hizzle-slideshows' ); ?>
						</a>
						<?php esc_html_e( 'Have a great idea for a new feature or improvement? We would love to hear your suggestions! Share your thoughts with us, and we will consider implementing it to enhance our product.', 'hizzle-slideshows' ); ?>						
					</p>
				</div>
				<div class="hizzle-slideshows-supp">								
					<p>
						<a href="https://wordpress.org/support/plugin/hizzle-slideshows/">
							<?php esc_html_e( 'WordPress.org Support => ', 'hizzle-slideshows' ); ?>
						</a>
						<?php esc_html_e( 'We actively monitor and answer all questions posted on WordPress.org for Hizzle Slideshows.', 'hizzle-slideshows' ); ?>						
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
		
<script>
	document.addEventListener("DOMContentLoaded", function() {
		const tabLinks = document.querySelectorAll(".hizzle-slideshows-help-tab-links a");
		const tabContents = document.querySelectorAll(".hizzle-slideshows-help-tab-content .hizzle-slideshows-help-tab");

		tabLinks.forEach((link) => {
			link.addEventListener("click", function (e) {
				e.preventDefault();
				tabLinks.forEach((l) => l.parentElement.classList.remove("hizzle-slideshows-help-tab-active"));
				this.parentElement.classList.add("hizzle-slideshows-help-tab-active");

				const targetTab = document.querySelector(this.getAttribute("href"));
				tabContents.forEach((tab) => tab.classList.remove("hizzle-slideshows-help-tab-active"));
				targetTab.classList.add("hizzle-slideshows-help-tab-active");
			});
		});
	});
</script>

<style>
	.hizzle-slideshows-plugin-version {
		font-size: 12px;
		font-weight: bold;
	}

	.hizzle-slideshows-help-tabs {
		font-family: Arial, sans-serif;
		padding-left: 10px;
	}
	.hizzle-slideshows-supp a{
		text-decoration: none;
	}
	.hizzle-slideshows-supp{
		color: black;
		background-color: #ecf0f1;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}

	.hizzle-slideshows-help-main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), black;
		min-height: 100px;
	}

	.hizzle-slideshows-help-tab-links {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.hizzle-slideshows-help-tab-links li {
		margin-right: 10px;
	}

	.hizzle-slideshows-help-tab-links a {
		text-decoration: none;
		background-color: #f2f2f2;
		padding: 10px 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	.hizzle-slideshows-help-tab-links a:hover {
		background-color: #ddd;
	}

	.hizzle-slideshows-help-tab-links .hizzle-slideshows-help-tab-active a {
		background-color: #005555;
		color: white;
		border: 1px solid #ddd;
	}

	.hizzle-slideshows-help-tab {
		display: none;
	}

	.hizzle-slideshows-help-tab-active {
		display: block;
	}
</style>

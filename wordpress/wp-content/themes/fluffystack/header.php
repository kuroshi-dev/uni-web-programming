<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <!-- Navigation Bar -->
    <header class="nav-top">
        <div class="nav-brand">
            <?php
            if (has_custom_logo()) {
                the_custom_logo();
            } else {
                ?>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/FluffyStack.svg" 
                     alt="<?php bloginfo('name'); ?>" class="nav-logo" />
                <?php
            }
            ?>
            
            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home" class="brand-name">
                <?php bloginfo('name'); ?>
            </a>

            <button id="theme-toggle" class="theme-toggle" aria-label="<?php _e('Перемкнути тему', 'fluffystack'); ?>">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/night-mode-off.png" 
                     alt="<?php _e('Світла тема', 'fluffystack'); ?>" 
                     class="icon light-mode-icon" style="display:block;">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/night-mode-on.png" 
                     alt="<?php _e('Темна тема', 'fluffystack'); ?>" 
                     class="icon dark-mode-icon" style="display:none;">
            </button>
        </div>

        <nav class="main-navigation">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_id'        => 'primary-menu',
                'container'      => false,
                'fallback_cb'    => function() {
                    echo '<ul class="nav-links">';
                    echo '<li><a href="' . home_url('/about') . '">' . __('Про нас', 'fluffystack') . '</a></li>';
                    echo '<li><a href="' . home_url('/contact') . '">' . __('Контакти', 'fluffystack') . '</a></li>';
                    echo '</ul>';
                }
            ));
            ?>
        </nav>
    </header>

    <nav class="nav-side">
        <ul class="nav-links-side">
            <li><a href="<?php echo esc_url(home_url('/')); ?>">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/house.png" alt="Home" class="icon">
                <span><?php _e('Головна', 'fluffystack'); ?></span>
            </a></li>
            <li><a href="<?php echo esc_url(home_url('/recipes')); ?>">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/pancake.png" alt="Recipes" class="icon">
                <span><?php _e('Рецепти', 'fluffystack'); ?></span>
            </a></li>
            <li><a href="<?php echo esc_url(home_url('/contact')); ?>">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/contact-mail.png" alt="Contact" class="icon">
                <span><?php _e('Контакти', 'fluffystack'); ?></span>
            </a></li>
        </ul>
    </nav>
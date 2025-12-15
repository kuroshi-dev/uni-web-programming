<?php get_header(); ?>

<main id="main" class="site-main">
    
    <?php if (is_home() || is_front_page()) : ?>
        
        <!-- Welcome Section -->
        <section class="welcome-section">
            <div class="welcome-content">
                <h1><?php bloginfo('name'); ?></h1>
                <p><?php bloginfo('description'); ?></p>
            </div>
        </section>

        <!-- Why Us Section -->
        <section class="why-us-section">
            <h2><?php _e('Чому варто обрати FluffyStack?', 'fluffystack'); ?></h2>
            <p><?php _e('Відкрийте переваги використання нашого сайту', 'fluffystack'); ?></p>
            
            <div class="features">
                <div class="feature">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/time-left.png" class="icon" alt="Quick Recipes">
                    <h3><?php _e('Швидкі рецепти', 'fluffystack'); ?></h3>
                    <p><?php _e('Більшість рецептів займають менше 30 хвилин', 'fluffystack'); ?></p>
                </div>
                
                <div class="feature">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/calories.png" class="icon" alt="Nutritional Info">
                    <h3><?php _e('Інформація про харчування', 'fluffystack'); ?></h3>
                    <p><?php _e('Детальна інформація про харчування для кожного рецепта', 'fluffystack'); ?></p>
                </div>
                
                <div class="feature">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/serving.png" class="icon" alt="Serving Size">
                    <h3><?php _e('Гнучкі порції', 'fluffystack'); ?></h3>
                    <p><?php _e('Легко регулювати розміри порцій', 'fluffystack'); ?></p>
                </div>
            </div>
        </section>

    <?php else : ?>
        
        <!-- Single Post or Archive -->
        <?php if (have_posts()) : ?>
            <div class="posts-container">
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                        <div class="entry-content">
                            <?php the_content(); ?>
                        </div>
                    </article>
                <?php endwhile; ?>
                
                <div class="pagination">
                    <?php
                    the_posts_pagination(array(
                        'prev_text' => __('« Попередня', 'fluffystack'),
                        'next_text' => __('Наступна »', 'fluffystack'),
                    ));
                    ?>
                </div>
            </div>
        <?php else : ?>
            <p><?php _e('Нічого не знайдено.', 'fluffystack'); ?></p>
        <?php endif; ?>
        
    <?php endif; ?>

</main>

<?php get_footer(); ?>
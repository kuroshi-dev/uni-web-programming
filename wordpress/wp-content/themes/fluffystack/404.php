<?php

get_header(); ?>

<main id="main" class="site-main error-404">
    <section class="error-section">
        <div class="error-content">
            <h1 class="page-title"><?php _e('404', 'fluffystack'); ?></h1>
            <h2><?php _e('Сторінку не знайдено', 'fluffystack'); ?></h2>
            <p><?php _e('На жаль, сторінка, яку ви шукаєте, не існує або була переміщена.', 'fluffystack'); ?></p>
            
            <div class="error-search">
                <p><?php _e('Спробуйте скористатися пошуком:', 'fluffystack'); ?></p>
                <?php get_search_form(); ?>
            </div>

            <div class="error-links">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary">
                    <?php _e('Повернутися на головну', 'fluffystack'); ?>
                </a>
            </div>

            <div class="recent-recipes">
                <h3><?php _e('Останні рецепти', 'fluffystack'); ?></h3>
                
                <?php
                $recent_posts = new WP_Query(array(
                    'posts_per_page' => 3,
                    'post_status' => 'publish',
                    'ignore_sticky_posts' => true
                ));

                if ($recent_posts->have_posts()) :
                ?>
                    <ul class="recent-posts-list">
                        <?php while ($recent_posts->have_posts()) : $recent_posts->the_post(); ?>
                            <li>
                                <a href="<?php the_permalink(); ?>">
                                    <?php if (has_post_thumbnail()) : ?>
                                        <?php the_post_thumbnail('thumbnail'); ?>
                                    <?php endif; ?>
                                    <span><?php the_title(); ?></span>
                                </a>
                            </li>
                        <?php endwhile; ?>
                    </ul>
                <?php
                    wp_reset_postdata();
                endif;
                ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
<?php

get_header(); ?>

<main id="main" class="site-main single-recipe">
    <?php
    while (have_posts()) : the_post();
    ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('recipe-single'); ?>>
            
            <header class="entry-header">
                <h1 class="entry-title"><?php the_title(); ?></h1>
                
                <div class="entry-meta">
                    <span class="posted-on">
                        <?php _e('Опубліковано:', 'fluffystack'); ?> 
                        <time datetime="<?php echo get_the_date('c'); ?>">
                            <?php echo get_the_date(); ?>
                        </time>
                    </span>
                    
                    <span class="byline">
                        <?php _e('Автор:', 'fluffystack'); ?> 
                        <a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>">
                            <?php echo get_the_author(); ?>
                        </a>
                    </span>
                    
                    <?php if (has_category()) : ?>
                        <span class="cat-links">
                            <?php _e('Категорії:', 'fluffystack'); ?> 
                            <?php the_category(', '); ?>
                        </span>
                    <?php endif; ?>
                </div>
            </header>

            <?php if (has_post_thumbnail()) : ?>
                <div class="recipe-featured-image">
                    <?php the_post_thumbnail('large'); ?>
                </div>
            <?php endif; ?>

            <div class="recipe-meta-container">
                <?php
                $prep_time = get_post_meta(get_the_ID(), 'prep_time', true);
                $cook_time = get_post_meta(get_the_ID(), 'cook_time', true);
                $servings = get_post_meta(get_the_ID(), 'servings', true);
                $calories = get_post_meta(get_the_ID(), 'calories', true);
                ?>
                
                <div class="recipe-overview">
                    <ul class="recipe-stats">
                        <?php if ($prep_time) : ?>
                            <li class="stat-item">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/prep-time.png" 
                                     alt="<?php _e('Час підготовки', 'fluffystack'); ?>" class="stat-icon">
                                <div class="stat-content">
                                    <span class="stat-label"><?php _e('Підготовка', 'fluffystack'); ?></span>
                                    <span class="stat-value"><?php echo esc_html($prep_time); ?></span>
                                </div>
                            </li>
                        <?php endif; ?>
                        
                        <?php if ($cook_time) : ?>
                            <li class="stat-item">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/cook-time.png" 
                                     alt="<?php _e('Час приготування', 'fluffystack'); ?>" class="stat-icon">
                                <div class="stat-content">
                                    <span class="stat-label"><?php _e('Приготування', 'fluffystack'); ?></span>
                                    <span class="stat-value"><?php echo esc_html($cook_time); ?></span>
                                </div>
                            </li>
                        <?php endif; ?>
                        
                        <?php if ($servings) : ?>
                            <li class="stat-item">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/serving.png" 
                                     alt="<?php _e('Порції', 'fluffystack'); ?>" class="stat-icon">
                                <div class="stat-content">
                                    <span class="stat-label"><?php _e('Порцій', 'fluffystack'); ?></span>
                                    <span class="stat-value"><?php echo esc_html($servings); ?></span>
                                </div>
                            </li>
                        <?php endif; ?>
                        
                        <?php if ($calories) : ?>
                            <li class="stat-item">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/calories.png" 
                                     alt="<?php _e('Калорії', 'fluffystack'); ?>" class="stat-icon">
                                <div class="stat-content">
                                    <span class="stat-label"><?php _e('Калорії', 'fluffystack'); ?></span>
                                    <span class="stat-value"><?php echo esc_html($calories); ?> <?php _e('ккал', 'fluffystack'); ?></span>
                                </div>
                            </li>
                        <?php endif; ?>
                    </ul>
                </div>
            </div>

            <div class="entry-content">
                <?php
                the_content();

                wp_link_pages(array(
                    'before' => '<div class="page-links">' . __('Сторінки:', 'fluffystack'),
                    'after'  => '</div>',
                ));
                ?>
            </div>

            <footer class="entry-footer">
                <?php if (has_tag()) : ?>
                    <div class="tag-links">
                        <?php _e('Теги:', 'fluffystack'); ?> 
                        <?php the_tags('', ', ', ''); ?>
                    </div>
                <?php endif; ?>
                
                <div class="share-buttons">
                    <span><?php _e('Поділитися:', 'fluffystack'); ?></span>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" 
                       target="_blank" class="share-btn facebook">
                        Facebook
                    </a>
                    <a href="https://twitter.com/intent/tweet?url=<?php the_permalink(); ?>&text=<?php the_title(); ?>" 
                       target="_blank" class="share-btn twitter">
                        Twitter
                    </a>
                </div>
            </footer>

        </article>

        <?php
        the_post_navigation(array(
            'prev_text' => '<span class="nav-subtitle">' . __('Попередній рецепт', 'fluffystack') . '</span> <span class="nav-title">%title</span>',
            'next_text' => '<span class="nav-subtitle">' . __('Наступний рецепт', 'fluffystack') . '</span> <span class="nav-title">%title</span>',
        ));

        if (comments_open() || get_comments_number()) :
            comments_template();
        endif;

    endwhile;
    ?>
</main>

<?php
get_sidebar();
get_footer();
?>
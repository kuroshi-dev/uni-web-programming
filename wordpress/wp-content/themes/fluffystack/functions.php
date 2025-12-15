<?php

if (!defined('ABSPATH')) {
    exit;
}

function fluffystack_setup() {
    
    load_theme_textdomain('fluffystack', get_template_directory() . '/languages');

    add_theme_support('title-tag');

    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(400, 300, true);
    
    add_image_size('recipe-thumbnail', 400, 300, true);
    add_image_size('recipe-large', 800, 600, true);

    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 100,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    register_nav_menus(array(
        'primary' => __('Головне меню', 'fluffystack'),
        'footer'  => __('Меню футера', 'fluffystack'),
    ));

    add_theme_support('custom-background', array(
        'default-color' => 'ffffff',
    ));

    add_theme_support('automatic-feed-links');
}
add_action('after_setup_theme', 'fluffystack_setup');

function fluffystack_content_width() {
    $GLOBALS['content_width'] = apply_filters('fluffystack_content_width', 1200);
}
add_action('after_setup_theme', 'fluffystack_content_width', 0);

function fluffystack_widgets_init() {
    register_sidebar(array(
        'name'          => __('Сайдбар', 'fluffystack'),
        'id'            => 'sidebar-1',
        'description'   => __('Додайте віджети сюди', 'fluffystack'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Футер', 'fluffystack'),
        'id'            => 'footer-1',
        'description'   => __('Віджети для футера', 'fluffystack'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'fluffystack_widgets_init');

function fluffystack_scripts() {
    
    wp_enqueue_style('fluffystack-style', get_stylesheet_uri(), array(), '1.0');
    
    wp_enqueue_style('fluffystack-components', get_template_directory_uri() . '/assets/css/components.css', array('fluffystack-style'), '1.0');

    
    wp_enqueue_script('jquery');

    // Головний скрипт теми
    wp_enqueue_script('fluffystack-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0', true);

    // Коментарі
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'fluffystack_scripts');

function fluffystack_recipe_meta_boxes() {
    add_meta_box(
        'recipe_details',
        __('Деталі рецепту', 'fluffystack'),
        'fluffystack_recipe_meta_box_callback',
        'post',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'fluffystack_recipe_meta_boxes');

function fluffystack_recipe_meta_box_callback($post) {
    wp_nonce_field('fluffystack_save_recipe_meta', 'fluffystack_recipe_meta_nonce');

    $prep_time = get_post_meta($post->ID, 'prep_time', true);
    $cook_time = get_post_meta($post->ID, 'cook_time', true);
    $servings = get_post_meta($post->ID, 'servings', true);
    $calories = get_post_meta($post->ID, 'calories', true);
    ?>
    
    <p>
        <label for="prep_time"><?php _e('Час підготовки:', 'fluffystack'); ?></label><br>
        <input type="text" id="prep_time" name="prep_time" value="<?php echo esc_attr($prep_time); ?>" 
               placeholder="10 mins" style="width: 100%; max-width: 300px;">
    </p>
    
    <p>
        <label for="cook_time"><?php _e('Час приготування:', 'fluffystack'); ?></label><br>
        <input type="text" id="cook_time" name="cook_time" value="<?php echo esc_attr($cook_time); ?>" 
               placeholder="15 mins" style="width: 100%; max-width: 300px;">
    </p>
    
    <p>
        <label for="servings"><?php _e('Кількість порцій:', 'fluffystack'); ?></label><br>
        <input type="number" id="servings" name="servings" value="<?php echo esc_attr($servings); ?>" 
               min="1" style="width: 100%; max-width: 300px;">
    </p>
    
    <p>
        <label for="calories"><?php _e('Калорійність (на порцію):', 'fluffystack'); ?></label><br>
        <input type="number" id="calories" name="calories" value="<?php echo esc_attr($calories); ?>" 
               min="0" style="width: 100%; max-width: 300px;">
    </p>
    <?php
}

function fluffystack_save_recipe_meta($post_id) {
    
    if (!isset($_POST['fluffystack_recipe_meta_nonce'])) {
        return;
    }
    if (!wp_verify_nonce($_POST['fluffystack_recipe_meta_nonce'], 'fluffystack_save_recipe_meta')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    $fields = array('prep_time', 'cook_time', 'servings', 'calories');
    
    foreach ($fields as $field) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, $field, sanitize_text_field($_POST[$field]));
        }
    }
}
add_action('save_post', 'fluffystack_save_recipe_meta');

function fluffystack_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'fluffystack_excerpt_length');

function fluffystack_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'fluffystack_excerpt_more');

function fluffystack_gutenberg_support() {
    
    add_theme_support('align-wide');
    
    add_theme_support('editor-color-palette', array(
        array(
            'name'  => __('Основний синій', 'fluffystack'),
            'slug'  => 'primary-blue',
            'color' => '#3b82f6',
        ),
        array(
            'name'  => __('Темний синій', 'fluffystack'),
            'slug'  => 'dark-blue',
            'color' => '#2563eb',
        ),
        array(
            'name'  => __('Успіх', 'fluffystack'),
            'slug'  => 'success',
            'color' => '#10b981',
        ),
        array(
            'name'  => __('Помилка', 'fluffystack'),
            'slug'  => 'error',
            'color' => '#ef4444',
        ),
    ));
}
add_action('after_setup_theme', 'fluffystack_gutenberg_support');

function fluffystack_body_classes($classes) {
    if (!is_singular()) {
        $classes[] = 'hfeed';
    }
    
    if (is_active_sidebar('sidebar-1')) {
        $classes[] = 'has-sidebar';
    }
    
    return $classes;
}
add_filter('body_class', 'fluffystack_body_classes');

/**
 * Создание примеров рецептов при активации темы
 */
function fluffystack_create_sample_recipes() {
    // Проверяем, уже ли созданы примеры
    $existing_posts = get_posts(array(
        'post_type' => 'post',
        'numberposts' => 1,
    ));
    
    if (!empty($existing_posts)) {
        return;
    }
    
    // Рецепт 1: Панкейки з бананом
    $recipe1 = array(
        'post_title'   => 'Панкейки з бананом',
        'post_content' => 'М\'які, пухкі панкейки з бананом - ідеальний сніданок для всієї сім\'ї. Подаються з кленовим сиропом та свіжими ягодами.',
        'post_type'    => 'post',
        'post_status'  => 'publish',
        'post_excerpt' => 'Легкі та м\'які панкейки з ніжним бананом',
    );
    
    $post_id1 = wp_insert_post($recipe1);
    
    if ($post_id1) {
        // Добавляем мета-данные
        update_post_meta($post_id1, 'prep_time', '10 хв');
        update_post_meta($post_id1, 'cook_time', '15 хв');
        update_post_meta($post_id1, 'servings', '4');
        update_post_meta($post_id1, 'calories', '250');
        
        // Устанавливаем изображение
        $image_path = get_template_directory() . '/assets/cards/banana-pancake.jpg';
        if (file_exists($image_path)) {
            fluffystack_set_featured_image($post_id1, $image_path, 'Панкейки з бананом');
        }
    }
    
    // Рецепт 2: Панкейки з горіхами
    $recipe2 = array(
        'post_title'   => 'Панкейки з горіхами',
        'post_content' => 'Хрусткі панкейки з горіхами та медом. Корисний та поживний сніданок, багатий білками та корисними жирами.',
        'post_type'    => 'post',
        'post_status'  => 'publish',
        'post_excerpt' => 'Смачні панкейки з мигдалем та грецькими горіхами',
    );
    
    $post_id2 = wp_insert_post($recipe2);
    
    if ($post_id2) {
        // Добавляем мета-данные
        update_post_meta($post_id2, 'prep_time', '15 хв');
        update_post_meta($post_id2, 'cook_time', '20 хв');
        update_post_meta($post_id2, 'servings', '4');
        update_post_meta($post_id2, 'calories', '320');
        
        // Устанавливаем изображение
        $image_path = get_template_directory() . '/assets/cards/nutty-pancakes.jpg';
        if (file_exists($image_path)) {
            fluffystack_set_featured_image($post_id2, $image_path, 'Панкейки з горіхами');
        }
    }
}
add_action('after_switch_theme', 'fluffystack_create_sample_recipes');

/**
 * Вспомогательная функция для установки изображения
 */
function fluffystack_set_featured_image($post_id, $image_path, $image_title = '') {
    if (!function_exists('media_handle_upload')) {
        require_once(ABSPATH . 'wp-admin/includes/file.php');
        require_once(ABSPATH . 'wp-admin/includes/wp-load.php');
        require_once(ABSPATH . 'wp-admin/includes/image.php');
    }
    
    $attachment_id = attachment_url_to_postid($image_path);
    
    if (!$attachment_id && file_exists($image_path)) {
        // Загружаем файл как вложение
        $filetype = wp_check_filetype(basename($image_path), null);
        
        $upload_dir = wp_get_upload_dir();
        $filename = basename($image_path);
        $filename = wp_unique_filename($upload_dir['path'], $filename);
        $new_file = $upload_dir['path'] . '/' . $filename;
        
        if (copy($image_path, $new_file)) {
            $attachment = array(
                'post_mime_type' => $filetype['type'],
                'post_title'     => sanitize_title($image_title),
                'post_content'   => '',
                'post_status'    => 'inherit',
            );
            
            $attachment_id = wp_insert_attachment($attachment, $new_file);
            
            if (!is_wp_error($attachment_id)) {
                require_once(ABSPATH . 'wp-admin/includes/image.php');
                $attach_data = wp_generate_attachment_metadata($attachment_id, $new_file);
                wp_update_attachment_metadata($attachment_id, $attach_data);
            }
        }
    }
    
    if ($attachment_id) {
        set_post_thumbnail($post_id, $attachment_id);
    }
}
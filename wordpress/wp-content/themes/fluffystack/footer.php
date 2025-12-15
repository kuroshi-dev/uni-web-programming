<footer id="colophon" class="site-footer">
        <div class="footer-content">
            <div class="footer-info">
                <p>
                    &copy; <?php echo date('Y'); ?> 
                    <a href="<?php echo esc_url(home_url('/')); ?>">
                        <?php bloginfo('name'); ?>
                    </a>
                    <?php _e('Всі права захищені.', 'fluffystack'); ?>
                </p>
            </div>
            
            <?php if (is_active_sidebar('footer-1')) : ?>
                <div class="footer-widgets">
                    <?php dynamic_sidebar('footer-1'); ?>
                </div>
            <?php endif; ?>
        </div>
    </footer>
</div>

<?php wp_footer(); ?>

<script>
(function() {
  // Restore theme from localStorage
  const savedTheme = localStorage.getItem('fluffystack-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  const lightIcon = document.querySelector('.light-mode-icon');
  const darkIcon = document.querySelector('.dark-mode-icon');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      
      if (lightIcon && darkIcon) {
        lightIcon.style.display = isDark ? 'none' : 'block';
        darkIcon.style.display = isDark ? 'block' : 'none';
      }
      
      localStorage.setItem('fluffystack-theme', isDark ? 'dark' : 'light');
    });
  }
})();
</script>

</body>
</html>

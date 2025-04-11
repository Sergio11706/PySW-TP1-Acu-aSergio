// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const html = document.querySelector('html');

// Check if there's a saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
}

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? '' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update aria-label for accessibility
    themeToggle.setAttribute('aria-label', newTheme === 'light' ? 'Alternar a tema oscuro' : 'Alternar a tema claro');
});

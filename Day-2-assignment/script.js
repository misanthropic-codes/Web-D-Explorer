const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', currentTheme);

toggleButton.textContent = currentTheme === 'light' ? 'Dark Mode' : 'Light Mode';

toggleButton.addEventListener('click', () => {
    const newTheme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggleButton.textContent = newTheme === 'light' ? 'Dark Mode' : 'Light Mode';
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Reset the form after submission
    document.querySelector('form').reset();
});
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.classList.add('theme-toggle');
    document.body.appendChild(themeToggleBtn);

    // Function to set the theme
    function setTheme(themeName) {
        document.body.className = themeName;
        localStorage.setItem('theme', themeName);
        updateToggleButtonText();
    }

    // Function to update the toggle button text
    function updateToggleButtonText() {
        const currentTheme = document.body.className;
        themeToggleBtn.textContent = currentTheme === 'light-theme' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    }

    // Check stored theme in localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        setTheme(storedTheme);
    } else {
        setTheme('light-theme'); // Default theme
    }

    // Add click event to toggle button
    themeToggleBtn.addEventListener('click', function() {
        const currentTheme = document.body.className;
        if (currentTheme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    });

    updateToggleButtonText();
});




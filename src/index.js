import './style.css';
import loadAbout from './about.js';  // Import INFO first
import loadBar from './home.js';
import loadMenu from './menu.js';

// Load INFO page by default
loadAbout();

// Set up tab switching
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Load the appropriate tab
        const tabName = button.dataset.tab;
        switch(tabName) {
            case 'about':
                loadAbout();
                break;
            case 'home':
                loadBar();
                break;
            case 'menu':
                loadMenu();
                break;
        }
    });
});
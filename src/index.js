import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';

// Load home page by default
loadHome();

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
            case 'home':
                loadHome();
                break;
            case 'menu':
                loadMenu();
                break;
            case 'about':
                loadAbout();
                break;
        }
    });
});
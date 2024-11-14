// script.js

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();

    if (query) {
        // Redirect to car-details.html with query parameter
        window.location.href = `car-details.html?brand=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a car brand to search.');
    }
}

// Function to handle logo clicks
function handleLogoClick(event) {
    const target = event.target;
    const brand = target.getAttribute('data-brand');

    if (brand) {
        // Redirect to car-details.html with brand parameter
        window.location.href = `car-details.html?brand=${encodeURIComponent(brand)}`;
    }
}

// Add event listeners after DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', handleSearch);

    const carLogos = document.querySelectorAll('.car-logo');
    carLogos.forEach(logo => {
        logo.addEventListener('click', handleLogoClick);
    });

    // Allow pressing 'Enter' key to trigger search
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
});

// Toggle sidebar
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const content = document.querySelector('.content');
    
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        content.classList.toggle('shifted');
        
        // Change icon based on sidebar state
        const icon = this.querySelector('i');
        if (sidebar.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && 
            !sidebarToggle.contains(event.target) && 
            sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            content.classList.remove('shifted');
            const icon = sidebarToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Category filtering
    const categoryItems = document.querySelectorAll('.category-list li');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            categoryItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
            // Filter games by category (you can implement this based on your game data)
            const category = this.getAttribute('data-category');
            filterGamesByCategory(category);
        });
    });
    
    function filterGamesByCategory(category) {
        const gameElements = document.querySelectorAll('#games a');
        
        gameElements.forEach(game => {
            const gameCategories = (game.getAttribute('data-category') || '').split(',').map(cat => cat.trim());
            if (category === 'all' || gameCategories.includes(category)) {
                game.style.display = 'inline-block';
            } else {
                game.style.display = 'none';
            }
        });
    }
    
    // Initialize by showing all games
    filterGamesByCategory('all');
});

function searchGames() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const gameElements = document.querySelectorAll('#games a');
    
    gameElements.forEach(game => {
        const gameName = game.querySelector('img').getAttribute('alt').toLowerCase();
        if (searchTerm === '' || gameName.includes(searchTerm)) {
            game.style.display = 'inline-block';
        } else {
            game.style.display = 'none';
        }
    });
}
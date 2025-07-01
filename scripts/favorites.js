 // Favorites functionality
 document.addEventListener('DOMContentLoaded', function() {
    // Load favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('gameFavorites') || '[]');
    
    // Initialize favorites section
    updateFavoritesSection();
    
    // Add star buttons to all games
    const gameLinks = document.querySelectorAll('#games a');
    gameLinks.forEach(game => {
        const gamePath = game.getAttribute('href');
        const gameImg = game.querySelector('img');
        const gameName = gameImg.getAttribute('alt');
        
        // Create star button
        const starBtn = document.createElement('button');
        starBtn.className = 'favorite-btn';
        starBtn.innerHTML = '<i class="fas fa-star"></i>';
        
        // Check if this game is already a favorite
        if (favorites.some(fav => fav.path === gamePath)) {
            starBtn.classList.add('active');
        }
        
        // Add click event to star button
        starBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle favorite status
            if (starBtn.classList.contains('active')) {
                // Remove from favorites
                favorites = favorites.filter(fav => fav.path !== gamePath);
                starBtn.classList.remove('active');
            } else {
                // Add to favorites
                favorites.push({
                    name: gameName,
                    path: gamePath,
                    img: gameImg.getAttribute('src')
                });
                starBtn.classList.add('active');
            }
            
            // Save to localStorage
            localStorage.setItem('gameFavorites', JSON.stringify(favorites));
            
            // Update favorites section
            updateFavoritesSection();
        });
        
        // Add star button to game
        game.appendChild(starBtn);
    });
    
    // Function to update favorites section
    function updateFavoritesSection() {
        const favoritesContainer = document.getElementById('favorites');
        favoritesContainer.innerHTML = '';
        
        if (favorites.length === 0) {
            const noFavs = document.createElement('div');
            noFavs.id = 'no-favorites';
            noFavs.textContent = 'Star your favorite games to see them here!';
            favoritesContainer.appendChild(noFavs);
            return;
        }
        
        // Add each favorite game to the favorites section
        favorites.forEach(fav => {
            const favLink = document.createElement('a');
            favLink.href = fav.path;
            
            const favImg = document.createElement('img');
            favImg.src = fav.img;
            favImg.alt = fav.name;
            
            favLink.appendChild(favImg);
            favoritesContainer.appendChild(favLink);
        });

        // Update all star buttons in the main games list
        const gameLinks = document.querySelectorAll('#games a');
        gameLinks.forEach(game => {
            const gamePath = game.getAttribute('href');
            const starBtn = game.querySelector('.favorite-btn');
            if (starBtn) {
                if (favorites.some(fav => fav.path === gamePath)) {
                    starBtn.classList.add('active');
                } else {
                    starBtn.classList.remove('active');
                }
            }
        });
    }
});

// Logout functionality
document.getElementById('logout').addEventListener('click', function() {
    sessionStorage.removeItem('accessGranted');
    window.location.href = 'index.html';
});
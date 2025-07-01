document.addEventListener('DOMContentLoaded', function() {
    // Remove video player related code since it's not used in this page
    const buttons = document.querySelectorAll('.select-btn');
    const iframe = document.getElementById('video-frame');
    if (buttons.length > 0 && iframe) {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                iframe.src = button.getAttribute('data-src');
            });
        });
    }

    // Search functionality
    const searchInput = document.getElementById('live-tv-search');
    const linkContainer = document.getElementById('link-container');
    
    if (searchInput && linkContainer) {
        const links = linkContainer.querySelectorAll('.link-box');
        
        searchInput.addEventListener('input', (e) => {
            const filter = e.target.value.trim().toLowerCase();
            let hasVisibleItems = false;
            
            links.forEach(link => {
                const img = link.querySelector('img');
                if (img) {
                    const altText = img.alt.toLowerCase();
                    const isVisible = altText.includes(filter);
                    link.style.display = isVisible ? '' : 'none';
                    if (isVisible) hasVisibleItems = true;
                }
            });
            
            // Optional: Show a message when no results are found
            const noResultsMsg = document.getElementById('no-results-msg');
            if (filter && !hasVisibleItems) {
                if (!noResultsMsg) {
                    const msg = document.createElement('div');
                    msg.id = 'no-results-msg';
                    msg.textContent = 'No matching channels found';
                    msg.style.textAlign = 'center';
                    msg.style.gridColumn = '1 / -1';
                    msg.style.padding = '20px';
                    msg.style.color = '#aaa';
                    linkContainer.appendChild(msg);
                }
            } else if (noResultsMsg) {
                noResultsMsg.remove();
            }
        });
        
        // Trigger search on page load if there's a search term in the URL
        const urlParams = new URLSearchParams(window.location.search);
        const searchTerm = urlParams.get('search');
        if (searchTerm) {
            searchInput.value = searchTerm;
            searchInput.dispatchEvent(new Event('input'));
        }
    };
});

window.addEventListener('load', function () {
    const savedCloak = localStorage.getItem('tabCloak');
    if (savedCloak) {
        const cloak = JSON.parse(savedCloak);
        const existingFavicon = document.querySelector("link[rel*='icon']");
        if (existingFavicon) {
            existingFavicon.remove();
        }
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.type = 'image/x-icon';
        newFavicon.href = cloak.icon;
        document.head.appendChild(newFavicon);
        document.title = cloak.title;
    }
});
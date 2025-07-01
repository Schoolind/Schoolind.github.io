document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('video-frame');
    const streamButtons = document.querySelectorAll('.stream-btn');
    
    // Set first stream as active by default
    if (streamButtons.length > 0) {
        streamButtons[0].classList.add('active');
    }
    
    // Handle stream button clicks
    streamButtons.forEach(button => {
        button.addEventListener('click', function() {
            const src = this.getAttribute('data-src');
            
            // Update iframe source
            iframe.src = src;
            
            // Update active state
            streamButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Handle tab cloaking
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
});
function createNavBar(pathPrefix = '') {
    // Update pathPrefix to include Schooluk
    pathPrefix = '/Schooluk/';
    
    const navHtml = `
    <div class="nav-wrapper">
        <div class="nav-button-container">
            <div class="tooltip-container">
                <button class="nav-button" onclick="window.location.href='../../home.html'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024" stroke-width="0" fill="currentColor" stroke="currentColor" class="nav-icon">
                        <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                    </svg>
                </button>
                <span class="tooltip">Home</span>
            </div>
            <div class="tooltip-container">
                <button class="nav-button" onclick="window.location.href='../../games.html'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon">
                        <circle cx="22" cy="13" r="1" fill="currentColor"></circle>
                        <circle cx="22" cy="17" r="1" fill="currentColor"></circle>
                        <circle cx="24" cy="15" r="1" fill="currentColor"></circle>
                        <circle cx="20" cy="15" r="1" fill="currentColor"></circle>
                        <line x1="10" y1="18" x2="10" y2="12" stroke="currentColor"></line>
                        <line x1="7" y1="15" x2="13" y2="15" stroke="currentColor"></line>
                        <path d="M27.6,10c0,0-5.5-2-11.6-2S4.4,10,4.4,10l-1.3,10.3c-0.3,2.3,1.3,4.4,3.6,4.7c2.3,0.3,4.4-1.3,4.7-3.6L11.4,21h9.2l0,0.3c0.3,2.3,2.4,3.9,4.7,3.6c2.3-0.3,3.9-2.4,3.6-4.7L27.6,10z" stroke="currentColor"></path>
                    </svg>
                </button>
                <span class="tooltip">Games</span>
            </div>
            <div class="tooltip-container">
                <button class="nav-button" onclick="window.location.href='../../tv.html'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon">
                        <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
                        <polygon points="10,9 16,12 10,15 10,9" fill="currentColor" stroke="none"></polygon>
                    </svg>
                </button>
                <span class="tooltip">TV Shows</span>
            </div>
            <div class="tooltip-container">
                <button class="nav-button" onclick="window.location.href='../../livetv.html'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon">
                        <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                        <polyline points="17 2 12 7 7 2"></polyline>
                    </svg>
                </button>
                <span class="tooltip">Live TV <span class="beta-text">BETA</span></span>
            </div>
            <div class="tooltip-container">
                <button class="nav-button" onclick="window.location.href='../../Chat.html'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                </button>
                <span class="tooltip">Chat</span>
            </div>
            <div class="tooltip-container">
                <button class="nav-button" onclick="window.location.href='../../apps.html'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" class="nav-icon">
                        <circle cx="6" cy="6" r="3"/>
                        <circle cx="18" cy="6" r="3"/>
                        <circle cx="6" cy="18" r="3"/>
                        <circle cx="18" cy="18" r="3"/>
                    </svg>
                </button>
                <span class="tooltip">Apps</span>
            </div>
            <div class="tooltip-container">
                <button class="nav-button" onclick="window.location.href='../../settings.html'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                </button>
                <span class="tooltip">Settings</span>
            </div>
            <div class="tooltip-container">
                <button class="nav-button panic-button" onclick="activatePanic()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                </button>
                <span class="tooltip">Panic Button</span>
            </div>
            <div class="tooltip-container">
                <button class="nav-button logout" onclick="window.location.href='index.html'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                </button>
                <span class="tooltip">Logout</span>
            </div>
        </div>
    </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', navHtml);
}

// Define the panic function globally so it's accessible from the onclick attribute
window.activatePanic = function() {
    const panicSettings = JSON.parse(localStorage.getItem('panicKey') || '{}');
    if (panicSettings.url) {
        window.location.href = panicSettings.url;
    } else {
        alert('Please set up a panic URL in settings first');
    }
};

// Call createNavBar when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    createNavBar();
});
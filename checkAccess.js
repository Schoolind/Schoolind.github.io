// Check if the user is coming from the games.html page
(function() {
    // Get the referrer URL
    const referrer = document.referrer;
    
    // Check if we're in a game page (in the games folder)
    const isGamePage = window.location.pathname.includes('/games/');
    
    // If this is a game page and not coming from games.html, redirect to games.html
    if (isGamePage) {
        // Check if referrer is games.html or if no access has been granted
        const comingFromGamesPage = referrer.includes('games.html');
        const hasAccess = sessionStorage.getItem('accessGranted');
        
        if (!comingFromGamesPage && hasAccess) {
            // Set a flag to allow returning to this game after redirect
            sessionStorage.setItem('requestedGame', window.location.href);
            // Redirect to games.html
            window.location.href = '/games.html';
        } else if (!hasAccess) {
            // If no access at all, redirect to login page
            window.location.href = '/index.html';
        }
    }
})();
function checkAccess() {
    const sessionAccess = sessionStorage.getItem('accessGranted');
    const rememberMeToken = localStorage.getItem('rememberMeToken');
    
    // Check if either session is active or remember me token is valid
    let accessGranted = sessionAccess === 'true';
    
    // If no active session but we have a remember me token, verify it
    if (!accessGranted && rememberMeToken) {
        try {
            const tokenData = JSON.parse(atob(rememberMeToken.split('.')[1]));
            if (tokenData && tokenData.exp > Date.now() / 1000) {
                // Token is valid, restore session
                sessionStorage.setItem('accessGranted', 'true');
                accessGranted = true;
            } else {
                // Token expired, clean it up
                localStorage.removeItem('rememberMeToken');
            }
        } catch (e) {
            console.error('Error validating remember me token:', e);
            localStorage.removeItem('rememberMeToken');
        }
    }
    
    console.log('Access check - Session:', sessionAccess, 'Remember Me Token:', !!rememberMeToken);
    
    if (!accessGranted) {
        console.log('Access denied, redirecting to index.html');
        // Get the current URL path
        const currentPath = window.location.pathname;
        console.log('Current path:', currentPath);
        
        // Determine if we're on GitHub Pages or local
        let redirectPath;
        if (currentPath.includes('/Schooluk/')) {
            // GitHub Pages environment
            redirectPath = '/Schooluk/index.html';
        } else {
            // Local environment
            redirectPath = '/index.html';
        }
        
        console.log('Redirecting to:', redirectPath);
        window.location.href = redirectPath;
    } else {
        console.log('Access granted');
    }
}

// Run check immediately when the script loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, checking access');
    checkAccess();
});

// Also check when the page becomes visible again
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('Page became visible, checking access');
        checkAccess();
    }
});
function checkAccess() {
    const accessGranted = sessionStorage.getItem('accessGranted');
    console.log('Access check:', accessGranted); // Add logging to debug
    if (!accessGranted || accessGranted !== 'true') {
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
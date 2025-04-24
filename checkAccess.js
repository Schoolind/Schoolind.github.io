function checkAccess() {
    const accessGranted = sessionStorage.getItem('accessGranted');
    console.log('Access check:', accessGranted); // Add logging to debug
    if (!accessGranted || accessGranted !== 'true') {
        console.log('Access denied, redirecting to index.html');
        window.location.href = '/index.html';
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
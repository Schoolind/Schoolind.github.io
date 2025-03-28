function checkAccess() {
    const accessGranted = sessionStorage.getItem('accessGranted');
    if (!accessGranted || accessGranted !== 'true') {
        window.location.href = '/index.html';
    }
}

// Run check immediately
checkAccess();

// Also check when the page becomes visible again
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        checkAccess();
    }
});
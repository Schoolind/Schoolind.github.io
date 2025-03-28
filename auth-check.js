// Authentication check script
(function() {
    // Check if access has been granted
    const accessGranted = sessionStorage.getItem('accessGranted');
    
    // If access hasn't been granted, redirect to login page
    if (accessGranted !== 'true') {
        window.location.href = 'index.html';
    }
})();
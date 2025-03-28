// Load saved panic key settings
document.addEventListener('DOMContentLoaded', function() {
    const panicSettings = JSON.parse(localStorage.getItem('panicKey') || '{}');
    const panicUrlInput = document.getElementById('panicUrl');
    const panicKeyInput = document.getElementById('panicKey');
    
    if (panicSettings.url && panicUrlInput) {
        panicUrlInput.value = panicSettings.url;
    }
    if (panicSettings.key && panicKeyInput) {
        panicKeyInput.value = panicSettings.key;
    }
});

// Save panic settings
function savePanicUrl() {
    const url = document.getElementById('panicUrl').value;
    const key = document.getElementById('panicKey')?.value || 'Escape'; // Default to Escape key if no input

    if (url) {
        localStorage.setItem('panicKey', JSON.stringify({
            url: url,
            key: key
        }));
        alert('Panic settings saved!');
    } else {
        alert('Please enter a valid URL');
    }
}

// Add key listener for panic key activation
document.addEventListener('keydown', function(event) {
    const panicSettings = JSON.parse(localStorage.getItem('panicKey') || '{}');
    if (panicSettings.url) {
        if ((panicSettings.key && event.key.toLowerCase() === panicSettings.key.toLowerCase()) || 
            (!panicSettings.key && event.key === 'Escape')) {
            window.location.href = panicSettings.url;
        }
    }
});

// Add click listener for panic button
document.addEventListener('DOMContentLoaded', function() {
    const panicButton = document.getElementById('panicButton');
    if (panicButton) {
        panicButton.addEventListener('click', function() {
            const panicSettings = JSON.parse(localStorage.getItem('panicKey') || '{}');
            if (panicSettings.url) {
                window.location.href = panicSettings.url;
            } else {
                alert('Please set up a panic URL in settings first');
            }
        });
    }
});
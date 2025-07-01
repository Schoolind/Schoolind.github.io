// Panic Key functionality
const panicKeyInput = document.getElementById('panicKey');
        
function savePanicKey() {
    let url = document.getElementById('panicUrl').value;
    const key = document.getElementById('panicKey').value.toLowerCase();
    
    if (!url) {
        alert('Please enter a valid URL');
        return;
    }
    if (!key) {
        alert('Please enter a key');
        return;
    }

    // Add https:// if not present
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    localStorage.setItem('panicKey', JSON.stringify({ url, key }));
    alert('Panic key saved!');
}

// Add key listener for panic key activation
document.addEventListener('keydown', function(event) {
    const panicSettings = JSON.parse(localStorage.getItem('panicKey') || '{}');
    if (panicSettings.key && event.key.toLowerCase() === panicSettings.key.toLowerCase()) {
        window.location.href = panicSettings.url;
    }
});

// Load saved panic key settings
window.addEventListener('load', function() {
    const panicSettings = JSON.parse(localStorage.getItem('panicKey') || '{}');
    if (panicSettings.url) {
        document.getElementById('panicUrl').value = panicSettings.url;
        document.getElementById('panicKey').value = panicSettings.key;
    }
});
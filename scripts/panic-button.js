// Create and manage the panic button
function createPanicButton() {
    // Check if button already exists
    if (document.getElementById('global-panic-button')) {
        return;
    }

    // Create button container
    const panicContainer = document.createElement('div');
    panicContainer.id = 'global-panic-button';
    panicContainer.className = 'panic-button-container';
    panicContainer.style.display = 'none'; // Hidden by default
    
    // Load saved position or use default (top-right)
    const savedPosition = JSON.parse(localStorage.getItem('panicButtonPosition') || '{}');
    panicContainer.style.position = 'fixed';
    
    // Set initial position from saved values or default to top-right
    if (savedPosition.left !== undefined) {
        panicContainer.style.left = savedPosition.left;
        panicContainer.style.right = 'auto';
    } else {
        panicContainer.style.right = '20px';
        panicContainer.style.left = 'auto';
    }
    
    if (savedPosition.top !== undefined) {
        panicContainer.style.top = savedPosition.top;
        panicContainer.style.bottom = 'auto';
    } else {
        panicContainer.style.top = '20px';
        panicContainer.style.bottom = 'auto';
    }
    
    // Create the panic button with navbar button style
    const panicButton = document.createElement('div');
    panicButton.className = 'panic-button';
    panicButton.innerHTML = `
        <div class="panic-icon-container">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="panic-svg-icon">
                <circle cx="12" cy="12" r="10" class="panic-circle"></circle>
                <line x1="12" y1="8" x2="12" y2="12" class="panic-line"></line>
                <line x1="12" y1="16" x2="12.01" y2="16" class="panic-line"></line>
            </svg>
        </div>
        <span class="panic-text">PANIC</span>
    `;
    
    // Make the container draggable (entire area)
    makeDraggable(panicContainer, panicContainer);
    
    // Make the SVG clickable for navigation
    const svgIcon = panicButton.querySelector('.panic-svg-icon');
    if (svgIcon) {
        svgIcon.style.pointerEvents = 'auto';
        svgIcon.style.cursor = 'pointer';
        
        svgIcon.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering drag
            const panicUrl = localStorage.getItem('panicUrl') || 'https://google.com';
            window.location.href = panicUrl;
        });
    }
    
    // Make the text clickable too
    const panicText = panicButton.querySelector('.panic-text');
    if (panicText) {
        panicText.style.cursor = 'pointer';
        panicText.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering drag
            const panicUrl = localStorage.getItem('panicUrl') || 'https://google.com';
            window.location.href = panicUrl;
        });
    }
    
    // Enable pointer events on the button
    panicButton.style.pointerEvents = 'auto';
    
    // Handle double click for activation
    let lastClickTime = 0;
    
    panicButton.addEventListener('dblclick', function(e) {
        e.preventDefault();
        e.stopPropagation();
        activatePanic();
    }, false);
    
    // Also handle double tap on touch devices
    let lastTap = 0;
    panicButton.addEventListener('touchend', function(e) {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 300 && tapLength > 0) {
            // Double tap detected
            e.preventDefault();
            e.stopPropagation();
            activatePanic();
        }
        lastTap = currentTime;
    }, false);
    
    // Prevent single click from activating
    panicButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
    }, false);
    
    // Add button to container
    panicContainer.appendChild(panicButton);
    
    // Add to body
    document.body.appendChild(panicContainer);
    
    // Load settings
    loadPanicSettings();
}

// Load panic button settings
function loadPanicSettings() {
    const panicUrl = localStorage.getItem('panicUrl') || 'https://google.com';
    const panicButtonStyle = localStorage.getItem('panicButtonStyle') || 'always-visible';
    const panicButtonSize = localStorage.getItem('panicButtonSize') || 'medium';
    
    // Update UI if on settings page
    const panicUrlInput = document.getElementById('panicUrl');
    const panicStyleToggle = document.getElementById('panicButtonStyle');
    
    if (panicUrlInput) panicUrlInput.value = panicUrl;
    if (panicStyleToggle) panicStyleToggle.checked = panicButtonStyle === 'always-visible';
    
    // Apply the loaded style and size
    applyPanicButtonStyle(panicButtonStyle);
    applyPanicButtonSize(panicButtonSize);
    
    // Update active size button in settings
    updateActiveSizeButton(panicButtonSize);
    
    return { panicUrl, panicButtonStyle, panicButtonSize };
}

// Apply the selected panic button size
function applyPanicButtonSize(size) {
    const panicButton = document.querySelector('.panic-button');
    if (!panicButton) return;
    
    // Remove all size classes first
    panicButton.classList.remove('panic-size-small', 'panic-size-medium', 'panic-size-large', 'panic-size-xlarge');
    
    // Add the selected size class
    panicButton.classList.add(`panic-size-${size}`);
    
    // Save to localStorage
    localStorage.setItem('panicButtonSize', size);
    
    // Update active button in settings
    updateActiveSizeButton(size);
}

// Update the active size button in settings
function updateActiveSizeButton(size) {
    const sizeButtons = document.querySelectorAll('.size-preset');
    if (!sizeButtons.length) return;
    
    sizeButtons.forEach(button => {
        if (button.dataset.size === size) {
            button.style.background = '#4fc3f7';
            button.style.color = 'white';
            button.style.boxShadow = '0 0 10px rgba(79, 195, 247, 0.3)';
        } else {
            button.style.background = 'rgba(255, 255, 255, 0.1)';
            button.style.color = '#ddd';
            button.style.boxShadow = 'none';
        }
    });
}

// Set panic button size from UI
function setPanicButtonSize(size) {
    applyPanicButtonSize(size);
    updateActiveSizeButton(size);
    // Save the size immediately without showing save button
    localStorage.setItem('panicButtonSize', size);
}

// Show save button when URL is changed
function showSaveButton() {
    const saveButton = document.getElementById('saveSettingsBtn');
    if (saveButton) {
        saveButton.style.display = 'flex';
    }
}

// Apply the selected panic button style
function applyPanicButtonStyle(style) {
    const panicButton = document.getElementById('global-panic-button');
    
    if (!panicButton) return;
    
    if (style === 'always-visible') {
        panicButton.style.display = 'block';
        
        // Ensure it's positioned properly when showing
        const savedPosition = JSON.parse(localStorage.getItem('panicButtonPosition') || '{}');
        if (!savedPosition || (!savedPosition.left && !savedPosition.right)) {
            // Default position if none saved
            panicButton.style.right = '20px';
            panicButton.style.top = '20px';
        }
    } else {
        panicButton.style.display = 'none';
    }
}

// Make element draggable
function makeDraggable(container, handle) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let isDragging = false;
    let startX, startY;
    const dragThreshold = 5; // pixels to move before considering it a drag

    // Variables for requestAnimationFrame throttling
    let latestX = null, latestY = null;
    let animationFrameId = null;
    
    // Make the entire container draggable
    container.style.cursor = 'grab';
    
    // Handle both mouse and touch events
    handle.onmousedown = startDrag;
    handle.ontouchstart = startDrag;
    
    function startDrag(e) {
        e = e || window.event;
        e.stopPropagation();
        
        // Get the initial touch/click position
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        
        startX = clientX;
        startY = clientY;
        
        // Prevent text selection during drag
        document.onselectstart = () => false;
        
        // Set up event listeners
        document.onmouseup = endDrag;
        document.ontouchend = endDrag;
        document.onmousemove = checkDrag;
        document.ontouchmove = checkDrag;
        
        // Add visual feedback
        container.classList.add('dragging');
        isDragging = false;
    }
    
    function checkDrag(e) {
        e = e || window.event;
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        
        // Check if we've moved enough to consider it a drag
        if (!isDragging && 
            (Math.abs(clientX - startX) > dragThreshold || 
             Math.abs(clientY - startY) > dragThreshold)) {
            isDragging = true;
            container.style.cursor = 'grabbing';
            startDragging(e);
        }
        
        if (isDragging) {
            e.preventDefault();
            dragMove(e);
        }
    }
    
    function startDragging(e) {
        e = e || window.event;
        e.preventDefault();
        
        // Get the initial touch/click position
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        
        // Get the mouse cursor position at startup
        pos3 = clientX;
        pos4 = clientY;
        
        // Disable transitions for smoother dragging
        container.style.transition = 'none';
        // Update event listeners for actual dragging
        document.onmousemove = dragMove;
        document.ontouchmove = dragMove;
    }
    
    function dragMove(e) {
        if (!e) return;
        e.preventDefault();
        e.stopPropagation();

        // Update latest coordinates
        if (e.touches) {
            latestX = e.touches[0].clientX;
            latestY = e.touches[0].clientY;
        } else {
            latestX = e.clientX;
            latestY = e.clientY;
        }

        // Throttle DOM updates using requestAnimationFrame
        if (!animationFrameId) {
            animationFrameId = requestAnimationFrame(updatePosition);
        }
    }

    function updatePosition() {
        animationFrameId = null; // Clear the frame id so we can request the next one
        if (latestX === null || latestY === null) return;

        // Calculate button dimensions
        const buttonWidth = container.offsetWidth;
        const buttonHeight = container.offsetHeight;

        // Get viewport dimensions
        const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        // Calculate new position (center the button on cursor)
        let newLeft = latestX - buttonWidth / 2;
        let newTop = latestY - buttonHeight / 2;

        // Keep button within viewport bounds
        newLeft = Math.max(0, Math.min(newLeft, viewportWidth - buttonWidth));
        newTop = Math.max(0, Math.min(newTop, viewportHeight - buttonHeight));

        // Apply new position
        container.style.left = newLeft + 'px';
        container.style.top = newTop + 'px';
        container.style.right = 'auto';
        container.style.bottom = 'auto';
    }
    
    function endDrag() {
        // Clean up event listeners
        document.onmouseup = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.ontouchmove = null;
        document.onselectstart = null;

        // Cancel any pending animation frame
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
        latestX = latestY = null;
        
        // Remove transition for final positioning
        container.style.transition = 'none';
        
        // Remove dragging class and reset cursor
        container.classList.remove('dragging');
        container.style.cursor = 'grab';
        
        if (isDragging) {
            // Save the position when dragging ends
            const position = {
                top: container.style.top,
                left: container.style.left,
                right: container.style.right,
                bottom: container.style.bottom
            };
            localStorage.setItem('panicButtonPosition', JSON.stringify(position));
        }
        
        // Reset transition after a short delay
        setTimeout(() => {
            container.style.transition = 'left 0.1s ease, top 0.1s ease';
        }, 50);
        
        // Reset dragging state
        isDragging = false;
    }
}

// Toggle panic button style
function togglePanicButtonStyle() {
    const style = document.getElementById('panicButtonStyle').checked ? 'always-visible' : 'hidden';
    localStorage.setItem('panicButtonStyle', style);
    applyPanicButtonStyle(style);
}

// Save panic settings
function savePanicSettings() {
    const saveButton = document.getElementById('saveSettingsBtn');
    let panicUrl = document.getElementById('panicUrl').value.trim();
    const panicButtonStyle = document.getElementById('panicButtonStyle').checked ? 'always-visible' : 'hidden';
    
    // Add https:// if missing and URL is not empty
    if (panicUrl && !panicUrl.match(/^https?:\/\//i)) {
        panicUrl = 'https://' + panicUrl;
        document.getElementById('panicUrl').value = panicUrl; // Update the input field
    }
    
    // Disable button and show loading state
    saveButton.disabled = true;
    
    // Save to localStorage
    if (panicUrl) {
        localStorage.setItem('panicUrl', panicUrl);
    }
    localStorage.setItem('panicButtonStyle', panicButtonStyle);
    
    // Show success state
    saveButton.classList.add('success');
    
    // Reset after animation completes
    setTimeout(() => {
        saveButton.classList.remove('success');
        saveButton.disabled = false;
        saveButton.style.display = 'none'; // Hide the save button after saving
    }, 2000);
    
    // Apply the new style immediately
    applyPanicButtonStyle(panicButtonStyle);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createPanicButton();
    
    // Add click event listener to save button
    const saveButton = document.getElementById('saveSettingsBtn');
    if (saveButton) {
        saveButton.addEventListener('click', savePanicSettings);
    }
});

// Make activatePanic globally available
window.activatePanic = function() {
    const panicUrl = localStorage.getItem('panicUrl') || 'https://google.com';
    window.location.href = panicUrl;
};

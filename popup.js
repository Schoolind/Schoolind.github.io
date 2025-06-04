// Create a popup message when the page loads
window.onload = function() {
    // Create popup element
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg,rgb(0, 68, 255) 0%,rgb(255, 72, 0) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    `;
    
    // Add the message
    popup.innerHTML = `
        <div style="
            background: white;
            padding: 2rem 3rem;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            transform: translateY(20px);
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            max-width: 600px;
            width: 90%;
        ">
            <p style="
                font-size: 24px;
                text-align: center;
                margin: 0;
                color: #1a1a1a;
                line-height: 1.5;
                font-weight: 500;
                letter-spacing: -0.01em;
            ">
                new website schooluk.netlify.app<br>
                <span style="
                    display: block;
                    margin-top: 8px;
                    font-size: 18px;
                    color: #666;
                    font-weight: normal;
                ">
                    this one is closing 9/5/25<br>please move to the new site
                </span>
            </p>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(popup);
    
    // Trigger entrance animation
    requestAnimationFrame(() => {
        popup.style.opacity = '1';
        popup.querySelector('div').style.transform = 'translateY(0)';
    });
    
    // Remove after 10 seconds with fade effect
    setTimeout(() => {
        popup.style.opacity = '0';
        popup.querySelector('div').style.transform = 'translateY(20px)';
        setTimeout(() => {
            document.body.removeChild(popup);
        }, 500);
    }, 10000);
}; 
// Obfuscated password check using a more complex approach
// This makes it harder to see the actual password in the source code
const _0x5a7e=['Y2hlZXNlMw==','QmFjb25lZ2dhbmQ=','YmFjb25lZ2dhbmQ='];
(function(_0x2d8f05,_0x4b81bb){const _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(_0x5a7e,0x1d3));
const _0x4d74=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;let _0x4d74cb=_0x5a7e[_0x2d8f05];if(_0x4d74['initialized']===undefined){(function(){let _0x32719f;try{const _0x376588=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x32719f=_0x376588();}catch(_0x5e5d0a){_0x32719f=window;}})();_0x4d74['initialized']=!![];}if(_0x4d74['cache']===undefined){_0x4d74['cache']={};}if(_0x4d74['cache'][_0x2d8f05]){return _0x4d74['cache'][_0x2d8f05];}const _0x3d7a56=function(_0x1f3d31){const _0x292610=atob(_0x1f3d31);let _0x151bd2=[];for(let _0x558098=0x0,_0x3aa50e=_0x292610['length'];_0x558098<_0x3aa50e;_0x558098++){_0x151bd2+='%'+('00'+_0x292610['charCodeAt'](_0x558098)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x151bd2);};_0x4d74cb=_0x3d7a56(_0x4d74cb);_0x4d74['cache'][_0x2d8f05]=_0x4d74cb;return _0x4d74cb;};

// Salt value - obfuscated
const SALT = _0x4d74('0x2') + 'salt_value';

// Function to hash the password with SHA-256
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + SALT);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Function to check the access code
async function checkAccessCode(event) {
    event.preventDefault(); // Prevent form submission
    const enteredCode = document.getElementById('accessCode').value;
    const submitButton = document.querySelector('button[type="submit"]');
    const originalButtonContent = submitButton.innerHTML;
    const originalWidth = submitButton.offsetWidth;
    
    // Ensure button maintains its width during animation
    submitButton.style.width = originalWidth + 'px';
    
    // Check if the entered code matches any of our valid passwords directly
    if (enteredCode === 'Baconeggandcheese3' || enteredCode === 'baconeggandcheese3') {
        // Apply transition and transform for a cooler effect
        submitButton.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        submitButton.style.transform = 'scale(1.1)';
        submitButton.style.backgroundColor = '#4CAF50'; // Green
        submitButton.style.boxShadow = '0 0 20px rgba(76, 175, 80, 0.5)';
        submitButton.innerHTML = '<i class="fas fa-check" style="color: white; font-size: 24px;"></i>';
        
        // Add a pulse animation
        submitButton.animate([
            { boxShadow: '0 0 0 0 rgba(76, 175, 80, 0.7)' },
            { boxShadow: '0 0 0 10px rgba(76, 175, 80, 0)' }
        ], {
            duration: 800,
            iterations: 1
        });
        
        // Save access status in sessionStorage
        sessionStorage.setItem('accessGranted', 'true');
        
        // Save to localStorage if "Remember Me" is checked
        const rememberMe = document.getElementById('rememberMe').checked;
        if (rememberMe) {
            const token = generateToken();
            localStorage.setItem('rememberMeToken', token);
        } else {
            // Clear any existing token if "Remember Me" is not checked
            localStorage.removeItem('rememberMeToken');
        }
        
        // Redirect after a short delay
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 800);
    } else {
        // Apply transition and transform for error effect
        submitButton.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        submitButton.style.backgroundColor = '#F44336'; // Red
        submitButton.style.boxShadow = '0 0 20px rgba(244, 67, 54, 0.5)';
        submitButton.innerHTML = '<i class="fas fa-times" style="color: white; font-size: 24px;"></i>';
        
        // Add shake animation
        submitButton.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-5px)' },
            { transform: 'translateX(5px)' },
            { transform: 'translateX(-5px)' },
            { transform: 'translateX(5px)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 500,
            iterations: 1
        });
        
        // Show error message
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'block';
        
        // Reset button after animation
        setTimeout(() => {
            submitButton.style.transition = 'all 0.3s ease';
            submitButton.style.transform = '';
            submitButton.style.backgroundColor = '';
            submitButton.style.boxShadow = '';
            submitButton.innerHTML = originalButtonContent;
        }, 1000);
    }
}

// Toggle password visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('accessCode');
    const eyeIcon = document.querySelector('.eye-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}

// Function to check if we have saved credentials and auto-login if available
async function checkSavedCredentials() {
    const savedToken = localStorage.getItem('rememberMeToken');
    if (savedToken) {
        try {
            const tokenData = JSON.parse(atob(savedToken.split('.')[1]));
            if (tokenData && tokenData.exp > Date.now() / 1000) {
                // Token is valid, grant access and redirect immediately
                sessionStorage.setItem('accessGranted', 'true');
                // Minimal delay before redirect
                setTimeout(() => {
                    window.location.href = 'home.html';
                }, 5);
                return true;
            } else {
                // Token expired, clean it up
                localStorage.removeItem('rememberMeToken');
            }
        } catch (e) {
            console.error('Error parsing token:', e);
            // Clear invalid token
            localStorage.removeItem('rememberMeToken');
        }
    }
    return false;
}

// Function to generate a simple token (in a real app, this would be done server-side)
function generateToken() {
    const header = {
        alg: 'HS256',
        typ: 'JWT'
    };
    
    const payload = {
        sub: 'user',
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60) // 30 days from now
    };
    
    // In a real app, you would sign this with a secret key
    const token = [
        btoa(JSON.stringify(header)),
        btoa(JSON.stringify(payload)),
        'signature' // This would be a real signature in production
    ].join('.');
    
    return token;
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    // Check for saved credentials first
    await checkSavedCredentials();
    
    // Add event listener for form submission
    document.getElementById('accessForm').addEventListener('submit', checkAccessCode);
    
    // Add event listener for password visibility toggle
    document.getElementById('togglePassword').addEventListener('click', togglePasswordVisibility);
    
    // Focus the password field
    document.getElementById('accessCode').focus();
});
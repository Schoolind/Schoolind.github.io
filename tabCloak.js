window.addEventListener('load', function() {
    const savedCloak = localStorage.getItem('tabCloak');
    if (savedCloak) {
        const cloak = JSON.parse(savedCloak);
        applyCloak(cloak);
    }
});

// Listen for storage changes to update all open tabs
window.addEventListener('storage', function(e) {
    if (e.key === 'tabCloak') {
        const cloak = JSON.parse(e.newValue);
        applyCloak(cloak);
    }
});

function applyCloak(cloak) {
    // Remove existing favicon
    const existingFavicon = document.querySelector("link[rel*='icon']");
    if (existingFavicon) {
        existingFavicon.remove();
    }

    // Create new favicon
    const newFavicon = document.createElement('link');
    newFavicon.rel = 'icon';
    newFavicon.type = 'image/x-icon';
    newFavicon.href = cloak.icon;
    document.head.appendChild(newFavicon);

    // Update title
    document.title = cloak.title;
}


function setTabCloak(cloak) {
    let title, icon;

    switch(cloak) {
        case 'google':
            title = 'Google';
            icon = 'https://www.google.com/favicon.ico';
            break;
        case 'drive':
            title = 'My Drive - Google Drive';
            icon = 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png';
            break;
        case 'powerschool':
            title = 'Student Profile | Home | Infinite Campus';
            icon = 'https://920.ncsis.gov/campus/nav-wrapper/assets/icons/favicon-32x32.png';
            break;
        case 'docs':
            title = 'Google Docs';
            icon = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico';
            break;
        case 'classroom':
            title = 'Google Classroom';
            icon = 'https://ssl.gstatic.com/classroom/favicon.png';
            break;
        case 'canvas':
            title = 'Home';
            icon = 'https://instructure-uploads.s3.amazonaws.com/account_57310000000000001/attachments/3319/favicon.ico?AWSAccessKeyId=AKIAJFNFXH2V2O7RPCAA&Expires=1912675353&Signature=JHdDn8qhskjryamL%2B6uQkbpO6wE%3D&response-cache-control=Cache-Control%3Amax-age%3D473364000%2C%20public&response-expires=473364000';
            break;
        case 'duolingo':
            title = "Duolingo - the world's best way to learn Spanish";
            icon = 'https://d35aaqx5ub95lt.cloudfront.net/favicon.ico';
            break;
        case 'ixl':
            title = 'IXL | Math, Language Arts, Science, Social Studies, and Spanish';
            icon = 'https://www.ixl.com/favicon.ico';
            break;
        default:
            title = 'SchoolUK';
            icon = '../images/DALL·E 2025-03-20 18.25.01 - A modern and professional logo featuring the words \'School\' and \'UK\'. The design should be clean and sleek, incorporating elements such as a book, a g (2).ico';
    }

    // Remove existing favicon
    const existingFavicon = document.querySelector("link[rel*='icon']");
    if (existingFavicon) {
        existingFavicon.remove();
    }

    // Create new favicon link
    const newFavicon = document.createElement('link');
    newFavicon.rel = 'icon';
    newFavicon.type = 'image/x-icon';
    newFavicon.href = icon;
    document.head.appendChild(newFavicon);

    // Update title and save settings
    document.title = title;
    localStorage.setItem('tabCloak', JSON.stringify({ title, icon }));
}

// Apply cloak on page load
window.addEventListener('load', function() {
    const savedCloak = localStorage.getItem('tabCloak');
    if (savedCloak) {
        const cloak = JSON.parse(savedCloak);
        const existingFavicon = document.querySelector("link[rel*='icon']");
        if (existingFavicon) {
            existingFavicon.remove();
        }
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.type = 'image/x-icon';
        newFavicon.href = cloak.icon;
        document.head.appendChild(newFavicon);
        document.title = cloak.title;
    }
});
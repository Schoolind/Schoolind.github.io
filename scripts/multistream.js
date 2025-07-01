 // Sample channel data
 const channels = [
    { name: "ABC", url: "https://kleanembed.online/embed/wffwehg9yklo7k3dmabqxi70sbws5w4q", type: "iframe" },
    { name: "Bein Sports", url: "https://kleanembed.online/embed/afdb73c451239369681c5e34207bf17a", type: "iframe" },
    { name: "Cartoon Network", url: "https://kleanembed.online/embed/j7frlCr9theTHiPhistuSPInuchosawE", type: "iframe" },
    { name: "CBS", url: "https://fl3.moveonjoy.com/CBS_News/index.m3u8", type: "m3u8" },
    { name: "CBS Golazo", url: "https://dai.google.com/linear/hls/event/GxrCGmwST0ixsrc_QgB6qw/master.m3u8", type: "m3u8" },
    { name: "CBS Sports", url: "https://fl3.moveonjoy.com/CBS_SPORTS_NETWORK/index.m3u8", type: "m3u8" },
    { name: "Channel 5 ⭐", url: "https://daddylive.dad/embed/stream-355.php", type: "iframe" },
    { name: "Dragon Ball Z", url: "https://kleanembed.online/embed/pH1yC6tG9rU2pL5zQ0nH3sI8wB4tFi", type: "iframe" },
    { name: "ESPN", url: "https://kleanembed.online/embed/tgcyutly3zujtd3bgef8nevyy5v5n301", type: "iframe" },
    { name: "ESPN 2", url: "https://kleanembed.online/embed/zL7vB5kT3aO1gR8iX4nF6wP9dY2uHs", type: "iframe" },
    { name: "ESPN U", url: "https://kleanembed.online/embed/oI3uC8jF6yP2bW0zQ9nA5sM7lX1eRt", type: "iframe" },
    { name: "ESPN Deportes ", url: "https://kleanembed.online/embed/45cb98f6ff304e742c65ec6a3b5d087f", type: "iframe" },
    { name: "ESPN News", url: "https://kleanembed.online/embed/hN9eS4rZ1wM7fC3vJ0aX8pG2yQ5bUi", type: "iframe" },
    { name: "ACCN", url: "https://fl3.moveonjoy.com/ACC_NETWORK/index.m3u8", type: "m3u8" },
    { name: "Big 10", url: "https://fl3.moveonjoy.com/BIG_TEN_NETWORK/tracks-v1a1/mono.ts.m3u8", type: "m3u8" },
    { name: "SECN", url: "https://fl3.moveonjoy.com/SEC_NETWORK/index.m3u8", type: "m3u8" },
    { name: "Fanduel TV", url: "https://fl3.moveonjoy.com/PAC_12/index.m3u8", type: "m3u8" },
    { name: "Food Network", url: "https://fl3.moveonjoy.com/FOOD_NETWORK/index.m3u8", type: "m3u8" },
    { name: "Fox Deportes ", url: "https://kleanembed.online/embed/26f350e4a688a9a15a10f1c76712551f", type: "iframe" },
    { name: "Fox Soccer plus ", url: "https://kleanembed.online/embed/trAbIqUqIYicRlcHuri1LwenehacrowU", type: "iframe" },
    { name: "FS1", url: "https://fl3.moveonjoy.com/FOX_Sports_1/index.m3u8", type: "m3u8" },
    { name: "FS2", url: "https://kleanembed.online/embed/9bfdo7kxd45sst08hbuh6rwhkykmitwb", type: "iframe" },
    { name: "fuboTV", url: "https://apollo.production-public.tubi.io/live/ac-fubo.m3u8", type: "m3u8" },
    { name: "ION", url: "https://fl3.moveonjoy.com/ION_TV/index.m3u8", type: "m3u8" },
    { name: "HGTV", url: "https://fl3.moveonjoy.com/HGTV/index.m3u8", type: "m3u8" },
    { name: "laligatv", url: "https://kleanembed.online/embed/pajip6maru1rlcoz1qizebitocof4aP7", type: "iframe" },
    { name: "NBA TV", url: "https://kleanembed.online/embed/T1ag4xopruwaFuThuwUS7lNI4HeTucot", type: "iframe" },
    { name: "NFL Network", url: "https://fl3.moveonjoy.com/NFL_NETWORK/index.m3u8", type: "m3u8" },
    { name: "NFL Redzone", url: "https://fl3.moveonjoy.com/NFL_RedZone/index.m3u8", type: "m3u8" },
    { name: "NHL Network", url: "https://fl3.moveonjoy.com/NHL_NETWORK/index.m3u8", type: "m3u8" },
    { name: "Nicktoons", url: "https://fl1.moveonjoy.com/NICKTOONS/tracks-v1a1/mono.m3u8", type: "m3u8" },
    { name: "Premier Sports 1", url: "https://kleanembed.online/embed/aE5dT9yH2uJ8gP1zWn7fK4oL6mV3cB", type: "iframe" },
    { name: "Premier Sports 2", url: "https://kleanembed.online/embed/sY1bX6cA8rM3wQ7iN9jV2pE5hU0lGf", type: "iframe" },
    { name: "TBS", url: "https://kleanembed.online/embed/prLbr6tHLvozlcehLbrIb5crU2awoklC", type: "iframe" },
    { name: "TNT", url: "https://kleanembed.online/embed/940ecd921be2f888c443b67d0b40598b", type: "iframe" },
    { name: "TruTV", url: "https://kleanembed.online/embed/63809a66e263a940dfc7bc4f429907d6", type: "iframe" },
    { name: "USA", url: "https://kleanembed.online/embed/prObIniBoc7ltizEGEvUSpLstaClmlbr", type: "iframe" },
    { name: "Tenis channel", url: "https://kleanembed.online/embed/671644cddc7ee3158d3291c88ec8a1a1", type: "iframe" },
    { 
        name: "MLB TV", 
        type: "dropdown",
        options: [
            { name: "Loading games...", url: "#", type: "iframe" }
        ]
    },
    { name: "MLB Network", url: "https://kleanembed.online/embed/dd2b541cd3c0f5e547f9a7cdd4c2cb06", type: "iframe" },
    { 
        name: "DAZN", 
        type: "dropdown",
        options: [
            { name: "Dazn 1", url: "https://antenaplanet.store/dazn1de.php", type: "iframe" },
            { name: "Dazn 2", url: "https://antenaplanet.store/dazn2de.php", type: "iframe" },
            { name: "Dazn 1 spanish", url: "https://thedaddy.to/embed/stream-445.php", type: "iframe" },
            { name: "Dazn 2 spanish", url: "https://thedaddy.to/embed/stream-446.php", type: "iframe" },
            { name: "Dazn 3 spanish", url: "https://thedaddy.to/embed/stream-447.php", type: "iframe" },
            { name: "Dazn 4 spanish", url: "https://thedaddy.to/embed/stream-448.php", type: "iframe" },
            { name: "Dazn f1", url: "https://thedaddy.to/embed/stream-537.php", type: "iframe" },
            { name: "Dazn laliga", url: "https://thedaddy.to/embed/stream-538.php", type: "iframe" },
            { name: "Dazn laliga 2", url: "https://thedaddy.to/embed/stream-43.php", type: "iframe" },
            { name: "Dazn Portugal", url: "https://thedaddy.to/embed/stream-918.php", type: "iframe" },
            { name: "Dazn Portugal 2", url: "https://antenaplanet.store/dazn4pt.php", type: "iframe" },
            { name: "Dazn Portugal UK", url: "https://kleanembed.online/embed/29f80fe360ea09758cda99ec2eb61fd2", type: "iframe" },
        ]
    },
     
    { 
        name: "Fanduel sports", 
        type: "dropdown",
        options: [
            { name: "Fanduel 1", url: "https://daddylive.dad/embed/stream-896.php", type: "iframe" },
            { name: "Fanduel 2", url: "https://daddylive.dad/embed/stream-902.php", type: "iframe" },
            { name: "Fanduel 3", url: "https://daddylive.dad/embed/stream-905.php", type: "iframe" },
        ]
    },
    { 
        name: "FIFA", 
        type: "dropdown",
        options: [
            { name: "FIFA", url: "https://a62dad94.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X0ZJRkFQbHVzRW5nbGlzaF9ITFM/playlist.m3u8", type: "m3u8" },
            { name: "Germany", url: "https://4397879b.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWRlX0ZJRkFQbHVzR2VybWFuX0hMUw/playlist.m3u8", type: "m3u8" },
            { name: "France", url: "https://37b4c228.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWZyX0ZJRkFQbHVzRnJlbmNoX0hMUw/playlist.m3u8", type: "m3u8" },
            { name: "Italy", url: "https://5d95f7d7.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWl0X0ZJRkFQbHVzSXRhbGlhbl9ITFM/playlist.m3u8", type: "m3u8" },
            { name: "Spain", url: "https://d63fabad.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWVzX0ZJRkFQbHVzU3BhbmlzaF9ITFM/playlist.m3u8", type: "m3u8" },
        ]
    },
    { 
        name: "NBC", 
        type: "dropdown",
        options: [
            { name: "NBC", url: "https://a62dad94.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X0ZJRkFQbHVzRW5nbGlzaF9ITFM/playlist.m3u8", type: "m3u8" },
            { name: "NBC philadelphia", url: "https://kleanembed.online/embed/b46c64f505d77d9c3ba37c2f3037f0f3", type: "iframe" },
            { name: "NBC chicago", url: "https://thedaddy.to/embed/stream-776.php", type: "iframe" },
            { name: "NBC california", url: "https://thedaddy.to/embed/stream-755.php", type: "iframe" },
            { name: "NBC washington", url: "https://thedaddy.to/embed/stream-778.php", type: "iframe" },
            { name: "NBC bayarea", url: "https://kleanembed.online/embed/5411235d278f9abfce9db28c140374d5", type: "iframe" },
            { name: "NBC boston", url: "https://thedaddy.to/embed/stream-754.php", type: "iframe" },
            { name: "NBC golf", url: "https://thedaddy.to/embed/stream-318.php", type: "iframe" },
        ]
    },
    { 
        name: "TNT SPORTS", 
        type: "dropdown",
        options: [
            { name: "Server 1", url: "https://kleanembed.online/embed/FrofUdRljoCLdruGUdR295IfisTlsW1w", type: "iframe" },
            { name: "Server 2", url: "https://kleanembed.online/embed/c5phutHUkothlwRudRO8rosaS3B64ini", type: "iframe" },
            { name: "Server 3", url: "https://kleanembed.online/embed/SodrItO5WeQeFraDRoQa900eSw68I9LG", type: "iframe" },
            { name: "Server 4", url: "https://kleanembed.online/embed/8esiM7BRatIQ3cAdaxes34tesIbrOpOp", type: "iframe" },
        ]
    },
    { 
        name: "TSN", 
        type: "dropdown",
        options: [
            { name: "tsn1", url: "https://fl5.moveonjoy.com/TSN_1/index.m3u8", type: "m3u8" },
            { name: "tsn2", url: "https://fl5.moveonjoy.com/TSN_2/index.m3u8", type: "m3u8" },
            { name: "tsn3", url: "https://fl5.moveonjoy.com/TSN_3/index.m3u8", type: "m3u8" },
            { name: "tsn4", url: "https://fl5.moveonjoy.com/TSN_4/index.m3u8", type: "m3u8" },
            { name: "tsn5", url: "https://fl5.moveonjoy.com/TSN_5/index.m3u8", type: "m3u8" },
        ]
    },
    { 
        name: "Sky sports", 
        type: "dropdown",
        options: [
            { name: "skysports", url: "https://kleanembed.online/embed/kl11IkOsWATR8duxiWrOyiprERl2hLx4", type: "m3u8" },
            { name: "skysports action", url: "https://kleanembed.online/embed/wra2wlraTrewrAwohlsiCr0kUpHlswuc", type: "m3u8" },
            { name: "skysports bundesliga", url: "https://kleanembed.online/embed/wramespicr0swivlb9hAserldOthofas", type: "m3u8" },
            { name: "skysports cricket", url: "https://kleanembed.online/embed/j5ru6icHofROsespidec64w0s7lgo8ot", type: "m3u8" },
            { name: "skysports football", url: "https://kleanembed.online/embed/zuw3aYlboraPaStUP4o5ropHlbrospev", type: "m3u8" },
            { name: "skysports f1", url: "https://kleanembed.online/embed/888520f36cd94c5da4c71fddc1a5fc9b", type: "m3u8" },
            { name: "skysports golf", url: "https://kleanembed.online/embed/juDiYAyaWljAtH55usw2sWogINI49kIY", type: "m3u8" },
            { name: "skysports main event", url: "https://kleanembed.online/embed/4reStAcaHuraStIc3o7rOdRAprEy2glB", type: "m3u8" },
            { name: "skysports mix", url: "https://kleanembed.online/embed/phAjl4we7iw0agitOpro8Rlcrotrufr", type: "m3u8" },
            { name: "skysports motogp", url: "https://kleanembed.online/embed/1c6f53f565af34b3099d28adba983591", type: "m3u8" },
            { name: "skysports news", url: "https://kleanembed.online/embed/ZiProtriRlspiriBrI2oProjohAfretA", type: "m3u8" },
            { name: "skysports premier league", url: "https://kleanembed.online/embed/swapr5jlpHidrlfR65ofRi8a0itHI6oc", type: "m3u8" },
            { name: "skysports racing", url: "https://kleanembed.online/embed/x5Dodrl6Ro21RUprudEQAFRUTEfLPhec", type: "m3u8" },
        
        ]
    },
];

let activeStreams = [];
let focusedStream = 0;
let currentLayout = 1;

// Function to fetch MLB games for today
async function fetchMLBGames() {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    
    try {
        // First, get the games for today
        const scheduleRes = await fetch(`https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&date=${formattedDate}`);
        const scheduleData = await scheduleRes.json();
        
        if (!scheduleData.dates || scheduleData.dates.length === 0) {
            updateMLBDropdown([{ name: "No games today", url: "#", type: "iframe" }]);
            return;
        }
        
        const games = scheduleData.dates[0].games;
        
        // Sort games by start time
        games.sort((a, b) => new Date(a.gameDate) - new Date(b.gameDate));
        
        // Get team data for team names
        const teamsRes = await fetch('https://statsapi.mlb.com/api/v1/teams?sportId=1');
        const teamsData = await teamsRes.json();
        const teams = {};
        teamsData.teams.forEach(team => {
            teams[team.id] = team.abbreviation;
        });
        
        // Create options for each game
        const gameOptions = games.map((game, index) => {
            const gameTime = new Date(game.gameDate);
            const options = {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            };
            
            const timeString = gameTime.toLocaleTimeString('en-US', options);
            return {
                name: timeString,
                url: `https://streamscenter.online/embed/ch${15 + index}.php`,
                type: "iframe"
            };
        });
        
        updateMLBDropdown(gameOptions);
        
    } catch (error) {
        console.error('Error fetching MLB games:', error);
        updateMLBDropdown([{ name: "Error loading games", url: "#", type: "iframe" }]);
    }
}

function updateMLBDropdown(options) {
    const mlbChannel = channels.find(ch => ch.name === 'MLB TV');
    if (mlbChannel) {
        mlbChannel.options = options;
        // Refresh the channel list
        const channelList = document.getElementById('channelList');
        if (channelList) {
            channelList.innerHTML = '';
            populateChannelList();
        }
    }
}

// Initialize the application
function init() {
    populateChannelList();
    createVideoContainers();
    createStreamButtons();
    updateStreamButtons();
    // Fetch MLB games
    fetchMLBGames();
}

function populateChannelList() {
    const channelList = document.getElementById('channelList');
    channels.forEach((channel, index) => {
        const channelItem = document.createElement('div');
        channelItem.className = 'channel-item';
        
        if (channel.type === 'dropdown') {
            // Create dropdown for MLB TV
            const wrapperId = `dropdown-${index}`;
            channelItem.innerHTML = `
                <div class="dropdown-wrapper" id="${wrapperId}">
                    <div class="dropdown-header">
                        <span class="channel-name">${channel.name}</span>
                        <span class="dropdown-arrow">▼</span>
                    </div>
                    <div class="dropdown-content">
                        ${channel.options.map((option, i) => `
                            <div class="dropdown-item" data-channel='${JSON.stringify(option).replace(/'/g, '&#39;')}'>
                                <span>${option.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            // Add click handler for dropdown header
            const header = channelItem.querySelector('.dropdown-header');
            header.onclick = (e) => {
                e.stopPropagation();
                const wrapper = document.getElementById(wrapperId);
                wrapper.classList.toggle('active');
            };
        } else {
            // Regular channel item
            channelItem.innerHTML = `
                <span class="channel-name">${channel.name}</span>
            `;
            channelItem.onclick = () => addChannelToStream(channel);
        }
        
        channelList.appendChild(channelItem);
    });

    // Add click handler for dropdown items
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const channel = JSON.parse(item.dataset.channel.replace(/&#39;/g, "'"));
            addChannelToStream(channel);
            // Close the dropdown after selection
            item.closest('.dropdown-wrapper').classList.remove('active');
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-wrapper')) {
            document.querySelectorAll('.dropdown-wrapper').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}

function createVideoContainers() {
    const videoGrid = document.getElementById('videoGrid');
    videoGrid.innerHTML = '';
    
    for (let i = 0; i < 4; i++) {  // Only create 4 stream containers
        const container = document.createElement('div');
        container.className = 'video-container empty';
        container.id = `stream-${i}`;
        container.innerHTML = `
            <div class="empty-text">Stream ${i + 1}</div>
            <div class="video-overlay">
                <div class="video-controls">
                    <button class="control-btn" onclick="event.stopPropagation(); removeStream(${i})">Remove</button>
                </div>
            </div>
        `;
        videoGrid.appendChild(container);
    }
}

function createStreamButtons() {
    const streamButtons = document.getElementById('streamButtons');
    streamButtons.innerHTML = '';
    
    for (let i = 0; i < 4; i++) {  // Only create 4 stream buttons
        const button = document.createElement('button');
        button.className = 'stream-btn';
        button.textContent = i + 1;
        button.onclick = () => focusStream(i);
        streamButtons.appendChild(button);
    }
    updateStreamButtons();
}

function addChannelToStream(channel) {
    // Check if channel is already active
    const isChannelActive = activeStreams.some(stream => stream && stream.url === channel.url);
    if (isChannelActive) {
        alert('This channel is already being streamed.');
        return;
    }

    // Find first empty stream slot
    let targetSlot = -1;
    for (let i = 0; i < 4; i++) {  // Only check 4 slots
        if (!activeStreams[i]) {
            targetSlot = i;
            break;
        }
    }

    if (targetSlot === -1) {
        alert('Maximum of 4 streams allowed. Remove a stream first.');
        return;
    }

    const container = document.getElementById(`stream-${targetSlot}`);
    container.classList.remove('empty');

    // Clear existing content
    container.innerHTML = `
        <div class="video-overlay">
            <div class="video-controls">
                <button class="control-btn" onclick="removeStream(${targetSlot})">Remove</button>
            </div>
        </div>
    `;

    if (channel.type === 'm3u8') {
        const video = document.createElement('video');
        video.controls = true;
        video.muted = true;
        video.autoplay = true;
        video.style.width = '100%';
        video.style.height = '100%';
        
        // Picture-in-Picture support removed

        container.insertBefore(video, container.querySelector('.video-overlay'));

        // Initialize HLS.js for m3u8 streams
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(channel.url);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                // Loading complete
            });
            
            // Store HLS instance for cleanup
            video.hlsInstance = hls;
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = channel.url;
            video.addEventListener('loadedmetadata', () => {
                // Loading complete
            });
        }
    } else if (channel.type === 'iframe') {
        const iframe = document.createElement('iframe');
        iframe.src = channel.url;
        iframe.allowFullscreen = true;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        
        iframe.onload = () => {
            container.classList.remove('loading');
        };
        
        container.insertBefore(iframe, container.querySelector('.video-overlay'));
    }

    activeStreams[targetSlot] = channel;
    updateLayout();
    updateStreamButtons();
    focusStream(targetSlot);
}

function removeStream(index) {
    const container = document.getElementById(`stream-${index}`);
    const video = container.querySelector('video');
    
    // Clean up HLS instance if it exists
    if (video && video.hlsInstance) {
        video.hlsInstance.destroy();
    }
    
    container.className = 'video-container empty';
    container.innerHTML = `
        <div class="empty-text">Stream ${index + 1}</div>
        <div class="video-overlay">
            <div class="video-controls">
                <button class="control-btn" onclick="event.stopPropagation(); removeStream(${index})">Remove</button>
            </div>
        </div>
    `;
    
    activeStreams[index] = null;
    updateLayout();
    updateStreamButtons();
    
    // Reset focus if the removed stream was focused
    if (focusedStream === index) {
        focusedStream = 0;
        focusStream(0);
    }
}

function focusStream(index) {
    // Mute all videos first
    document.querySelectorAll('video').forEach(video => {
        video.muted = true;
    });
    
    // Remove focus from all streams
    document.querySelectorAll('.video-container').forEach(container => {
        container.classList.remove('focused');
    });
    
    // Update stream button states
    document.querySelectorAll('.stream-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    
    // Focus and unmute the selected stream
    const targetContainer = document.getElementById(`stream-${index}`);
    if (targetContainer && !targetContainer.classList.contains('empty')) {
        targetContainer.classList.add('focused');
        const video = targetContainer.querySelector('video');
        if (video) {
            video.muted = false;
        }
        targetContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    focusedStream = index;
}

function updateVideoSizes() {
    const containers = document.querySelectorAll('.video-container');
    if (containers.length === 0) return;
    
    // Get the height of the first container (all should be the same)
    const containerHeight = containers[0].offsetHeight;
    // Calculate width based on 16:9 aspect ratio
    const containerWidth = (containerHeight * 16) / 9;
    
    // Apply the width to all containers
    containers.forEach(container => {
        container.style.width = `${containerWidth}px`;
    });
}

function updateLayout() {
    // Always show all 4 containers in their fixed positions
    document.querySelectorAll('.video-container').forEach((container, index) => {
        container.style.display = 'block';
    });
    
    // Update video sizes after a short delay to ensure layout is calculated
    setTimeout(updateVideoSizes, 10);
}

// Update sizes on window resize
window.addEventListener('resize', updateVideoSizes);
// Initial update
window.addEventListener('load', updateVideoSizes);

function updateStreamButtons() {
    document.querySelectorAll('.stream-btn').forEach((btn, index) => {
        if (activeStreams[index]) {
            btn.classList.add('has-content');
        } else {
            btn.classList.remove('has-content');
        }
    });
}

function enablePiP(index) {
    const container = document.getElementById(`stream-${index}`);
    const video = container.querySelector('video');
    
    if (video && 'pictureInPictureEnabled' in document) {
        video.requestPictureInPicture().catch(err => {
            console.log('PiP not supported or failed:', err);
            alert('Picture-in-Picture is not supported for this stream or browser.');
        });
    } else {
        alert('Picture-in-Picture is only supported for video streams, not iframes.');
    }
}

function showPiPIndicator() {
    const indicator = document.getElementById('pipIndicator');
    indicator.classList.add('show');
}

function hidePiPIndicator() {
    const indicator = document.getElementById('pipIndicator');
    indicator.classList.remove('show');
}

function clearAllStreams() {
    for (let i = 0; i < 4; i++) {  // Only clear 4 streams
        if (activeStreams[i]) {
            removeStream(i);
        }
    }
}

let isFocusMode = false;

// Add event listener for the exit focus button
document.addEventListener('DOMContentLoaded', () => {
    const exitFocusBtn = document.getElementById('exitFocusBtn');
    if (exitFocusBtn) {
        exitFocusBtn.addEventListener('click', toggleSidebar);
    }
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const videoGrid = document.getElementById('videoGrid');
    const bottomControls = document.querySelector('.bottom-controls');
    const sidebarToggle = document.getElementById('sidebarToggle');
    
    isFocusMode = !isFocusMode;
    
    if (isFocusMode) {
        // Enter focus mode
        sidebar.style.display = 'none';
        bottomControls.style.display = 'none';
        
        // Store current scroll position
        document.body.dataset.scrollX = window.scrollX;
        document.body.dataset.scrollY = window.scrollY;
        
        // Apply focus mode
        videoGrid.classList.add('focus-mode');
        sidebarToggle.textContent = 'Exit Focus';
        document.body.style.overflow = 'hidden';
        document.getElementById('exitFocusBtn').classList.add('visible');
        
        // Mute all videos and remove focus
        document.querySelectorAll('video').forEach(video => {
            video.muted = true;
        });
        
        // Remove focus from any video container
        document.querySelectorAll('.video-container').forEach(container => {
            container.classList.remove('focused');
        });
        
        // Update stream buttons to show no active stream
        document.querySelectorAll('.stream-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Reset focused stream
        focusedStream = -1;
    } else {
        // Exit focus mode
        videoGrid.classList.remove('focus-mode');
        
        // Restore sidebar and controls
        sidebar.style.display = 'block';
        sidebar.style.width = '280px';
        bottomControls.style.display = 'flex';
        
        // Restore scroll position
        window.scrollTo({
            left: parseInt(document.body.dataset.scrollX || '0'),
            top: parseInt(document.body.dataset.scrollY || '0'),
            behavior: 'auto'
        });
        
        sidebarToggle.textContent = 'Focus Mode';
        document.body.style.overflow = '';
        document.getElementById('exitFocusBtn').classList.remove('visible');
    }
    
    // Update video sizes after layout change
    updateVideoSizes();
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key >= '1' && e.key <= '6') {
        focusStream(parseInt(e.key) - 1);
    } else if (e.key === 'Escape') {
        // Exit PiP mode
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        }
    }
});

// Search functionality
const channelSearch = document.getElementById('channelSearch');
const channelList = document.getElementById('channelList');
let allChannelItems = [];

// Store all channel items after they're created
const originalPopulateChannelList = populateChannelList;
populateChannelList = function() {
    originalPopulateChannelList();
    allChannelItems = Array.from(channelList.querySelectorAll('.channel-item'));
};

// Filter channels based on search input
channelSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    allChannelItems.forEach(item => {
        const channelName = item.textContent.toLowerCase();
        if (channelName.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Handle dropdown items
    document.querySelectorAll('.channel-dropdown').forEach(dropdown => {
        const header = dropdown.querySelector('.channel-item');
        const items = dropdown.querySelectorAll('.dropdown-item');
        const hasVisibleItems = Array.from(items).some(item => 
            item.textContent.toLowerCase().includes(searchTerm)
        );
        
        if (searchTerm === '' || hasVisibleItems || 
            header.textContent.toLowerCase().includes(searchTerm)) {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    });
});

// Initialize the application when the page loads
init();
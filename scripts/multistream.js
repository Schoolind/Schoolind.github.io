 // Sample channel data
 const channels = [
    { name: "ABC", url: "https://fl3.moveonjoy.com/ABC_EAST/index.m3u8", type: "m3u8" },
    { name: "Bein Sports", url: "https://fl3.moveonjoy.com/BEIN_SPORTS/index.m3u8", type: "m3u8" },
    { name: "Cartoon Network", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/j7frlCr9theTHiPhistuSPInuchosawE.m3u8", type: "m3u8" },
    { name: "CBS", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/v3weufn13faamb6eqbgd8myxv7zqe314.m3u8", type: "m3u8" },
    { name: "CBS Golazo", url: "https://dai.google.com/linear/hls/event/GxrCGmwST0ixsrc_QgB6qw/master.m3u8", type: "m3u8" },
    { name: "CBS Sports", url: "https://fl3.moveonjoy.com/CBS_SPORTS_NETWORK/index.m3u8", type: "m3u8" },
    { name: "ESPN", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/tgcyutly3zujtd3bgef8nevyy5v5n301.m3u8", type: "m3u8" },
    { name: "ESPN 2", url: "https://fl3.moveonjoy.com/ESPN_2/index.m3u8", type: "m3u8" },
    { name: "ESPN U", url: "https://fl3.moveonjoy.com/ESPN_U/index.m3u8", type: "m3u8" },
    { name: "ESPN News", url: "https://fl3.moveonjoy.com/ESPN_NEWS/index.m3u8", type: "m3u8" },
    { name: "ESPN Deportes ", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/45cb98f6ff304e742c65ec6a3b5d087f.m3u8", type: "m3u8" },
    { name: "ACCN", url: "https://fl3.moveonjoy.com/ACC_NETWORK/index.m3u8", type: "m3u8" },
    { name: "Big 10", url: "https://fl3.moveonjoy.com/BIG_TEN_NETWORK/tracks-v1a1/mono.ts.m3u8", type: "m3u8" },
    { name: "SECN", url: "https://fl3.moveonjoy.com/SEC_NETWORK/index.m3u8", type: "m3u8" },
    { name: "Fanduel TV", url: "https://fl3.moveonjoy.com/PAC_12/index.m3u8", type: "m3u8" },
    { name: "Food Network", url: "https://fl3.moveonjoy.com/FOOD_NETWORK/index.m3u8", type: "m3u8" },
    { name: "Fox Deportes ", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/26f350e4a688a9a15a10f1c76712551f.m3u8", type: "m3u8" },
    { name: "Fox Soccer plus ", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/trAbIqUqIYicRlcHuri1LwenehacrowU.m3u8", type: "m3u8" },
    { name: "FS1", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/j7xysrst3ytbc4h50of84mmbyrn4ba9v.m3u8", type: "m3u8" },
    { name: "FS2", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/9bfdo7kxd45sst08hbuh6rwhkykmitwb.m3u8", type: "m3u8" },
    { name: "fuboTV", url: "https://apollo.production-public.tubi.io/live/ac-fubo.m3u8", type: "m3u8" },
    { name: "ION", url: "https://fl3.moveonjoy.com/ION_TV/index.m3u8", type: "m3u8" },
    { name: "HGTV", url: "https://fl3.moveonjoy.com/HGTV/index.m3u8", type: "m3u8" },
    { name: "laligatv", url: "https://kleanembed.online/embed/pajip6maru1rlcoz1qizebitocof4aP7", type: "iframe" },
    { name: "NBC", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/maqOnut62tRoHESac2r8ca9ay9b72hAw.m3u8", type: "m3u8" },
    { name: "NBA TV", url: "https://fl3.moveonjoy.com/NBA_TV/index.m3u8", type: "m3u8" },
    { name: "NFL Network", url: "https://fl3.moveonjoy.com/NFL_NETWORK/index.m3u8", type: "m3u8" },
    { name: "NFL Redzone", url: "https://fl3.moveonjoy.com/NFL_RedZone/index.m3u8", type: "m3u8" },
    { name: "NHL Network", url: "https://fl3.moveonjoy.com/NHL_NETWORK/index.m3u8", type: "m3u8" },
    { name: "Premier Sports 1", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/aE5dT9yH2uJ8gP1zWn7fK4oL6mV3cB.m3u8", type: "m3u8" },
    { name: "Premier Sports 2", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/sY1bX6cA8rM3wQ7iN9jV2pE5hU0lGf.m3u8", type: "m3u8" },
    { name: "TBS", url: "https://fl3.moveonjoy.com/TBS/index.m3u8", type: "m3u8" },
    { name: "TNT", url: "https://fl3.moveonjoy.com/TNT/index.m3u8", type: "m3u8" },
    { name: "Tudn", url: "https://streaming-live-fcdn.api.prd.univisionnow.com/tudn/tudn.isml/hls/tudn.m3u8", type: "m3u8" },
    { name: "Univision", url: "https://streaming-live-fcdn.api.prd.univisionnow.com/kmex/kmex.isml/hls/kmex.m3u8", type: "m3u8" },
    { name: "Unimas", url: "https://streaming-live-fcdn.api.prd.univisionnow.com/kftr/kftr.isml/hls/kftr.m3u8", type: "m3u8" },
    { name: "TruTV", url: "https://fl3.moveonjoy.com/TRU_TV/index.m3u8", type: "m3u8" },
    { name: "USA", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/prObIniBoc7ltizEGEvUSpLstaClmlbr.m3u8", type: "m3u8" },
    { name: "Tenis channel", url: "https://fl4.moveonjoy.com/TENIS_CHANNEL/index.m3u8", type: "m3u8" },
    { name: "YES Network", url: "https://fl3.moveonjoy.com/YES_NETWORK/index.m3u8", type: "m3u8" },
    { 
        name: "MLB TV", 
        type: "dropdown",
        options: [
            { name: "Loading games...", url: "#", type: "iframe" }
        ]
    },
    { name: "MLB Network", url: "https://fl3.moveonjoy.com/MLB_NETWORK/index.m3u8", type: "m3u8" },
    { 
        name: "DAZN", 
        type: "dropdown",
        options: [
            { name: "Dazn 1 germany", url: "https://popcdn.day/cue.php?stream=DAZNDE", type: "iframe" },
            { name: "Dazn 2 germany", url: "https://popcdn.day/cue.php?stream=DAZN2DE", type: "iframe" },
            { name: "Dazn UK", url: "https://popcdn.day/cue.php?stream=DAZNUK", type: "iframe" },
            { name: "Dazn 1 spanish", url: "https://popcdn.day/go.php?stream=DAZN1ES", type: "iframe" },
            { name: "Dazn 2 spanish", url: "https://popcdn.day/go.php?stream=DAZN2ES", type: "iframe" },
            { name: "Dazn 3 spanish", url: "https://popcdn.day/go.php?stream=DAZN3ES", type: "iframe" },
            { name: "Dazn 4 spanish", url: "https://popcdn.day/go.php?stream=DAZN4ES", type: "iframe" },
            { name: "Dazn f1", url: "https://popcdn.day/go.php?stream=DAZNf1ES", type: "iframe" },
            { name: "Dazn laliga", url: "https://popcdn.day/go.php?stream=DAZNLaLiga", type: "iframe" },
            { name: "Dazn laliga 2", url: "https://popcdn.day/go.php?stream=DAZNLaLiga2", type: "iframe" },
            { name: "Dazn Portugal", url: "https://popcdn.day/go.php?stream=ELEVEN1", type: "iframe" },
            { name: "Dazn Portugal 2", url: "https://popcdn.day/go.php?stream=ELEVEN2", type: "iframe" },
            { name: "Dazn Portugal 3", url: "https://popcdn.day/go.php?stream=ELEVEN3", type: "iframe" },
            { name: "Dazn Portugal 4", url: "https://popcdn.day/go.php?stream=ELEVEN4", type: "iframe" },
            { name: "Dazn Portugal 5", url: "https://popcdn.day/go.php?stream=ELEVEN5", type: "iframe" },
            { name: "Dazn Portugal 6", url: "https://popcdn.day/go.php?stream=ELEVEN6", type: "iframe" },
        ]
    },
     
    { 
        name: "Fanduel sports", 
        type: "dropdown",
        options: [
            { name: "Fanduel 1 👑", url: "https://topembed.pw/channel/FanDuelSportsOhio[USA]", type: "iframe" },
            { name: "Fanduel 2 👑", url: "https://topembed.pw/channel/FanDuelSportsFlorida[USA]", type: "iframe" },
            { name: "Fanduel 3 👑", url: "https://topembed.pw/channel/FanDuelSportsDetroit[USA]", type: "iframe" },
            { name: "Fanduel 4 👑", url: "https://topembed.pw/channel/FanDuelSportKansasCity[USA]", type: "iframe" },
            { name: "Fanduel 5 👑", url: "https://topembed.pw/channel/FanDuelSportsMidwest[USA]", type: "iframe" },
            { name: "Fanduel 6 👑", url: "https://topembed.pw/channel/FanDuelSportsWisconsin[USA]", type: "iframe" },
            { name: "Fanduel 7 👑", url: "https://topembed.pw/channel/FanDuelSportsSoutheast[USA]", type: "iframe" },

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
        name: "NBC Sports", 
        type: "dropdown",
        options: [
            { name: "NBC", url: "https://xumo-xumoent-vc-122-sjv70.fast.nbcuni.com/live/master.m3u8", type: "m3u8" },
            { name: "NBC philadelphia", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/b46c64f505d77d9c3ba37c2f3037f0f3.m3u8", type: "m3u8" },
            { name: "NBC california👑", url: "https://thedaddy.to/embed/stream-755.php", type: "iframe" },
            { name: "NBC bayarea", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/5411235d278f9abfce9db28c140374d5.m3u8", type: "m3u8" },
            { name: "NBC boston👑", url: "https://thedaddy.to/embed/stream-754.php", type: "iframe" },
            { name: "NBC golf", url: "https://popcdn.day/cue.php?stream=GOLFChannel", type: "iframe" },
        ]
    },
    { 
        name: "TNT SPORTS", 
        type: "dropdown",
        options: [
            { name: "Server 1", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/FrofUdRljoCLdruGUdR295IfisTlsW1w.m3u8", type: "m3u8" },
            { name: "Server 2", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/c5phutHUkothlwRudRO8rosaS3B64ini.m3u8", type: "m3u8" },
            { name: "Server 3", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/SodrItO5WeQeFraDRoQa900eSw68I9LG.m3u8", type: "m3u8" },
            { name: "Server 4", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/8esiM7BRatIQ3cAdaxes34tesIbrOpOp.m3u8", type: "m3u8" },
            { name: "Server 5 👑", url: "https://topembed.pw/channel/TNTSports5[UK]", type: "iframe" },
            { name: "Server 6 👑", url: "https://topembed.pw/channel/TNTSports6[UK]", type: "iframe" },
            { name: "Server 7 👑", url: "https://topembed.pw/channel/TNTSports7[UK]", type: "iframe" },
            { name: "Server 8 👑", url: "https://topembed.pw/channel/TNTSports8[UK]", type: "iframe" },
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
            { name: "skysports", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/kl11IkOsWATR8duxiWrOyiprERl2hLx4.m3u8", type: "m3u8" },
            { name: "skysports action", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/wra2wlraTrewrAwohlsiCr0kUpHlswuc.m3u8", type: "m3u8" },
            { name: "skysports cricket", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/j5ru6icHofROsespidec64w0s7lgo8ot.m3u8", type: "m3u8" },
            { name: "skysports football", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/zuw3aYlboraPaStUP4o5ropHlbrospev.m3u8", type: "m3u8" },
            { name: "skysports f1", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/888520f36cd94c5da4c71fddc1a5fc9b.m3u8", type: "m3u8" },
            { name: "skysports golf", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/juDiYAyaWljAtH55usw2sWogINI49kIY.m3u8", type: "m3u8" },
            { name: "skysports main event", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/4reStAcaHuraStIc3o7rOdRAprEy2glB.m3u8", type: "m3u8" },
            { name: "skysports mix", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/phAjl4we7iw0agitOpro8Rlcrotrufre.m3u8", type: "m3u8" },
            { name: "skysports motogp", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/1c6f53f565af34b3099d28adba983591.m3u8", type: "m3u8" },
            { name: "skysports news", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/ZiProtriRlspiriBrI2oProjohAfretA.m3u8", type: "m3u8" },
            { name: "skysports premier league", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/swapr5jlpHidrlfR65ofRi8a0itHI6oc.m3u8", type: "m3u8" },
            { name: "skysports racing", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/x5Dodrl6Ro21RUprudEQAFRUTEfLPhec.m3u8", type: "m3u8" },
            { name: "skysports tenis", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/pA5reZusPAvispo16hUb2e5pahlthLB2.m3u8", type: "m3u8" },
        
        ]
    },
    { 
        name: "Nickelodeon", 
        type: "dropdown",
        options: [
            { name: "Nickelodeon", url: "https://subrugopuciblchlvl6uqa666p23rig.happy-ending.site/e07a573f0a6ea861a83fc63aa1fdf2cb.m3u8", type: "m3u8" },
            { name: "Nick jr", url: "https://fl3.moveonjoy.com/NICK_JR/index.m3u8", type: "m3u8" },
            { name: "Nicktoons", url: "https://fl3.moveonjoy.com/NICKTOONS/index.m3u8", type: "m3u8" },
            { name: "Nick teen", url: "https://fl3.moveonjoy.com/Teen_Nick/index.m3u8", type: "m3u8" },
            { name: "Nick music", url: "https://fl3.moveonjoy.com/NICK_MUSIC/index.m3u8", type: "m3u8" },
        ]
    },
    { 
        name: "HBO", 
        type: "dropdown",
        options: [
            { name: "HBO", url: "https://fl3.moveonjoy.com/HBO/index.m3u8", type: "m3u8" },
            { name: "HBO 2", url: "https://fl3.moveonjoy.com/HBO_2/index.m3u8", type: "m3u8" },
            { name: "HBO Comedy", url: "https://fl3.moveonjoy.com/HBO_COMEDY/index.m3u8", type: "m3u8" },
            { name: "HBO Family", url: "https://fl3.moveonjoy.com/HBO_FAMILY/index.m3u8", type: "m3u8" },
            { name: "HBO Zone", url: "https://fl3.moveonjoy.com/HBO_ZONE/index.m3u8", type: "m3u8" },
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
// Channel ID mapping for EPG
// For channels with multiple streams, use an array of [id, displayName] pairs
const CHANNEL_ID_MAP = {
  'ABC.html': '403805',
  'cbs.html': '403849',
  'espn.html': '403793',
  'cbssportsnetwork.html': '403807',
  'espn2.html': '403821',
  'espnu.html': '403486',
  'espnnews.html': '417108',
  'espndeportes.html': '403708',
  'fox.html': '403858',
  'fs1.html': '403908',
  'fs2.html': '403457',
  'foxsportssoccer.html': '430102',
  'fdeportes.html': '403532',
  'TNT.html': '403615',
  'tbs.html': '403640',
  'USA.html': '403626',
  'espnacc.html': '403534',
  'b10n.html': '403557',
  'sec.html': '403901',
  'nflnetwork.html': '403667',
  'nba.html': '403676',
  'mlbnetwork.html': '403836',
  'nhl.html': '403443',
  'nflredzone.html': '403787',
  'nhlredzone.html': '403787',
  'premsports1.html': '219100',
  'premsports2.html': '219104',
  'Tennis.html': '403834',
  'channel5.html': '9198',
  'ION.html': '403718',
  'foodnetwork.html': '403509',
  'hgtv.html': '403953',
  'nicktoons.html': '403847',
  'cartoonnetwork.html': '403461',
  'Unimas.html': '403565',
  'Univision.html': '403875',
  'nbc.html': '403619'
};

// Track active stream index and cycling state for each channel
const channelStates = new Map();

function createGuideCard(parent, id, title = '') {
  const guideDiv = document.createElement('div');
  guideDiv.id = id;
  guideDiv.className = 'guide-card';
  
  // Set initial styles - hidden by default
  const styles = 'position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.8);padding:5px;font-size:12px;transition:opacity 0.3s ease;pointer-events:none;opacity:0;';
  guideDiv.style.cssText = styles;
  
  if (title) {
    const titleDiv = document.createElement('div');
    titleDiv.className = 'stream-title';
    titleDiv.textContent = title;
    titleDiv.style.cssText = 'color:#4fd1c5;font-weight:bold;margin-bottom:3px;font-size:11px;';
    guideDiv.appendChild(titleDiv);
  }
  
  parent.appendChild(guideDiv);
  return guideDiv;
}

function initAutoGuideCards() {
  const linkBoxes = document.querySelectorAll('#link-container a.link-box');
  
  linkBoxes.forEach((box, idx) => {
    // Skip if a guide card already exists
    if (box.querySelector('.guide-card')) return;

    // Determine channel ID from href mapping
    const href = box.getAttribute('href');
    const fileName = href ? href.split('/').pop() : '';
    const channelData = CHANNEL_ID_MAP[fileName];
    if (!channelData) return; // Skip if we don't have a mapping

    // Handle multiple streams
    if (Array.isArray(channelData)) {
      const channelKey = `${fileName}-${idx}`;
      const cards = [];
      let cycleInterval;
      let currentIndex = 0;
      
      // Initialize channel state
      channelStates.set(channelKey, { cycleInterval: null, currentIndex: 0 });
      
      // Create all guide cards (initially hidden)
      channelData.forEach((stream, streamIdx) => {
        const cardId = `autoGuideCard-${idx}-${streamIdx}`;
        const guideDiv = createGuideCard(box, cardId, stream.name);
        loadEPG(stream.id, cardId);
        cards.push(guideDiv);
      });
      
      const showNextStream = () => {
        // Hide current card
        const currentCard = cards[currentIndex];
        if (currentCard) {
          currentCard.style.opacity = '0';
          setTimeout(() => {
            currentCard.style.display = 'none';
          }, 300);
        }
        
        // Move to next index
        currentIndex = (currentIndex + 1) % cards.length;
        const state = channelStates.get(channelKey);
        state.currentIndex = currentIndex;
        
        // Show next card
        const nextCard = cards[currentIndex];
        if (nextCard) {
          nextCard.style.display = 'block';
          // Force reflow to enable transition
          void nextCard.offsetHeight;
          nextCard.style.opacity = '1';
          
          // Force EPG data reload to ensure progress bar updates
          const stream = channelData[currentIndex];
          loadEPG(stream.id, nextCard.id);
        }
      };
      
      const startCycling = () => {
        const state = channelStates.get(channelKey);
        if (state.cycleInterval) return; // Already cycling
        
        // Show first card immediately
        const firstCard = cards[0];
        if (firstCard) {
          firstCard.style.display = 'block';
          firstCard.style.opacity = '1';
          
          // Force EPG data reload to ensure progress bar updates
          const stream = channelData[0];
          loadEPG(stream.id, firstCard.id);
        }
        
        // Start cycling through streams
        state.cycleInterval = setInterval(showNextStream, 3000);
      };
      
      const stopCycling = () => {
        const state = channelStates.get(channelKey);
        if (!state.cycleInterval) return;
        
        clearInterval(state.cycleInterval);
        state.cycleInterval = null;
        
        // Hide all cards
        cards.forEach(card => {
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        });
      };
      
      // Set up hover events
      box.addEventListener('mouseenter', startCycling);
      box.addEventListener('mouseleave', stopCycling);
      
    } else {
      // Single stream - simple show/hide on hover with EPG refresh
      const cardId = `autoGuideCard-${idx}`;
      const guideDiv = createGuideCard(box, cardId);
      
      box.addEventListener('mouseenter', () => {
        guideDiv.style.opacity = '1';
        // Force EPG data reload to ensure progress bar updates
        loadEPG(channelData, cardId);
      });
      
      box.addEventListener('mouseleave', () => {
        guideDiv.style.opacity = '0';
      });
      
      // Load EPG data after a short delay to ensure element exists
      setTimeout(() => {
        loadEPG(channelData, cardId);
      }, 100);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAutoGuideCards);
} else {
  initAutoGuideCards();
}

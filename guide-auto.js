// Automatically add guide cards and hover behavior to all link-box channels
// Channel ID mapping for EPG (extend as needed)
const CHANNEL_ID_MAP = {
  'ABC.html': '399930',
  'cbs.html': '403849',
  'espn.html': '403793',
  'cbssportsnetwork.html': '403807',
  'espn2.html': '403821',
  'espnu.html': '403486',
  'espnnews.html': '417108',
  'espndeportes.html': '403708',
  'fox.html': '403788',
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
  'channel5.html': '9198',
  // Add more mappings as needed
};

function initAutoGuideCards() {
  const linkBoxes = document.querySelectorAll('#link-container a.link-box');
  linkBoxes.forEach((box, idx) => {
    // Skip if a guide card already exists
    if (box.querySelector('.guide-card')) return;

    // Determine channel ID from href mapping
    const href = box.getAttribute('href');
    const fileName = href ? href.split('/').pop() : '';
    const channelId = CHANNEL_ID_MAP[fileName];
    if (!channelId) return; // Skip if we don't have a mapping

    // Create guide card div
    const cardId = `autoGuideCard-${idx}`;
    const guideDiv = document.createElement('div');
    guideDiv.id = cardId;
    guideDiv.className = 'guide-card';
    guideDiv.style.cssText = 'position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.7);padding:5px;font-size:12px;opacity:0;transition:opacity 0.2s ease;pointer-events:none;';
    box.appendChild(guideDiv);

    // Load EPG data
    loadEPG(channelId, cardId);

    // Hover behavior
    box.addEventListener('mouseenter', () => {
      guideDiv.style.opacity = '1';
    });
    box.addEventListener('mouseleave', () => {
      guideDiv.style.opacity = '0';
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAutoGuideCards);
} else {
  initAutoGuideCards();
}

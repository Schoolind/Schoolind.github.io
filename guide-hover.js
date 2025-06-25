// Initialize guide card hover behavior for multiple channels
function initGuideHover() {
  // Configuration for channels with guide cards
  const channels = [
    { 
      selector: 'a[href="shows/espn.html"]',
      cardId: 'guideCard' 
    },
    { 
      selector: 'a[href="shows/ABC.html"]',
      cardId: 'abcGuideCard' 
    },
    { 
      selector: 'a[href="shows/cbs.html"]',
      cardId: 'cbsGuideCard' 
    }
  ];

  // Set up hover behavior for each channel
  channels.forEach(({ selector, cardId }) => {
    const channelBox = document.querySelector(selector);
    const guideCard = document.getElementById(cardId);
    
    if (channelBox && guideCard) {
      channelBox.addEventListener('mouseenter', () => {
        guideCard.style.opacity = '1';
      });
      
      channelBox.addEventListener('mouseleave', () => {
        guideCard.style.opacity = '0';
      });
    }
  });
}

// Run when DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGuideHover);
} else {
  initGuideHover();
}

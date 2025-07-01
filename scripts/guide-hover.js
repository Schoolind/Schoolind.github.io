// Initialize guide card hover behavior for multiple channels
function initGuideHover() {
  // Only initialize if in grid view
  const linkContainer = document.querySelector('.link-container');
  if (!linkContainer || !linkContainer.classList.contains('grid-view')) {
    return;
  }

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
      // Clear any existing event listeners
      const newChannelBox = channelBox.cloneNode(true);
      channelBox.parentNode.replaceChild(newChannelBox, channelBox);
      
      // Add new event listeners
      newChannelBox.addEventListener('mouseenter', () => {
        if (document.querySelector('.link-container').classList.contains('grid-view')) {
          guideCard.style.opacity = '1';
        }
      });
      
      newChannelBox.addEventListener('mouseleave', () => {
        guideCard.style.opacity = '0';
      });
    }
  });
}

// Initialize on load and when view changes
document.addEventListener('DOMContentLoaded', function() {
  // Initial setup
  initGuideHover();
  
  // Update on view change
  document.addEventListener('viewChanged', function() {
    // Reinitialize hover behavior when view changes
    initGuideHover();
    
    // Hide all guide cards when switching away from grid view
    if (!document.querySelector('.link-container').classList.contains('grid-view')) {
      document.querySelectorAll('.guide-card').forEach(card => {
        card.style.opacity = '0';
      });
    }
  });
});

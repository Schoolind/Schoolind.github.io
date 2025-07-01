// Smooth scroll to updates section
document.getElementById('updatesLink').addEventListener('click', function(e) {
    e.preventDefault();
    const updatesSection = document.getElementById('updates');
    
    // Add animation class to the updates section
    updatesSection.style.opacity = '0';
    updatesSection.style.transform = 'translateY(20px)';
    updatesSection.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    // Scroll to the section
    window.scrollTo({
        top: updatesSection.offsetTop - 100,
        behavior: 'smooth'
    });
    
    // Animate the section in
    setTimeout(() => {
        updatesSection.style.opacity = '1';
        updatesSection.style.transform = 'translateY(0)';
    }, 300);
    
    // Add a subtle highlight effect
    updatesSection.style.boxShadow = '0 0 0 2px rgba(79, 195, 247, 0.3)';
    updatesSection.style.transition = 'box-shadow 0.5s ease';
    
    // Remove the highlight after animation
    setTimeout(() => {
        updatesSection.style.boxShadow = 'none';
    }, 2000);
});
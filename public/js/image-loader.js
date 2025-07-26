// Image Loading Handler - Ensures images appear fully loaded
(function() {
  'use strict';
  
  // Handle images that are already loaded when script runs
  function handleExistingImages() {
    const images = document.querySelectorAll('img:not(.loaded)');
    images.forEach(function(img) {
      if (img.complete && img.naturalHeight !== 0) {
        img.classList.add('loaded');
      }
    });
  }
  
  // Set up event listeners for new images
  function setupImageListeners() {
    document.addEventListener('load', function(e) {
      if (e.target.tagName === 'IMG') {
        e.target.classList.add('loaded');
      }
    }, true); // Use capture phase
    
    document.addEventListener('error', function(e) {
      if (e.target.tagName === 'IMG') {
        e.target.classList.add('error');
      }
    }, true); // Use capture phase
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      handleExistingImages();
      setupImageListeners();
    });
  } else {
    handleExistingImages();
    setupImageListeners();
  }
})();

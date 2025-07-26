// Image Loading Handler - Enhanced skeleton animations with smooth transitions
(function() {
  'use strict';
  
  // Handle individual image loading
  function handleImageLoad(img) {
    const container = img.closest('.banner-container, .post-thumbnail');
    if (container) {
      // Add a small delay for better visual transition
      setTimeout(function() {
        container.classList.add('loaded');
      }, 150);
    }
  }
  
  // Handle image loading error
  function handleImageError(img) {
    const container = img.closest('.banner-container, .post-thumbnail');
    if (container) {
      container.classList.add('error');
      // Still fade in the broken image placeholder
      setTimeout(function() {
        container.classList.add('loaded');
      }, 300);
    }
  }
  
  // Check if image is already loaded
  function isImageLoaded(img) {
    return img.complete && img.naturalHeight !== 0;
  }
  
  // Handle images that are already loaded when script runs
  function handleExistingImages() {
    const images = document.querySelectorAll('.banner-image, .thumbnail-image');
    images.forEach(function(img) {
      if (isImageLoaded(img)) {
        handleImageLoad(img);
      } else {
        // Set up load event listener
        img.addEventListener('load', function() {
          handleImageLoad(this);
        });
        
        img.addEventListener('error', function() {
          handleImageError(this);
        });
      }
    });
  }
  
  // Set up observers for dynamically added images
  function setupImageObserver() {
    if ('MutationObserver' in window) {
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1) { // Element node
              const images = node.querySelectorAll ? 
                node.querySelectorAll('.banner-image, .thumbnail-image') : 
                [];
              
              images.forEach(function(img) {
                if (isImageLoaded(img)) {
                  handleImageLoad(img);
                } else {
                  img.addEventListener('load', function() {
                    handleImageLoad(this);
                  });
                  
                  img.addEventListener('error', function() {
                    handleImageError(this);
                  });
                }
              });
            }
          });
        });
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }
  
  // Initialize when DOM is ready
  function initialize() {
    handleExistingImages();
    setupImageObserver();
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();

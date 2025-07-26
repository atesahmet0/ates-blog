// Image Loading Handler - Enhanced skeleton animations with smooth transitions
(function() {
  'use strict';
  
  // Handle individual image loading
  function handleImageLoad(img) {
    const container = img.closest('.banner-container, .post-thumbnail');
    if (container) {
      // Ensure image is fully decoded before showing
      if (img.decode) {
        img.decode().then(function() {
          container.classList.add('loaded');
        }).catch(function() {
          // Fallback if decode isn't supported or fails
          setTimeout(function() {
            container.classList.add('loaded');
          }, 100);
        });
      } else {
        // Fallback for browsers without decode support
        setTimeout(function() {
          container.classList.add('loaded');
        }, 100);
      }
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
  
  // Setup image loading for all images
  function setupImageLoading() {
    // Handle all images - both eager and lazy
    const allImages = document.querySelectorAll('.banner-image, .thumbnail-image');
    
    allImages.forEach(function(img) {
      // If image is already loaded, handle it immediately
      if (isImageLoaded(img)) {
        handleImageLoad(img);
      } else {
        // Set up event listeners for loading
        img.addEventListener('load', function() {
          handleImageLoad(this);
        });
        
        img.addEventListener('error', function() {
          handleImageError(this);
        });
      }
    });
  }
  
  // Setup intersection observer for lazy loaded images (performance optimization)
  function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const lazyImageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            
            // Start loading the image when it comes into view
            if (img.loading === 'lazy' && !img.dataset.observed) {
              img.dataset.observed = 'true';
              
              // Force the browser to start loading the image
              if (!isImageLoaded(img)) {
                // The image will trigger load/error events which are already set up
                img.loading = 'eager';
              }
            }
          }
        });
      }, {
        rootMargin: '50px'
      });
      
      // Observe all lazy loaded images
      const lazyImages = document.querySelectorAll('.thumbnail-image[loading="lazy"]');
      lazyImages.forEach(function(img) {
        lazyImageObserver.observe(img);
      });
    }
  }
  
  // Handle dynamically added images
  function setupImageObserver() {
    if ('MutationObserver' in window) {
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1 && node.querySelectorAll) {
              const newImages = node.querySelectorAll('.banner-image, .thumbnail-image');
              
              newImages.forEach(function(img) {
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
  
  // Initialize everything
  function initialize() {
    setupImageLoading();
    setupLazyLoading();
    setupImageObserver();
  }
  
  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();

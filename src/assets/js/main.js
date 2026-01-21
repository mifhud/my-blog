// Theme Toggle - Use event delegation for reliability
document.addEventListener('click', function(e) {
  if (e.target.closest('.theme-toggle')) {
    e.preventDefault();

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    console.log('Toggling theme from', currentTheme, 'to', newTheme);

    // Update DOM
    document.documentElement.setAttribute('data-theme', newTheme);

    // Save to localStorage
    try {
      localStorage.setItem('theme', newTheme);
      console.log('Theme saved to localStorage:', localStorage.getItem('theme'));
    } catch (e) {
      console.error('Failed to save theme:', e);
    }
  }
});

// Menu Toggle
document.addEventListener('click', function(e) {
  if (e.target.closest('.menu-toggle')) {
    const menuToggle = e.target.closest('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    }
  }
});

// Initialize features when DOM is ready
(function() {
  function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      if (!anchor.hasAttribute('data-smooth-scroll')) {
        anchor.setAttribute('data-smooth-scroll', 'true');
        anchor.addEventListener('click', function (e) {
          const href = this.getAttribute('href');
          if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        });
      }
    });
  }

  function initializeCopyButtons() {
    document.querySelectorAll('pre code').forEach(block => {
      if (!block.parentElement.querySelector('.copy-button')) {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.addEventListener('click', () => {
          navigator.clipboard.writeText(block.textContent).then(() => {
            button.textContent = 'Copied!';
            setTimeout(() => {
              button.textContent = 'Copy';
            }, 2000);
          });
        });
        block.parentElement.style.position = 'relative';
        block.parentElement.appendChild(button);
      }
    });
  }

  function initialize() {
    initializeSmoothScroll();
    initializeCopyButtons();
  }

  // Run immediately if DOM is already ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();

// Add copy button styles
const style = document.createElement('style');
style.textContent = `
  .copy-button {
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 4px 12px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  pre:hover .copy-button {
    opacity: 1;
  }
  
  .copy-button:hover {
    opacity: 1;
    filter: brightness(0.9);
  }
`;
document.head.appendChild(style);

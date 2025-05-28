// responsive.js - Responsive navbar handler without toggle menu

class ResponsiveDesign {
  constructor() {
    this.mobileBreakpoint = 768;
    this.header = document.getElementById('header');
    this.navbar = document.getElementById('navbar');
    this.init();
  }

  init() {
    this.setupViewport();
    this.adjustLayout();
    this.setupResizeHandler();
    this.setupTouchOptimizations();
  }

  setupViewport() {
    const existingMeta = document.querySelector('meta[name="viewport"]');
    if (!existingMeta) {
      const viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      viewportMeta.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewportMeta);
    }
  }

  adjustLayout() {
    const isMobile = window.innerWidth <= this.mobileBreakpoint;

    if (this.navbar) {
      // Always display navbar
      this.navbar.style.display = 'flex';

      if (isMobile) {
        this.navbar.style.flexDirection = 'column';
        this.navbar.style.position = 'static';
        this.navbar.style.width = '100%';
        this.navbar.style.backgroundColor = '#f8f9fa';
        this.navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      } else {
        this.navbar.style.flexDirection = 'row';
        this.navbar.style.position = 'static';
        this.navbar.style.width = 'auto';
        this.navbar.style.backgroundColor = 'transparent';
        this.navbar.style.boxShadow = 'none';
      }

      // Nav item styles
      this.navbar.querySelectorAll('li').forEach(item => {
        item.style.padding = isMobile ? '15px 0' : '0 20px';
        item.style.textAlign = isMobile ? 'center' : 'left';
        item.style.width = isMobile ? '100%' : 'auto';
        item.style.borderBottom = isMobile ? '1px solid #eee' : 'none';
      });
    }
  }

  setupResizeHandler() {
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.adjustLayout();
      }, 200);
    });
  }

  setupTouchOptimizations() {
    document.querySelectorAll('a, button').forEach(el => {
      el.style.minHeight = '44px';
      el.style.minWidth = '44px';
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ResponsiveDesign();
});
function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
}

  function toggleMenu() {
  document.getElementById('navbar').classList.toggle('active');
}

  function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
  }


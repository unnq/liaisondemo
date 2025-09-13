// js/mobilemenu.js
(() => {
    const btn   = document.querySelector('.menu-toggle');
    const menu  = document.getElementById('mobile-menu');
    const scrim = document.querySelector('.menu-scrim');
    const links = menu ? menu.querySelectorAll('a') : [];
  
    if (!btn || !menu || !scrim) return;
  
    const OPEN = () => {
      btn.setAttribute('aria-expanded', 'true');
      menu.hidden = false;
      menu.setAttribute('data-open', 'true');
      scrim.hidden = false;
      scrim.setAttribute('data-open', 'true');
      document.body.classList.add('no-scroll');
    };
  
    const CLOSE = () => {
      btn.setAttribute('aria-expanded', 'false');
      menu.removeAttribute('data-open');
      scrim.removeAttribute('data-open');
      // Allow transition to play before hiding
      setTimeout(() => {
        menu.hidden = true;
        scrim.hidden = true;
      }, 200);
      document.body.classList.remove('no-scroll');
    };
  
    const TOGGLE = () => (
      btn.getAttribute('aria-expanded') === 'true' ? CLOSE() : OPEN()
    );
  
    btn.addEventListener('click', TOGGLE);
    scrim.addEventListener('click', CLOSE);
  
    // Close on ESC
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') CLOSE();
    });
  
    // Close when a menu link is clicked
    links.forEach(a => a.addEventListener('click', CLOSE));
  
    // Auto-close if resizing to desktop
    const mq = window.matchMedia('(min-width: 961px)');
    mq.addEventListener('change', (e) => { if (e.matches) CLOSE(); });
  })();
  

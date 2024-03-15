import { updateLinkHref, highlightActiveLink } from './path.js';

document.addEventListener("DOMContentLoaded", () => {
  const menu = createMenu();
  const firstElement = document.body.firstChild;
  document.body.insertBefore(menu, firstElement);
  if (sessionStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark');
    const modeButton = document.getElementById('modeButton');
    modeButton.textContent = '🌙';
  }
  globalThis.onload = function() {
    const menu = document.getElementById('menu');
    const checkbox = document.querySelector('#menuToggle input');
    menu.addEventListener('click', function() {
      checkbox.checked = false;
    });
  }
  updateModeButtonText();
});

const createMenu = () => {
  const originalHrefs = [];
  const buildContent = () => {
    const newContent = document.createElement('nav');
    newContent.innerHTML = `
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li><a href="/">Home</a></li>
          <li><a href="../pages/1/index.html" class="code">CSS</a></li>
          <li><a href="../pages/2/index.html" class="code">WebGL</a></li>
          <li><a href="../pages/3/index.html" class="drawing">GenAI</a></li>
          <li><a href="../pages/4/index.html" class="drawing">iPad</a></li>
          <li><a href="../pages/5/index.html">etc</a></li>
          <li></li>
        </ul>
      </div>
      `;
    return newContent;
  };

  const mode = () => {
    const body = document.body;
    body.classList.toggle('dark');
    const isDarkMode = body.classList.contains('dark');
    sessionStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
    updateModeButtonText();
  };
  const updateModeButtonText = () => {
    const modeButton = document.getElementById('modeButton');
    const modeText = sessionStorage.getItem('mode') === 'dark' ? '🌼' : '🌙';
    modeButton.textContent = modeText;
  };

  globalThis.mode = mode;
  globalThis.updateModeButtonText = updateModeButtonText;
  
  const initializeLinks = (newContent) => {
    const links = newContent.querySelectorAll('a');
    links.forEach((link, index) => {
      originalHrefs[index] = link.getAttribute('href');
      updateLinkHref(link, originalHrefs[index], globalThis.location);
    });
    highlightActiveLink(links, globalThis.location.pathname);
  };

  const addEventListeners = (newContent) => {
    document.addEventListener("DOMContentLoaded", () => {
      const items = newContent.querySelectorAll('.main-card li');
      items.forEach((item, index) => {
        if (index !== 0) {
          const indexText = index;
          item.style.setProperty('--index', `"${indexText}"`);
        }
      });
    });

    globalThis.addEventListener('popstate', () => {
      highlightActiveLink(newContent.querySelectorAll('a'), globalThis.location.pathname);
    });
  };

  const newContent = buildContent();
  initializeLinks(newContent);
  addEventListeners(newContent);

  return newContent;
};


